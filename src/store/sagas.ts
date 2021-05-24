// @ts-nocheck
import { SagaMiddleware } from 'redux-saga';

// store
import { watchAuth } from './auth/watch';

const watches = [watchAuth];

const sagaMiddlewareRuns = (sagaMiddleware: SagaMiddleware): void => {
  for (const watch of watches) sagaMiddleware.run(watch);
};

export default sagaMiddlewareRuns;
