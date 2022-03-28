import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setData = (data) => {
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  };

  value.addToBasket = (item) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: item,
    });
  };

  value.increaseOrderQuantity = (id) => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: id,
    });
  };

  value.decreaseOrderQuantity = (id) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: id,
    });
  };

  value.closeAlert = () => {
    dispatch({
      type: 'CLOSE_ALERT',
    });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: { id: itemId },
    });
  };

  value.handleBasketShow = () => {
    dispatch({
      type: 'BASKET_TOGGLE',
    });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
