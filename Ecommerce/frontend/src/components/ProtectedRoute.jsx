import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children, requireAuth = true, requireAdmin = false }) => {
  const { isLoggedIn, role } = useAuth();

  if (requireAuth && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};
