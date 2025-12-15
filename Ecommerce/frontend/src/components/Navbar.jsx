import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, role, username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs">
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <span className="text-gray-600">
                  Hi, <strong>{username}</strong>!
                  {role === 'admin' && <span className="ml-2 px-2 py-1 bg-red-500 text-white rounded text-xs">ADMIN</span>}
                </span>
              ) : (
                <span className="text-gray-600">Welcome to eBay!</span>
              )}
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <Link to="/products" className="hover:text-blue-600">All Products</Link>
              {isLoggedIn && <Link to="/orders" className="hover:text-blue-600">Orders</Link>}
              {role === 'admin' && <Link to="/admin" className="hover:text-blue-600 font-semibold">Admin Panel</Link>}
              {isLoggedIn ? (
                <button onClick={handleLogout} className="hover:text-blue-600">Logout</button>
              ) : (
                <Link to="/login" className="hover:text-blue-600">Login</Link>
              )}
              <Link to="/cart" className="hover:text-blue-600 flex items-center">
                <i className="fa-solid fa-cart-shopping mr-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-3">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link to="/" className="text-4xl font-bold">
                <span className="text-[#e53238]">e</span>
                <span className="text-[#0064d2]">b</span>
                <span className="text-[#f5af02]">a</span>
                <span className="text-[#86b817]">y</span>
              </Link>
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded hover:border-gray-400"
              >
                <span className="text-sm">Shop by category</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 shadow-lg z-50"
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Motors</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Fashion</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Electronics</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Collectibles & Art</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home & Garden</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sporting Goods</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Toys</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Business & Industrial</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Music</a>
                </div>
              )}
            </div>

            <div className="flex-1 max-w-3xl">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="flex-1 px-4 py-2 border border-r-0 border-gray-300 rounded-l focus:outline-none focus:border-blue-500 bg-white"
                />
                <select className="px-3 py-2 border-t border-b border-gray-300 text-sm bg-gray-50 focus:outline-none text-stone-950">
                  <option>All Categories</option>
                  <option>Antiques</option>
                  <option>Art</option>
                  <option>Baby</option>
                  <option>Books</option>
                  <option>Clothing, Shoes & Accessories</option>
                  <option>Collectibles</option>
                  <option>Electronics</option>
                </select>
                <button className="px-8 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>

            <a href="#" className="text-sm text-blue-600 hover:underline whitespace-nowrap">Advanced</a>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4">
          <nav className="flex items-center space-x-6 py-2 text-sm">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Saved</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Motors</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Electronics</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Collectibles & Art</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Fashion</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Home & Garden</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Sporting Goods</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Toys</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Business & Industrial</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
