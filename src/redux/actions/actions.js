import axios from 'axios';
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from '../types';
import { API_KEY, API_URI } from '../../config';

export const getData = () => async (dispatch) => {
  dispatch({
    type: GET_DATA_REQUEST,
  });
  try {
    const response = await axios.get(API_URI, {
      headers: {
        Authorization: API_KEY,
      },
    });

    dispatch({
      type: GET_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_DATA_FAILURE,
      payload: error,
    });
  }
};
