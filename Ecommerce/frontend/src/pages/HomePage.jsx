import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

function HomePage() {
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      const data = response.data;
      // Get top 3 products with discount
      const dealsProducts = data.filter(p => p.discount > 0).slice(0, 3);
      setTopProducts(dealsProducts);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { icon: "fa-mobile-screen-button", name: "Phones" },
    { icon: "fa-laptop", name: "Computers" },
    { icon: "fa-camera", name: "Cameras" },
    { icon: "fa-shirt", name: "Fashion" },
    { icon: "fa-couch", name: "Furniture" },
    { icon: "fa-gamepad", name: "Gaming" },
    { icon: "fa-gem", name: "Jewelry" },
    { icon: "fa-futbol", name: "Sports" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-full mx-auto px-4 py-6">
        {/* Hero Banner */}
        <div className="mb-6">
          <div className="relative rounded-lg overflow-hidden h-[400px] bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Extra 20% off selected coupons</h2>
              <p className="text-lg mb-4">Plus, free shipping</p>
              <a href="/products">
                <button className="bg-white text-orange-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 w-fit">
                  Shop now
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Today's Deals */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Today's Deals – All With Free Shipping</h3>
            <a href="/products" className="text-blue-600 hover:underline text-sm">See all</a>
          </div>
          {loading ? (
            <div className="text-center py-8">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topProducts.map(product => (
                <ProductCard key={product.id} product={product} showDiscount={true} />
              ))}
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition cursor-pointer">
                <i className={`fas ${category.icon} text-3xl text-blue-600 mb-2`}></i>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
