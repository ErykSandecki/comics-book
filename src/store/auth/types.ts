// store
import { AuthActionsType } from './actionsType';

export type TAuthState = {
  error: string;
  isPending: boolean;
};

export type TLogin = {
  type: typeof AuthActionsType.login;
  payload: string;
};

export type TLoginSuccess = {
  type: typeof AuthActionsType.loginSuccess;
  payload: string;
};

export type TLoginError = {
  type: typeof AuthActionsType.loginError;
  payload: string;
};
