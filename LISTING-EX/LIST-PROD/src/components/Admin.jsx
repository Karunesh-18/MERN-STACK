import { useState } from "react";
import ProductForm from "./ProductForm";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: Date.now()
    };
    setProducts([...products, productWithId]);
    alert("Product added successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Admin Dashboard</h1>
      
      <div className="bg-red-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto border-2 border-red-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome, Admin!</h2>
      </div>

      <ProductForm onAddProduct={addProduct} />

      {products.length > 0 && (
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Recently Added Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">Category: {product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#86b817] font-bold text-lg">₹{product.sellingPrice.toLocaleString('en-IN')}</span>
                  {product.originalPrice > product.sellingPrice && (
                    <span className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
