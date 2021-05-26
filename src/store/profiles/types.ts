// others
import { TImageData } from './../../types';
import { TReturnablePayload } from './../common/types';

// store
import { ProfilesActionsType } from './actionsType';

export type TProfilesState = {
  data: Array<TProfile>;
  isPending: boolean;
  seletedProfileId: string;
};

export type TProfileFormData = {
  name: string;
  imageData: TImageData;
};

export type TProfile = {
  active: boolean;
  name: string;
  profileId: string;
  src: string;
};

export type TCreateProfile = {
  type: typeof ProfilesActionsType.createProfile;
  payload: TProfileFormData;
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
