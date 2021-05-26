// @ts-nocheck
// others
import { TFetchProfilesSuccess, TProfilesState } from './types';

// store
import { ProfilesActionsType } from './actionsType';
import { TAnyAction } from '../../types';

const initialState: TProfilesState = {
  data: null,
  isPending: true,
  seletedProfileId: '',
};

const createProfile = (state: TAuthState): TAuthState => ({
  ...state,
  isPending: true,
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

const profiles = (
  state: TAuthState = initialState,
  action: TAnyAction
): TAuthState => {
  switch (action.type) {
    case ProfilesActionsType.createProfile:
      return createProfile(state, action);
    case ProfilesActionsType.fetchProfilesSuccess:
      return fetchProfilesSuccess(state, action);
    case ProfilesActionsType.fetchProfilesError:
      return fetchProfilesError(state, action);
    default:
      return state;
  }
};

export default profiles;
