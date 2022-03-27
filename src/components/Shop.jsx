import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getData } from '../redux/actions/actions';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

export const Shop = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((store) => store.shop);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  // const [goods, setGoods] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const closeAlert = () => {
    setAlertName('');
  };

  const handleBasketShow = () => {
    setIsBasketShow((prevState) => !prevState);
  };

  const addOrder = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }

    setAlertName(item.name);
  };

  const changeOrderQuantity = (id, sign) => {
    const newOrder = order.map((item) => {
      const newQuantity = item.quantity + 1 * sign;
      if (item.id === id) {
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return item;
      }
    });

    setOrder(newOrder);
  };

  const removeFromBasket = (id) => {
    const orders = order.filter((item) => item.id !== id);
    setOrder(orders);
  };

  // const getData = () => {
  //   fetch(API_URI, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: API_KEY,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.items && setGoods(data.items);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList list={list} addOrder={addOrder} />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          changeOrderQuantity={changeOrderQuantity}
        />
      )}

      {alertName && <Alert closeAlert={closeAlert} name={alertName} />}
    </main>
  );
};
