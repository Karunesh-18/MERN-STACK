import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

function OrdersPage() {
  const { username } = useAuth();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>

        <div className="bg-white rounded-lg p-12 text-center">
          <i className="fas fa-box text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-semibold mb-2">No orders yet</h2>
          <p className="text-gray-600 mb-4">
            Welcome {username}! Start shopping to see your orders here.
          </p>
          <a href="/products">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Browse Products
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OrdersPage;
