import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";
import './scss/app.scss';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    // <div className="wrapper">
    // <Header />
    // <div className="content">
    <Routes >
      <Route path="/" element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pizza/:id' element={<FullPizza />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    // </div>
    // </div>
  )
}

export default App;