// @ts-nocheck
// others
import { TLoginError } from './types';

// store
import { AuthActionsType } from './actionsType';
import { TAnyAction } from '../../types';
import { TAuthState } from './types';

const initialState: TAuthState = {
  error: '',
  isPending: true,
};

const loginSuccess = (state: TAuthState): TAuthState => ({
  ...state,
  isPending: false,
});

const loginError = (
  state: TAuthState,
  { payload: error }: TLoginError
): TAuthState => ({
  ...state,
  error,
  isPending: false,
});

const auth = (
  state: TAuthState = initialState,
  action: TAnyAction
): TAuthState => {
  switch (action.type) {
    case AuthActionsType.loginSuccess:
      return loginSuccess(state, action);
    case AuthActionsType.loginError:
      return loginError(state, action);
    default:
      return state;
  }
};

export default auth;
