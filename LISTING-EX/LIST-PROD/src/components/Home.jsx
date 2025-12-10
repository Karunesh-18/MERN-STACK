import { useNavigate } from 'react-router';
import Footer from './Footer';

const Home = () => {
    const navigate = useNavigate();
    const topProducts = [
        {
            id: 1,
            name: "Headphones",
            price: "₹15,999",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqtnN_cTVV2DzNuEtNROMx8mQJDP1dnhz_A&s",
            description: "High-quality wireless headphones"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: "₹24,999",
            image: "https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg",
            description: "Latest smartwatch with fitness tracking"
        },
        {
            id: 3,
            name: "Laptop Stand",
            price: "₹3,999",
            image: "https://www.portronics.com/cdn/shop/files/1_7aa58f65-2156-4eba-bb9d-4cb6b2ba5961.jpg?v=1711450802",
            description: "Ergonomic adjustable laptop stand"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <div className="bg-linear-to-r from-[#e53238] to-[#0064d2] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                        Welcome to Our Store
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Discover amazing products at unbeatable prices
                    </p>
                    <button 
                        onClick={() => navigate('/products')}
                        className="bg-[#f5af02] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg"
                    >
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Featured Products
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {topProducts.map(product => (
                        <div 
                            key={product.id}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 hover:scale-105 transform duration-300"
                        >
                            <img src={product.image} alt={product.name} className="w-3/4 h-1/2 mx-auto object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-center mb-4">
                                {product.description}
                            </p>
                            <p className="text-3xl font-bold text-[#e53238] text-center mb-4">
                                {product.price}
                            </p>
                            <button className="w-full bg-[#f5af02] text-white py-2 rounded-md hover:bg-yellow-600 transition-colors font-semibold">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button 
                        onClick={() => navigate('/products')}
                        className="bg-[#0064d2] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                    >
                        View All Products
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;