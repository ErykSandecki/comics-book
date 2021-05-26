// @ts-nocheck
import {
  Action,
  applyMiddleware,
  CombinedState,
  createStore,
  Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

// store
import reducers from './reducers';
import sagaMiddlewareRuns from './watchers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (): Store<CombinedState<any>, Action> => {
  const store = createStore(
    reducers(),
    {},
    composeWithDevTools(applyMiddleware(...[thunk], sagaMiddleware))
  );
  sagaMiddlewareRuns(sagaMiddleware);

  return store;
};

export default configureStore;
