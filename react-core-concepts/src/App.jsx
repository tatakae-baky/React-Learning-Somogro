import { useEffect, useState } from 'react'
import './App.css'
import AarongProducts from './components/AarongProducts'
import CategorySelector from './components/CategorySelector'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('women-saree')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Using the proxy endpoint instead of direct URL
        const response = await fetch('/api/products?orderby=date&order=desc&catalog_visibility=catalog&per_page=100&page=1&_locale=user')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        console.log('Fetched products:', data)
        setProducts(data)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Helper function to format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0
    }).format(price / 100) // WooCommerce stores prices in cents
  }

  // Loading state
  if (loading) {
    return (
      <div className="app">
        <h1>EtherealBD Products</h1>
        <div className="loading">Loading products...</div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="app">
        <h1>EtherealBD Products</h1>
        <div className="error">
          <p>Error loading products: {error}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Bangladesh Fashion Marketplace</h1>
        <p>Explore products from top Bangladeshi brands</p>
      </header>

      <main>
        {/* EtherealBD Products Section */}
        <section className="section">
          <h2>EtherealBD Products</h2>          
          <div className="products-container">
            {products.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div className="products-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-card" onClick={() => window.open(product.permalink, '_blank')} style={{ cursor: 'pointer' }}>
                    <div className="product-image">
                      {product.images && product.images.length > 0 ? (
                        <img 
                          src={product.images[0].src} 
                          alt={product.images[0].alt || product.name}
                          loading="lazy"
                        />
                      ) : (
                        <div className="no-image">No Image</div>
                      )}
                    </div>
                    
                    <div className="product-info">
                      {/* Display category name if available */}
                      {product.categories && product.categories.length > 0 && (
                        <div className="product-category">
                          {product.categories[0].name}
                        </div>
                      )}
                      
                      <h3 className="product-name">{product.name}</h3>
                      
                      <div className="product-price">
                        {product.prices.sale_price && product.prices.sale_price !== product.prices.regular_price ? (
                          <>
                            <span className="sale-price">
                              {formatPrice(product.prices.sale_price)}
                            </span>
                            <span className="regular-price">
                              {formatPrice(product.prices.regular_price)}
                            </span>
                          </>
                        ) : (
                          <span className="price">
                            {formatPrice(product.prices.regular_price)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Category Selector */}
        <CategorySelector 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />

        {/* Aarong Products Section */}
        <AarongProducts category={selectedCategory} />
      </main>
    </div>
  )
}

export default App
