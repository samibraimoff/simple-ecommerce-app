import React from 'react';

export const BasketItem = (props) => {
  const {
    item: { id, name, price, quantity },
    removeFromBasket = Function.prototype,
    changeOrderQuantity = Function.prototype,
  } = props;
  return (
    <li className='collection-item'>
      {name} x{' '}
      <span
        className='basket-quantity-change'
        onClick={() => changeOrderQuantity(id, -1)}
      >
        -
      </span>{' '}
      {quantity}
      <span
        className='basket-quantity-change'
        onClick={() => changeOrderQuantity(id, +1)}
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
