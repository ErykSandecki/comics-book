// store
import { AuthActionsType } from './actionsType';
import { TLogin, TLoginSuccess, TLoginError } from './types';

export const loginAction = (payload: string): TLogin => ({
  type: AuthActionsType.login,
  payload,
});

export const loginActionSuccess = (): TLoginSuccess => ({
  type: AuthActionsType.loginSuccess,
});

export const loginActionError = (payload: string): TLoginError => ({
  type: AuthActionsType.loginError,
  payload,
});
