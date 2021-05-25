// others
import { TProfile } from './types';

// store
import { ProfilesActionsType } from './actionsType';
import {TFetchProfilesSuccess, TFetchProfilesError } from './types';

export const fetchProfilesSuccess = (payload: Array<TProfile>): TFetchProfilesSuccess => ({
  type: ProfilesActionsType.fetchProfilesSuccess,
  payload,
});

export const fetchProfilesError = (): TFetchProfilesError => ({
  type: ProfilesActionsType.fetchProfilesError,
});
