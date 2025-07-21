import { useState, useEffect } from 'react';

/**
 * AarongProducts component to display products from Aarong API
 * @param {string} category - The category to fetch products for
 */
function AarongProducts({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAarongProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using the proxied server API endpoint
        const response = await fetch(`/aarong/category/${category}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched Aarong products:', data);
        
        // The API returns an array with a single object containing products
        if (data && data.length > 0 && data[0].products) {
          setProducts(data[0].products);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error('Error fetching Aarong products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchAarongProducts();
    }
  }, [category]);

  // Loading state
  if (loading) {
    return (
      <div className="section aarong-section">
        <h2>Aarong Products</h2>
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading Aarong products...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="section aarong-section">
        <h2>Aarong Products</h2>
        <div className="error">
          <p>Error loading Aarong products: {error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="section aarong-section">
      <h2>Aarong Products</h2>
      <div className="products-container">
        {products.length === 0 ? (
          <p>No Aarong products found.</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card" onClick={() => window.open(product.link, '_blank')} style={{ cursor: 'pointer' }}>
                <div className="product-image">
                  {product.img && product.img !== "Image not found" ? (
                    <img 
                      src={product.img} 
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://www.aarong.com/media/logo/stores/1/aarong-logo.jpg';
                        e.target.style.padding = '20px';
                      }}
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                </div>
                
                <div className="product-info">
                  <div className="product-category">
                    {product.category}
                  </div>
                  
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="product-price">
                    <span className="price">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AarongProducts; 