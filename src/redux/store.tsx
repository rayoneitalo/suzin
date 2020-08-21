import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';

const middlware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlware));
export default store;
