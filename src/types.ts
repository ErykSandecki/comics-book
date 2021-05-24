// others
import { TAuthState } from './store/auth/types';

// store
import { REDUCER_KEY as AUTH_REDUCER_KEY } from './store/auth/actionsType';

export type TMainState = {
  [AUTH_REDUCER_KEY]: TAuthState;
};

export type TAnyAction = {
  type: string;
  payload?: any;
};
