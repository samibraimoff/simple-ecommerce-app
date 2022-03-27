import React from 'react';

import { GoodsItem } from './GoodsItem';

export const GoodsList = (props) => {
  const { list = [], addOrder = Function.prototype } = props;

  if (!list.length) {
    return <h3>Nothing to show!</h3>;
  }
  return (
    <div className='goods'>
      {list.map((item) => (
        <GoodsItem key={item.id} item={item} addOrder={addOrder} />
      ))}
    </div>
  );
};
