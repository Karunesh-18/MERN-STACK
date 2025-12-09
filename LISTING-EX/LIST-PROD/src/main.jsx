import { ToastContainer } from 'react-toastify'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import LoginForm from './components/LoginForm.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import BlogsList from './components/BlogsList.jsx'
import BlogDetails from './components/BlogDetails.jsx'
import Cart from './components/Cart.jsx'
import Orders from './components/Orders.jsx'
import Admin from './components/Admin.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'


createRoot(document.getElementById('root')).render(
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route element={<HomeLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<App/>}/>
            <Route path='/blogs' element={<BlogsList/>}/>
            <Route path='/blogs/:id' element={<BlogDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/orders' element={<PrivateRoute><Orders/></PrivateRoute>}/>
            <Route path='/admin' element={<AdminRoute><Admin/></AdminRoute>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
)
