// @ts-nocheck
export const REDUCER_KEY = 'auth';

export enum AuthActionsType {
  login = `${REDUCER_KEY}/login`,
  loginSuccess = `${REDUCER_KEY}/loginSuccess`,
  loginError = `${REDUCER_KEY}/loginError`,
}
