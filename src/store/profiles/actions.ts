// others
import { TProfile } from './types';
import { TReturnablePayload } from './../common/types';

// store
import { ProfilesActionsType } from './actionsType';
import {
  TCreateProfile,
  TFetchProfilesSuccess,
  TFetchProfilesError,
  TProfileFormData,
  TUploadImageFinished,
} from './types';

export const createProfile = (payload: TProfileFormData): TCreateProfile => ({
  type: ProfilesActionsType.createProfile,
  payload,
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

export const uploadImageFinished = (payload: TReturnablePayload): TUploadImageFinished => ({
  type: ProfilesActionsType.uploadImageFinished,
  payload,
});
