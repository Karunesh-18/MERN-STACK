import {Link, useNavigate} from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    const role = sessionStorage.getItem("role");

    const handleLogout = () => {
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("role");
        navigate("/login");
    }

    return (
        <>
            <div className="flex justify-center items-center bg-gray-800 text-white p-4 text-lg font-bold flex-wrap">
                <Link to="/" className="m-2 p-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">Home</Link>
                <Link to="/about" className="m-2 p-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">About</Link>
                <Link to="/contact" className="m-2 p-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">Contact</Link>
                <Link to="/products" className="m-2 p-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">Products</Link>
                <Link to="/blogs" className="m-2 p-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">Blog</Link>
                <Link to="/cart" className="m-2 p-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">Cart</Link>
                {isLoggedIn && (
                    <Link to="/orders" className="m-2 p-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">Orders</Link>
                )}
                {isLoggedIn && role === "admin" && (
                    <Link to="/admin" className="m-2 p-2 bg-[#e53238] text-white rounded-md hover:bg-red-700 transition-colors">Admin</Link>
                )}
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="m-2 p-2 bg-[#e53238] text-white rounded-md hover:bg-red-700 transition-colors">Logout</button>
                ) : (
                    <Link to="/login" className="m-2 p-2 bg-[#0064d2] text-white rounded-md hover:bg-blue-700 transition-colors">Login</Link>
                )}
            </div>
        </>
    )
}

export default Header;