// @ts-nocheck
import { SagaMiddleware } from 'redux-saga';

// store
import { watchAuth } from './auth/watch';
import { watchCommonStore } from './common/watch';
import { watchProfiles } from './profiles/watch';

const watches = [watchAuth, watchCommonStore, watchProfiles];

const sagaMiddlewareRuns = (sagaMiddleware: SagaMiddleware): void => {
  for (const watch of watches) sagaMiddleware.run(watch);
};

export default sagaMiddlewareRuns;
