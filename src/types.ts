// others
import { TAuthState } from './store/auth/types';
import { TProfilesState } from './store/profiles/types';

// store
import { REDUCER_KEY as AUTH_REDUCER_KEY } from './store/auth/actionsType';
import { REDUCER_KEY as PROFILES_REDUCER_KEY } from './store/profiles/actionsType';

export type TMainState = {
  [AUTH_REDUCER_KEY]: TAuthState;
  [PROFILES_REDUCER_KEY]: TProfilesState;
};

export type TAnyAction = {
  type: string;
  payload?: any;
};

export type TImageData = {
  file: Blob;
  src: string;
};
