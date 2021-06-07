// @ts-nocheck
// others
import { TTypingsState, TSetStatusTypingError } from './types';

// store
import { TypingsActionsType } from './actionsType';
import { TAnyAction } from '../../types';

const initialState: TTypingsState = {
  error: '',
  typings: null,
};

const fetchTypingsSuccess = (
  state: TAuthState,
  { payload: typings }: TFetchChannelsSuccess
): TAuthState => ({
  ...state,
  typings,
});

const fetchTypingsError = (
  state: TAuthState,
  { payload: error }: TSetStatusTypingError
): TAuthState => ({
  ...state,
  error,
});

const setStatusTypingError = (
  state: TAuthState,
  { payload: error }: TSetStatusTypingError
): TAuthState => ({
  ...state,
  error,
});

const typings = (
  state: TAuthState = initialState,
  action: TAnyAction
): TAuthState => {
  switch (action.type) {
    case TypingsActionsType.fetchTypingsSuccess:
      return fetchTypingsSuccess(state, action);
    case TypingsActionsType.fetchTypingsError:
      return fetchTypingsError(state, action);
    case TypingsActionsType.setStatusTypingError:
      return setStatusTypingError(state, action);
    default:
      return state;
  }
};

export default typings;
