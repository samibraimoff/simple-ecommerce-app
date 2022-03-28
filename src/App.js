import React, { Fragment } from 'react';

import { Shop } from './components/Shop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { ContextProvider } from './context/context';

export const App = () => {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
};
