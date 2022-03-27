import React from 'react';

export const Footer = () => {
  return (
    <footer className='page-footer indigo lighten-2'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Shop e-commerce app
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/samibraimoff/simple-ecommerce-app'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};
