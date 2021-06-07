// @ts-nocheck
export const REDUCER_KEY = 'typings';

export enum TypingsActionsType {
  fetchTypingsSuccess = `${REDUCER_KEY}/fetchTypingsSuccess`,
  fetchTypingsError = `${REDUCER_KEY}/fetchTypingsError`,
  setStatusTyping = `${REDUCER_KEY}/setStatusTyping`,
  setStatusTypingError = `${REDUCER_KEY}/setStatusTypingError`,
}
