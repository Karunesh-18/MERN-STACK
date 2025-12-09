import { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    sellingPrice: "",
    originalPrice: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: formData.name,
      image: formData.image,
      sellingPrice: parseFloat(formData.sellingPrice),
      originalPrice: parseFloat(formData.originalPrice),
      category: formData.category,
    };

    onAddProduct(newProduct);

    setFormData({
      name: "",
      image: "",
      sellingPrice: "",
      originalPrice: "",
      category: "",
    });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center my-10">
        <div className="w-150 h-auto border-2 border-amber-400 flex flex-col justify-center rounded-lg overflow-hidden shadow-lg">
          <div className="flex items-center justify-center pt-4">
            <p className="text-2xl font-bold">PRODUCT FORM</p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name *"
                className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL (optional)"
                className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleChange}
                placeholder="Selling Price *"
                className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
                required
              />
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                placeholder="Original Price *"
                className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
                required
              />
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category *"
                className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-700 transition duration-300 font-semibold"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
