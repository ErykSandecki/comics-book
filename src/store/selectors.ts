import { createSelector, Selector } from 'reselect';

// others
import { TMainState } from '../types';

// store
import {
  isPendingSelector as isPendingAuthSelector,
  errorMessageSelector,
} from './auth/selectors';
import { isPendingSelector as isPendingProfilesSelector } from './profiles/selectors';

export const isAuthenticatedSelector: Selector<TMainState, boolean> =
  createSelector(
    isPendingAuthSelector,
    errorMessageSelector,
    (isPending, errorMessage) => !isPending && !errorMessage
  );

export const appDataLoadedSelector: Selector<TMainState, boolean> =
  createSelector(
    isPendingProfilesSelector,
    (isPendingProfiles) => !isPendingProfiles
  );
