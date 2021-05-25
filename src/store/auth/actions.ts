// store
import { AuthActionsType } from './actionsType';
import { TLogin, TLoginSuccess, TLoginError } from './types';

export const loginAction = (payload: string): TLogin => ({
  type: AuthActionsType.login,
  payload,
});

export const loginActionSuccess = (payload: string): TLoginSuccess => ({
  type: AuthActionsType.loginSuccess,
  payload,
});

export const loginActionError = (payload: string): TLoginError => ({
  type: AuthActionsType.loginError,
  payload,
});
