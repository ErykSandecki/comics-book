// @ts-nocheck
// others
import {
  TCreateProfileError,
  TFetchProfilesSuccess,
  TProfilesState,
  TSelectProfile,
} from './types';

// store
import { ProfilesActionsType } from './actionsType';
import { TAnyAction } from '../../types';

const initialState: TProfilesState = {
  data: null,
  error: '',
  isPending: true,
  selectedProfileId: '',
};

const createProfile = (state: TAuthState): TAuthState => ({
  ...state,
  isPending: true,
});

const createProfileSuccess = (state: TAuthState): TAuthState => ({
  ...state,
  isPending: false,
});

const createProfileError = (
  state: TAuthState,
  { payload: error }: TCreateProfileError
): TAuthState => ({
  ...state,
  error,
  isPending: false,
});

const fetchProfilesSuccess = (
  state: TAuthState,
  { payload: data }: TFetchProfilesSuccess
): TAuthState => ({
  ...state,
  isPending: false,
  data,
});

const fetchProfilesError = (state: TAuthState): TAuthState => ({
  ...state,
  isPending: false,
});

const setProfileId = (
  state: TAuthState,
  { payload: seletedProfileId }: TSelectProfile
): TAuthState => ({
  ...state,
  seletedProfileId,
});

const profiles = (
  state: TAuthState = initialState,
  action: TAnyAction
): TAuthState => {
  switch (action.type) {
    case ProfilesActionsType.createProfile:
      return createProfile(state, action);
    case ProfilesActionsType.createProfileSuccess:
      return createProfileSuccess(state, action);
    case ProfilesActionsType.createProfileError:
      return createProfileError(state, action);
    case ProfilesActionsType.fetchProfilesSuccess:
      return fetchProfilesSuccess(state, action);
    case ProfilesActionsType.fetchProfilesError:
      return fetchProfilesError(state, action);
    case ProfilesActionsType.selectProfile:
      return setProfileId(state, action);
    default:
      return state;
  }
};

export default profiles;
