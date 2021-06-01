// @ts-nocheck
import { combineReducers } from 'redux';

// store
import auth from './auth/reducer';
import channels from './channels/reducer';
import profiles from './profiles/reducer';

const reducers = { auth, channels, profiles };

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

export default createRootReducer;
