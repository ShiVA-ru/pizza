import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://633089a9f5fda801f8e26915.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('ERROR PIZZA');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container">
        <h4>Загрузка...</h4>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h1>{pizza.title}</h1>
      <h2>{pizza.price} ₽</h2>
    </div>
  );
};

export default FullPizza;
