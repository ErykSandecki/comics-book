// others
import { TImageData } from './../../types';
import { TReturnablePayload } from './../common/types';

// store
import { ProfilesActionsType } from './actionsType';

export type TProfilesState = {
  data: Array<TProfile>;
  error: string;
  isPending: boolean;
  selectedProfileId: string;
};

export type TProfileFormData = {
  backToProfileList: () => void;
  name: string;
  imageData: TImageData;
};

export type TProfile = {
  lastUpdateTime: number;
  name: string;
  online: boolean;
  profileId: string;
  src: string;
};

export type TCreateProfile = {
  type: typeof ProfilesActionsType.createProfile;
  payload: TProfileFormData;
};

export type TCreateProfileSuccess = {
  type: typeof ProfilesActionsType.createProfileSuccess;
};

export type TCreateProfileError = {
  type: typeof ProfilesActionsType.createProfileError;
  payload: string;
};

export type TFetchProfilesSuccess = {
  type: typeof ProfilesActionsType.fetchProfilesSuccess;
  payload: Array<TProfile>;
};

export type TFetchProfilesError = {
  type: typeof ProfilesActionsType.fetchProfilesError;
};

export type TUploadImageFinished = {
  type: typeof ProfilesActionsType.uploadImageFinished;
  payload: TReturnablePayload;
};

export type TSelectProfile = {
  type: typeof ProfilesActionsType.selectProfile;
  payload: string;
};

export type TSelectProfileError = {
  type: typeof ProfilesActionsType.selectProfileError;
  payload: string;
};

export type TUpdateTimeProfile = {
  type: typeof ProfilesActionsType.updateTimeProfile;
  payload: string;
};

export type TUpdateTimeProfileError = {
  type: typeof ProfilesActionsType.updateTimeProfileError;
  payload: string;
};
