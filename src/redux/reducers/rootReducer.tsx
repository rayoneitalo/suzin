import { combineReducers } from 'redux';

import { currentUserReducer } from './user';
// import {} from './cart'

export default combineReducers({
  user: currentUserReducer,
});
