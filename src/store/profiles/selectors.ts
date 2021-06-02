import composeFp from 'lodash/fp/compose';
import findFp from 'lodash/fp/find';
import getFp from 'lodash/fp/get';
import isArrayFp from 'lodash/fp/isArray';
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
): Selector<TMainState, any> =>
  createSelector(profilesSelector, getFp(attribute));

export const getAttributesFromSelectedProfile = (
  selectedProfileId: string
): Selector<TMainState, TProfile> =>
  // @ts-ignore
  createSelector(
    profilesSelector,
    composeFp(
      findFp(({ profileId }) => profileId === selectedProfileId),
      getFp('data')
    )
  );

export const getAttributeFromSelectedProfile = (
  attribute: string,
  selectedProfileId: string
): Selector<TMainState, TProfile> =>
  // @ts-ignore
  createSelector(
    getAttributesFromSelectedProfile(selectedProfileId),
    getFp(attribute)
  );
