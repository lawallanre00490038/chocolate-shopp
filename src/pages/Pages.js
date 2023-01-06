import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import About from './About';
import Cart from './Cart';
import Signin from './Signin';

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products /> } /> 
        <Route path='/ProductDetails/:id' element={<ProductDetails /> } /> 
        <Route path='/About' element={<About />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Signin' element={<Signin />} />
    </Routes>
  )
}

export default Pages;