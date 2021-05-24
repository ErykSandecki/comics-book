// @ts-nocheck
// others
import { TFetchWords } from './types';

// store
import { AuthActionsType } from './actionsType';
import { TAddNewWord, TAddNewCategory, TLoginSuccess } from './types';

export const loginAction = (payload: Array<TFetchWords>): TLoginSuccess => ({
  type: AuthActionsType.login,
  payload,
});

export const loginActionSuccess = (payload: {
  categoryIndex: number;
  words: Array<TAddNewWord>;
}): TAddNewWord => ({
  type: AuthActionsType.loginSuccess,
  payload,
});

export const loginActionError = (payload: {
  name: string;
  words: Array<TAddNewCategory>;
}): TAddNewWord => ({
  type: AuthActionsType.loginError,
  payload,
});
