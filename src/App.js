import React, { Fragment } from 'react';

import { Shop } from './components/Shop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Shop />
      <Footer />
    </>
  );
};
