import React, { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://633089a9f5fda801f8e26915.mockapi.io/items')
      .then(response => response.json())
      .then((arr) => {
      setItems(arr);
    });
  }, [])

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
              items.map(obj => (
                <PizzaBlock key={obj.id} {...obj} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;