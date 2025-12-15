import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import OrdersPage from './pages/OrdersPage';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          
          <Route
            path="/cart"
            element={
              <ProtectedRoute requireAuth={true}>
                <CartPage />
              </ProtectedRoute>
            }
          />
          
          <Route path="/login" element={<LoginPage />} />
          
          <Route
            path="/orders"
            element={
              <ProtectedRoute requireAuth={true}>
                <OrdersPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAuth={true} requireAdmin={true}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
