import React from 'react';

import { GoodsItem } from './GoodsItem';

export const GoodsList = (props) => {
  const { goods = [], addOrder = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing to show!</h3>;
  }
  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.id} item={item} addOrder={addOrder} />
      ))}
    </div>
  );
};
