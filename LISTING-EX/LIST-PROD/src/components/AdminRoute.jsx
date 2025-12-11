import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    const role = sessionStorage.getItem("role");
    
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    
    if (role !== "admin") {
        return <Navigate to="/" />;
    }
    
    return children;
};

export default AdminRoute;
