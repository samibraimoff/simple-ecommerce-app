import React from 'react';

export const Header = () => {
  return (
    <nav className='indigo lighten-2'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          ShopECommerceApp
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/samibraimoff/simple-ecommerce-app'
              target='_blank'
              rel='noreferrer'
            >
              Github source
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
