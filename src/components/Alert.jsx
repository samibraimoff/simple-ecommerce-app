import React, { useEffect } from 'react';

export const Alert = (props) => {
  const { name = '', closeAlert = Function.prototype } = props;

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
