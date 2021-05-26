// others
import { TProfile } from './types';

// store
import { ProfilesActionsType } from './actionsType';
import { TCreateProfile, TFetchProfilesSuccess, TFetchProfilesError, TProfileFormData } from './types';

export const createProfile = (payload: TProfileFormData): TCreateProfile => ({
  type: ProfilesActionsType.createProfile,
  payload
});

export const fetchProfilesSuccess = (
  payload: Array<TProfile>
): TFetchProfilesSuccess => ({
  type: ProfilesActionsType.fetchProfilesSuccess,
  payload,
});

export const fetchProfilesError = (): TFetchProfilesError => ({
  type: ProfilesActionsType.fetchProfilesError,
});
