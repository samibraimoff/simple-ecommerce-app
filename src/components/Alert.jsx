import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context/context';

export const Alert = (props) => {
  const { closeAlert } = useContext(ShopContext);
  const { name = '' } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} added in basket</div>
    </div>
  );
};
