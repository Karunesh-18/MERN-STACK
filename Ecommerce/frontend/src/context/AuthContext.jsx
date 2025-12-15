import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedLogin = sessionStorage.getItem('isLoggedIn');
    const storedRole = sessionStorage.getItem('role');
    const storedUsername = sessionStorage.getItem('username');
    
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
      setRole(storedRole);
      setUsername(storedUsername);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, 
        { username, password },
        { withCredentials: true }
      );

      const data = response.data;
      
      if (data.success) {
        setIsLoggedIn(true);
        setRole(data.user.role);
        setUsername(data.user.username);
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('role', data.user.role);
        sessionStorage.setItem('username', data.user.username);
        sessionStorage.setItem('token', data.token);
        return { success: true };
      } else {
        console.log(data.message);
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
    setUsername(null);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
