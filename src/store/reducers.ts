// @ts-nocheck
import { combineReducers } from 'redux';

// store
import auth from './auth/reducer';

const reducers = { auth };

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

export default createRootReducer;
