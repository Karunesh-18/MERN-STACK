const ProductCard = ({id, name, price, image, isVideo}) => {
    return (
        <>
            <div className="border-2 border-gray-300 rounded-lg m-4 p-4 w-100 bg-white hover:shadow-lg transition-shadow">
                {
                    isVideo ? (
                        <video className="w-full h-60 object-cover rounded mb-4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        >
                            <source src={image} type="video/mp4"/>   
                        </video>
                    ) : (
                        <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded"/>
                    )
                }
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">₹{price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Add to Cart
                </button>
            </div>
        </>
    )
}

export default ProductCard;