// @ts-nocheck
import { combineReducers } from 'redux';

// store
import auth from './auth/reducer';
import profiles from './profiles/reducer';

const reducers = { auth, profiles };

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

export default createRootReducer;
