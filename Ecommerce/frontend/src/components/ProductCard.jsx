import { useState } from 'react';
import axios from 'axios';

const ProductCard = ({ product, showDiscount = true }) => {
  const [adding, setAdding] = useState(false);

  const addToCart = async (e) => {
    e.stopPropagation();
    setAdding(true);
    
    try {
      const response = await axios.post('http://localhost:3000/api/cart', 
        { productId: product.id, quantity: 1 },
        { withCredentials: true }
      );
      
      const data = response.data;
      if (data.success) {
        alert('Added to cart!');
      }
    } catch (error) {
      console.error('Failed to add to cart:', error);
      alert('Failed to add to cart');
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="group cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="bg-gray-100 rounded-t-lg overflow-hidden aspect-square flex items-center justify-center">
        <img
          src={product.image || "https://via.placeholder.com/300"}
          alt={product.title}
          className="w-full h-full object-cover group-hover:opacity-90 transition"
        />
      </div>
      <div className="p-4">
        {showDiscount && product.discount > 0 && (
          <div className="text-red-600 font-bold text-sm mb-1">UP TO {product.discount}% OFF</div>
        )}
        <div className="text-sm text-gray-700 line-clamp-2 mb-2">{product.title}</div>
        <div className="text-lg font-bold text-blue-600 mb-2">${product.price}</div>
        <button
          onClick={addToCart}
          disabled={adding}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm disabled:bg-gray-400"
        >
          {adding ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
