// others
import {
  TFetchTypingsSuccess,
  TFetchTypingsError,
  TSetStatusTyping,
  TSetStatusTypingError,
  TTyping,
} from './types';

// store
import { TypingsActionsType } from './actionsType';

export const fetchTypingsSuccess = (
  payload: Array<TTyping>
): TFetchTypingsSuccess => ({
  type: TypingsActionsType.fetchTypingsSuccess,
  payload,
});

export const fetchTypingsError = (): TFetchTypingsError => ({
  type: TypingsActionsType.fetchTypingsError,
});

export const setStatusTyping = (
  payload: TTyping & { mode: 'add' | 'remove' }
): TSetStatusTyping => ({
  type: TypingsActionsType.setStatusTyping,
  payload,
});

export const setStatusTypingError = (
  payload: string
): TSetStatusTypingError => ({
  type: TypingsActionsType.setStatusTyping,
  payload,
});
