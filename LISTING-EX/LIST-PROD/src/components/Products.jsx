const Products = ({id, product, img, price, name, image, sellingPrice, originalPrice, category, onAddToCart}) => {
    // Support both data formats: Express server format (product, img, price) and component format (name, image, sellingPrice, originalPrice)
    const productName = name || product || 'Product';
    const productImage = image || img || 'https://via.placeholder.com/200x300';
    const productPrice = sellingPrice || price || 0;
    const productOriginalPrice = originalPrice || (price ? price * 1.2 : 0);
    const productCategory = category || 'General';

    const handleAddToCart = () => {
        onAddToCart({
            id,
            name: productName,
            image: productImage,
            sellingPrice: productPrice,
            originalPrice: productOriginalPrice,
            category: productCategory
        });
    };

    return (
        <>
            <div className="w-64 border-2 border-red-300 rounded-2xl overflow-hidden shadow-lg m-4">
                <div className="p-2">
                    <img className="w-full h-48 object-cover rounded-2xl p-2 border-amber-400 border-2" src={productImage} alt={productName} />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{productName}</h2>
                    <p className="text-sm text-gray-600 mb-1">{productCategory}</p>
                    <p className="text-stone-950 mb-1">⭐ Rating: 4.5 (200 reviews)</p>
                    <div className="flex items-center space-x-4">
                        <p className="text-red-500 font-bold mb-1 line-through">Rs.{productOriginalPrice.toFixed(0)}</p>
                        <p className="text-green-600 font-bold mb-1">Rs.{productPrice}</p>
                    </div>
                </div>
                <div className="flex justify-center pb-4">
                    <button 
                        onClick={handleAddToCart}
                        className="bg-[#f5af02] text-white px-4 py-2 rounded hover:bg-orange-300 transition duration-300"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </>
    )
}

export default Products;