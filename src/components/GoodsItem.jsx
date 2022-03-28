import React, { useContext } from 'react';
import { ShopContext } from '../context/context';

export const GoodsItem = (props) => {
  const {
    item: { id, title, description, price, image },
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt={title} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() => addToBasket({ id, title, price })}
        >
          Buy
        </button>
        <span className='right'>{price}</span>
      </div>
    </div>
  );
};
