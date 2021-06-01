// @ts-nocheck
// others
import {
  TCreateChannelError,
  TFetchChannelsSuccess,
  TChannelsState,
} from './types';

// store
import { ChannelsActionsType } from './actionsType';
import { TAnyAction } from '../../types';

const initialState: TChannelsState = {
  channels: null,
  error: '',
  isPending: true,
  seletedChannelId: '',
};

const createChannel = (state: TAuthState): TAuthState => ({
  ...state,
  isPending: true,
});

const createChannelSuccess = (state: TAuthState): TAuthState => ({
  ...state,
  isPending: false,
});

const createChannelError = (
  state: TAuthState,
  { payload: error }: TCreateChannelError
): TAuthState => ({
  ...state,
  error,
  isPending: false,
});

const fetchChannelsSuccess = (
  state: TAuthState,
  { payload: channels }: TFetchChannelsSuccess
): TAuthState => ({
  ...state,
  isPending: false,
  channels,
});

const fetchChannelsError = (state: TAuthState): TAuthState => ({
  ...state,
  isPending: false,
});

const channels = (
  state: TAuthState = initialState,
  action: TAnyAction
): TAuthState => {
  switch (action.type) {
    case ChannelsActionsType.createChannel:
      return createChannel(state, action);
    case ChannelsActionsType.createChannelSuccess:
      return createChannelSuccess(state, action);
    case ChannelsActionsType.createChannelsError:
      return createChannelError(state, action);
    case ChannelsActionsType.fetchChannelsSuccess:
      return fetchChannelsSuccess(state, action);
    case ChannelsActionsType.fetchChannelsError:
      return fetchChannelsError(state, action);
    default:
      return state;
  }
};

export default channels;
