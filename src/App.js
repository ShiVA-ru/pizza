import React, { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import Sort from './components/Sort';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";
import './scss/app.scss';
import Cart from './pages/Cart';

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {/* <Home /> */}
          {/* <NotFound /> */}
        </div>
      </div>
    </div>
  )
}

export default App;