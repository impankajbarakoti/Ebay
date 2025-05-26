import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'; // ✅ import toast container
import 'react-toastify/dist/ReactToastify.css'; // ✅ import toast styles

import store from './ComponentPankaj/Store';
import Home from './ComponentPankaj/Home';
import About from './ComponentPankaj/About';
import Contact from './ComponentPankaj/Contact';
import Cart from './ComponentPankaj/Cart';
import Login from './ComponentPankaj/Login';
import Signup  from './ComponentPankaj/Signup';
import ProductDetails from './ComponentPankaj/ProductDetail';
import Products from './ComponentPankaj/Products';
import Profile from './ComponentPankaj/Profile';
import Navbar from './ComponentPankaj/Navbar';
import { CartProvider } from './ComponentPankaj/CartContext'; 

const App = () => {
  return (
    <Provider store={store}>
      <CartProvider>
      <ToastContainer position="top-right" autoClose={5000} />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            
            <Route path='/productdetails/:productName' element={<ProductDetails />} />

            <Route path='/products' element={<Products />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  );
};

export default App;
