import { createSelector, Selector } from 'reselect';

// others
import { TMainState } from '../types';

// store
import { isPendingSelector, errorMessageSelector } from './auth/selectors';

export const isAuthenticatedSelector: Selector<TMainState, boolean> = createSelector(
    isPendingSelector,
    errorMessageSelector,
  (isPending, errorMessage) => !isPending && !errorMessage
);
