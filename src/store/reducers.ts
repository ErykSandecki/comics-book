// @ts-nocheck
import { combineReducers } from 'redux';

// store
import auth from './auth/reducer';
import channels from './channels/reducer';
import profiles from './profiles/reducer';
import typings from './typings/reducer';

const reducers = { auth, channels, profiles, typings };

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

export default createRootReducer;
