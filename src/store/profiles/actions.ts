import { TUpdateTimeProfileError } from './types';
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
  TSelectProfile,
  TSelectProfileError,
  TUpdateTimeProfile,
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

export const selectProfile = (payload: string): TSelectProfile => ({
  type: ProfilesActionsType.selectProfile,
  payload,
});

export const selectProfileError = (payload: string): TSelectProfileError => ({
  type: ProfilesActionsType.selectProfileError,
  payload,
});

export const updateTimeProfile = (payload: string): TUpdateTimeProfile => ({
  type: ProfilesActionsType.updateTimeProfile,
  payload,
});

export const updateTimeProfileError = (
  payload: string
): TUpdateTimeProfileError => ({
  type: ProfilesActionsType.updateTimeProfileError,
  payload,
});
