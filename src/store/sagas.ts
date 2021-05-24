// @ts-nocheck
import { SagaMiddleware } from 'redux-saga';

const watches = [];

const sagaMiddlewareRuns = (sagaMiddleware: SagaMiddleware): void => {
  for (const watch of watches) sagaMiddleware.run(watch);
};

export default sagaMiddlewareRuns;
