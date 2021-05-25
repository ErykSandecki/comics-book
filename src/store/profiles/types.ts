// store
import { ProfilesActionsType } from './actionsType';

export type TProfilesState = {
  data: Array<TProfile>;
  isPending: boolean;
  seletedProfileId: string;
};

export type TProfile = {
  active: boolean;
  avatarUrl?: string;
  name: string;
  profileId: string;
};

export type TFetchProfilesSuccess = {
  type: typeof ProfilesActionsType.fetchProfilesSuccess;
  payload: Array<TProfile>;
};

export type TFetchProfilesError = {
  type: typeof ProfilesActionsType.fetchProfilesError;
};
