import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context/context';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

import { API_KEY, API_URI } from '../config';

export const Shop = () => {
  const { setData, order, loading, isBasketShow, alertName } =
    useContext(ShopContext);

  const getData = () => {
    fetch(API_URI, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}

      {alertName && <Alert />}
    </main>
  );
};
