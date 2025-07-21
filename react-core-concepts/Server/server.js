const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const crypto = require("crypto");
const rateLimit = require("express-rate-limit");

const app = express();
app.set("trust proxy", 1);
const PORT = process.env.PORT || 3000;

app.use(cors());

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 15,
    handler: (req, res) => {
        res.status(429).json({
            success: false,
            message: "You're sending too many requests. Please wait a minute and try again.",
        });
    },
});

app.use(limiter);

// Category URL mapping
const CATEGORY_URLS = {
    'women-saree': 'https://www.aarong.com/women/saree',
    'women-shalwar-kameez': 'https://www.aarong.com/women/shalwar-kameez',
    'women-kurta': 'https://www.aarong.com/women/kurta',
    'women-accessories': 'https://www.aarong.com/women/accessories.html'
};

// Scrape Aarong Category
const scrapeAarongCategory = async (categoryUrl, categoryName) => {
    try {
        console.log(`Scraping: ${categoryUrl}`);
        
        const response = await axios.get(categoryUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.9",
                "Accept-Encoding": "gzip, deflate, br",
                "Referer": "https://www.aarong.com/",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache"
            },
            timeout: 20000
        });

        console.log(`Response status: ${response.status}`);
        console.log(`Response length: ${response.data.length}`);

        const $ = cheerio.load(response.data);
        const products = [];
        const logo = "https://www.aarong.com/media/logo/stores/1/aarong-logo.jpg";

        // Product selectors for Aarong
        const productSelectors = [
            '.product-item',
            '.products-grid .product-item',
            '.product-item-info',
            '.item.product.product-item',
            '.product.item',
            '.products .product-item'
        ];

        for (const selector of productSelectors) {
            const elements = $(selector);
            console.log(`Selector "${selector}" found ${elements.length} elements`);
            
            if (elements.length > 0) {
                elements.each((index, element) => {
                    try {
                        const product = extractAarongProduct($, element, categoryName);
                        if (product && product.name && product.name !== "Name not found") {
                            products.push(product);
                            console.log(`✓ Added: ${product.name} - ${product.price}`);
                        }
                    } catch (err) {
                        console.error(`Error processing product ${index}:`, err.message);
                    }
                });
                
                if (products.length > 0) break;
            }
        }

        console.log(`Total products extracted: ${products.length}`);
        return { products, logo };

    } catch (error) {
        console.error(`Error scraping ${categoryUrl}:`, error.message);
        return {
            products: [],
            logo: "https://www.aarong.com/media/logo/stores/1/aarong-logo.jpg"
        };
    }
};

// Extract product data
const extractAarongProduct = ($, element, categoryName) => {
    const $elem = $(element);
    
    // Product name
    let name = '';
    const nameSelectors = [
        '.product-item-name a',
        '.product-name a',
        '.product-item-link',
        'h2 a', 'h3 a', 'h4 a',
        '.product-item-name'
    ];
    
    for (const selector of nameSelectors) {
        const nameEl = $elem.find(selector).first();
        if (nameEl.length) {
            name = nameEl.text().trim() || nameEl.attr('title');
            if (name) break;
        }
    }

    // Product price
    let price = '';
    const priceSelectors = [
        '.price',
        '.product-price .price',
        '.price-final_price .price',
        '.regular-price .price',
        '.special-price .price',
        '[data-price-amount]'
    ];
    
    for (const selector of priceSelectors) {
        const priceEl = $elem.find(selector).first();
        if (priceEl.length) {
            price = priceEl.text().trim();
            if (!price && priceEl.attr('data-price-amount')) {
                price = `৳${priceEl.attr('data-price-amount')}`;
            }
            if (price) break;
        }
    }

    // Product image
    let img = '';
    const imgSelectors = [
        '.product-image-photo',
        '.product-item-photo img',
        '.product-image img',
        'img[data-original]',
        'img[data-src]',
        'img'
    ];
    
    for (const selector of imgSelectors) {
        const imgEl = $elem.find(selector).first();
        if (imgEl.length) {
            img = imgEl.attr('data-original') || 
                  imgEl.attr('data-src') || 
                  imgEl.attr('src');
            if (img) {
                img = img.startsWith('/') ? `https://www.aarong.com${img}` : img;
                break;
            }
        }
    }

    // Product link
    let link = '';
    const linkEl = $elem.find('a').first();
    if (linkEl.length) {
        link = linkEl.attr('href');
    } else if ($elem.is('a')) {
        link = $elem.attr('href');
    }
    
    if (link && link.startsWith('/')) {
        link = `https://www.aarong.com${link}`;
    }

    // Determine category display name
    const categoryDisplayNames = {
        'women-saree': 'Saree',
        'women-shalwar-kameez': 'Shalwar Kameez',
        'women-kurta': 'Kurta',
        'women-accessories': 'Accessories'
    };
    
    const category = categoryDisplayNames[categoryName] || 'Women\'s Fashion';

    // Return product if we have essential data
    if (name && (price || img || link)) {
        return {
            id: crypto.randomUUID(),
            name: name,
            category: category,
            price: price || "Price not available",
            img: img || "Image not found",
            link: link || "Link not found"
        };
    }

    return null;
};

// Main category endpoint
app.get("/category/:category", async (req, res) => {
    const category = req.params.category;
    console.log(`\n=== CATEGORY REQUEST ===`);
    console.log(`Requested category: ${category}`);
    
    try {
        // Check if category exists
        if (!CATEGORY_URLS[category]) {
            return res.status(404).json({
                success: false,
                message: `Category "${category}" not found`,
                availableCategories: Object.keys(CATEGORY_URLS)
            });
        }
        
        const categoryUrl = CATEGORY_URLS[category];
        console.log(`Scraping URL: ${categoryUrl}`);
        
        const results = await scrapeAarongCategory(categoryUrl, category);
        
        const response = [{
            name: "Aarong",
            products: results.products,
            logo: results.logo,
            category: category,
            categoryUrl: categoryUrl,
            totalProducts: results.products.length,
            timestamp: new Date().toISOString()
        }];
        
        console.log(`✅ Success: ${results.products.length} products found for "${category}"`);
        res.json(response);
        
    } catch (error) {
        console.error("Error in category endpoint:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error while getting category",
            error: error.message,
            category: category
        });
    }
});

// Health check and available categories
app.get("/", (req, res) => {
    res.json({
        message: "🛍️ Aarong Category Scraper API",
        availableCategories: {
            "women-saree": "https://www.aarong.com/women/saree",
            "women-shalwar-kameez": "https://www.aarong.com/women/shalwar-kameez", 
            "women-kurta": "https://www.aarong.com/women/kurta",
            "women-accessories": "https://www.aarong.com/women/accessories.html"
        },
        usage: {
            endpoint: "/category/:category",
            examples: [
                "http://localhost:3000/category/women-saree",
                "http://localhost:3000/category/women-shalwar-kameez",
                "http://localhost:3000/category/women-kurta", 
                "http://localhost:3000/category/women-accessories"
            ]
        }
    });
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found",
        availableEndpoints: [
            "GET /",
            "GET /category/:category"
        ],
        availableCategories: Object.keys(CATEGORY_URLS)
    });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Aarong Category Scraper running on port ${PORT}`);
    console.log(`\n📋 Available Categories:`);
    Object.keys(CATEGORY_URLS).forEach(category => {
        console.log(`   • ${category}: http://localhost:${PORT}/category/${category}`);
    });
    console.log(`\n💡 API Info: http://localhost:${PORT}/`);
});
