// others
import {
  TChannel,
  TCreateChannel,
  TCreateChannelSuccess,
  TCreateChannelError,
  TFetchChannelsSuccess,
  TFetchChannelsError,
  TSetChannelId,
} from './types';

// store
import { ChannelsActionsType } from './actionsType';

export const createChannel = (
  payload: Omit<TChannel, 'chanelId' | 'messages'>
): TCreateChannel => ({
  type: ChannelsActionsType.createChannel,
  payload,
});

export const createChannelSuccess = (): TCreateChannelSuccess => ({
  type: ChannelsActionsType.createChannelSuccess,
});

export const createChannelError = (payload: string): TCreateChannelError => ({
  type: ChannelsActionsType.createChannelsError,
  payload,
});

export const fetchChannelsSuccess = (
  payload: Array<TChannel>
): TFetchChannelsSuccess => ({
  type: ChannelsActionsType.fetchChannelsSuccess,
  payload,
});

export const fetchChannelsError = (): TFetchChannelsError => ({
  type: ChannelsActionsType.fetchChannelsError,
});

export const setChannelId = (payload: string): TSetChannelId => ({
  type: ChannelsActionsType.setChannelId,
  payload,
});
