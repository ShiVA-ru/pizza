import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import pizzas from './assets/pizzas.json';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map(pizza => (
                <PizzaBlock title={pizza.title} price={pizza.price} />
              ))
            }
            {/* <PizzaBlock title="Мексиканская" price="500"/> */}
            {/* <PizzaBlock title="Чизбургер-пицца" price="350" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;