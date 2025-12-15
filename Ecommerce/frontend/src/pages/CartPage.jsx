import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import API_BASE_URL from '../config/api';

function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
      setCart(data);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (id, newQuantity) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.put(`${API_BASE_URL}/api/cart/${id}`, 
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = response.data;
      if (data.success) {
        setCart(data.cart);
      }
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  };

  const removeItem = async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.delete(`${API_BASE_URL}/api/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
      if (data.success) {
        setCart(data.cart);
      }
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const clearCart = async () => {
    if (confirm('Are you sure you want to clear the cart?')) {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.delete(`${API_BASE_URL}/api/cart`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = response.data;
        if (data.success) {
          setCart([]);
        }
      } catch (error) {
        console.error('Failed to clear cart:', error);
      }
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.productPrice * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">Loading cart...</div>
        ) : cart.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-4">Add some products to get started!</p>
            <a href="/products">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Browse Products
              </button>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={item._id} className="bg-white rounded-lg p-4 flex gap-4">
                  <img
                    src={item.productImage}
                    alt={item.productTitle}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.productTitle}</h3>
                    <p className="text-blue-600 font-bold mb-2">${item.productPrice}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 bg-gray-100 rounded">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                    <p className="font-bold text-lg">
                      ${(item.productPrice * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default CartPage;
