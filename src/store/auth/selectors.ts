// @ts-nocheck
import getFp from 'lodash/fp/get';
import { createSelector, Selector } from 'reselect';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TLocationState } from './types';

export const authSelector: Selector<TMainState, TLocationState> =
  getFp(REDUCER_KEY);

export const errorMessageSelector: Selector<TMainState, boolean> =
  createSelector(authSelector, getFp('error'));

export const isPendingSelector: Selector<TMainState, boolean> = createSelector(
  authSelector,
  getFp('isPending')
);
