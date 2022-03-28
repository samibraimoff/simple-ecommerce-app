import React, { useContext } from 'react';
import { ShopContext } from '../context/context';

import { GoodsItem } from './GoodsItem';

export const GoodsList = (props) => {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing to show!</h3>;
  }
  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.id} item={item} />
      ))}
    </div>
  );
};
