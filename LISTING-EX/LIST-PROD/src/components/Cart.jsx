import { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 6499,
      quantity: 2,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 16499,
      quantity: 1,
      image: 'https://via.placeholder.com/150'
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal * 0.1; 
  const total = subtotal - discount;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-2xl border-2 border-red-300 shadow-lg p-8 text-center">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl border-2 border-red-300 shadow-lg p-6 flex items-center gap-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-2xl border-2 border-amber-400 p-1"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-lg">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="bg-amber-100 hover:bg-amber-200 border border-amber-400 w-8 h-8 rounded flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-amber-100 hover:bg-amber-200 border border-amber-400 w-8 h-8 rounded flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right min-w-[100px]">
                    <p className="text-xl font-bold text-[#86b817]">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                  
                  <button 
                    onClick={() => handleRemove(item.id)}
                    className="bg-[#e53238] hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="lg:w-1/4">
          <div className="bg-white rounded-2xl border-2 border-red-300 shadow-lg p-6 sticky top-4">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-lg">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between text-lg">
                <span className="text-gray-600">Discount (10%):</span>
                <span className="font-semibold text-[#86b817]">-₹{discount.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="border-t-2 border-amber-400 pt-4">
                <div className="flex justify-between text-xl">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-[#0064d2]">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-[#f5af02] hover:bg-orange-300 text-white font-semibold py-3 rounded-lg transition duration-300">
              Proceed to Checkout
            </button>
            
            <button className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition duration-300">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
