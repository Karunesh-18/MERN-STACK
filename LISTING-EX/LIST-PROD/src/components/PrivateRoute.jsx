import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const IsLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    return IsLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;