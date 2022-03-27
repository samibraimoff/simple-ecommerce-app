import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  SET_ORDER_FAILURE,
  SET_ORDER_REQUEST,
  SET_ORDER_SUCCESS,
} from '../types';

const initialState = {
  list: [],
  item: null,
  loading: false,
  error: null,
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
