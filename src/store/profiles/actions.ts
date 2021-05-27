// others
import { TReturnablePayload } from './../common/types';
import {
  TCreateProfile,
  TCreateProfileSuccess,
  TCreateProfileError,
  TFetchProfilesSuccess,
  TFetchProfilesError,
  TProfile,
  TProfileFormData,
  TUploadImageFinished,
  TSetProfileId,
} from './types';

// store
import { ProfilesActionsType } from './actionsType';

export const createProfile = (payload: TProfileFormData): TCreateProfile => ({
  type: ProfilesActionsType.createProfile,
  payload,
});

export const createProfileSuccess = (): TCreateProfileSuccess => ({
  type: ProfilesActionsType.createProfileSuccess,
});

export const createProfileError = (payload: string): TCreateProfileError => ({
  type: ProfilesActionsType.createProfileError,
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

export const uploadImageFinished = (
  payload: TReturnablePayload
): TUploadImageFinished => ({
  type: ProfilesActionsType.uploadImageFinished,
  payload,
});

export const setProfileId = (payload: string): TSetProfileId => ({
  type: ProfilesActionsType.setProfileId,
  payload,
});