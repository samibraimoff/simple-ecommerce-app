import React from 'react';

export const GoodsItem = (props) => {
  const {
    item: { id, name, description, price, images },
    addOrder = Function.prototype,
  } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={images.full_background} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button className='btn' onClick={() => addOrder({ id, name, price })}>
          Buy
        </button>
        <span className='right'>{price}</span>
      </div>
    </div>
  );
};
