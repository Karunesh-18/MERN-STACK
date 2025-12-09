import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'
// import ProductForm from './components/ProductForm.jsx'

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from Express server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <>
      <Navbar cart={cartCount} />
      <p className="text-4xl font-bold mx-auto flex justify-center my-10">PRODUCTS</p>
      
      {loading && <p className="text-center text-xl">Loading products...</p>}
      {error && <p className="text-center text-xl text-red-500">Error: {error}</p>}
      
      <div className="flex flex-wrap justify-center items-start gap-4">
        {products.map(product => (
          <Products
            key={product.id}
            id={product.id}
            name={product.product}
            image={product.img}
            sellingPrice={product.price}
            originalPrice={product.price * 1.2}
            category="General"
            onAddToCart={addToCart}
          />
        ))}
      </div>
      
      {/* <ProductForm onAddProduct={addProduct} /> */}
    </>
  )
}

export default App
