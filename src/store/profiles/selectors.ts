// @ts-nocheck
import getFp from 'lodash/fp/get';
import isArrayFp from 'lodash/fp/isArray';
import composeFp from 'lodash/fp/compose';
import { createSelector, Selector } from 'reselect';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TLocationState } from './types';

export const profilesSelector: Selector<TMainState, TLocationState> =
  getFp(REDUCER_KEY);

export const isPendingSelector: Selector<TMainState, boolean> = createSelector(
  profilesSelector,
  getFp('isPending')
);

export const profilesLoadedSelector: Selector<TMainState, boolean> =
  createSelector(profilesSelector, composeFp(isArrayFp, getFp('data')));
