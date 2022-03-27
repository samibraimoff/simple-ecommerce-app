import React from 'react';

export const GoodsItem = (props) => {
  const {
    item: { id, title, description, price, image },
    addOrder = Function.prototype,
  } = props;

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
        <button className='btn' onClick={() => addOrder({ id, title, price })}>
          Buy
        </button>
        <span className='right'>{price}</span>
      </div>
    </div>
  );
};
