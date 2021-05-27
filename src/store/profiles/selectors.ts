import getFp from 'lodash/fp/get';
import isArrayFp from 'lodash/fp/isArray';
import composeFp from 'lodash/fp/compose';
import { createSelector, Selector } from 'reselect';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TProfile, TProfilesState } from './types';

export const profilesSelector: Selector<TMainState, TProfilesState> =
  getFp(REDUCER_KEY);

export const isPendingSelector: Selector<TMainState, boolean | undefined> =
  createSelector(profilesSelector, getFp('isPending'));

export const profilesLoadedSelector: Selector<TMainState, boolean> =
  createSelector(profilesSelector, composeFp(isArrayFp, getFp('data')));

export const getAttributeFromProfiles = (
  attribute: string
): Selector<TMainState, Array<TProfile>> =>
  createSelector(profilesSelector, getFp(attribute));
