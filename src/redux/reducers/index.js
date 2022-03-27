import { combineReducers } from 'redux';
import shopReducer from './reducers';

const reducer = combineReducers({
  shop: shopReducer,
});

export default reducer;
