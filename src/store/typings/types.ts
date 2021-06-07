// store
import { TypingsActionsType } from './actionsType';

export type TTypingsState = {
  typings: Array<TTyping>;
  error: string;
};

export type TTyping = {
  channelId: string;
  profileName: string;
  profileId: string;
};

export type TFetchTypingsSuccess = {
  type: typeof TypingsActionsType.fetchTypingsSuccess;
  payload: Array<TTyping>;
};

export type TFetchTypingsError = {
  type: typeof TypingsActionsType.fetchTypingsError;
};

export type TSetStatusTyping = {
  type: typeof TypingsActionsType.setStatusTyping;
  payload: TTyping & { mode: 'add' | 'remove' };
};

export type TSetStatusTypingError = {
  type: typeof TypingsActionsType.setStatusTypingError;
  payload: string;
};
