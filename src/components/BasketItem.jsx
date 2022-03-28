import React, { useContext } from 'react';
import { ShopContext } from '../context/context';

export const BasketItem = (props) => {
  const { removeFromBasket, increaseOrderQuantity, decreaseOrderQuantity } =
    useContext(ShopContext);
  const {
    item: { id, name, price, quantity },
  } = props;

  return (
    <li className='collection-item'>
      {name} x{' '}
      <span
        className='basket-quantity-change'
        onClick={() => decreaseOrderQuantity(id)}
      >
        -
      </span>{' '}
      {quantity}
      <span
        className='basket-quantity-change'
        onClick={() => increaseOrderQuantity(id)}
      >
        +
      </span>{' '}
      = {price * quantity}
      <span
        href='#!'
        className='secondary-content'
        onClick={() => removeFromBasket(id)}
      >
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
};
