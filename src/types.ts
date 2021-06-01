// others
import { TAuthState } from './store/auth/types';
import { TChannelsState } from './store/channels/types';
import { TProfilesState } from './store/profiles/types';

// store
import { REDUCER_KEY as AUTH_REDUCER_KEY } from './store/auth/actionsType';
import { REDUCER_KEY as CHANNELS_REDUCER_KEY } from './store/channels/actionsType';
import { REDUCER_KEY as PROFILES_REDUCER_KEY } from './store/profiles/actionsType';

export type TMainState = {
  [AUTH_REDUCER_KEY]: TAuthState;
  [CHANNELS_REDUCER_KEY]: TChannelsState;
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
