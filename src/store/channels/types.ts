// others
import { TReturnablePayload } from './../common/types';

// store
import { ChannelsActionsType } from './actionsType';

export type Message = {};

export type TChannel = {
  chanelId: string;
  messages: Array<Message>;
  name: string;
};

export type TChannelsState = {
  channels: Array<TChannel>;
  error: string;
  isPending: boolean;
  seletedChannelId: string;
};

export type TCreateChannel = {
  type: typeof ChannelsActionsType.createChannel;
  payload: string;
};

export type TCreateChannelSuccess = {
  type: typeof ChannelsActionsType.createChannelSuccess;
};

export type TCreateChannelError = {
  type: typeof ChannelsActionsType.createChannelsError;
  payload: string;
};

export type TFetchChannelsSuccess = {
  type: typeof ChannelsActionsType.fetchChannelsSuccess;
  payload: Array<TChannel>;
};

export type TFetchChannelsError = {
  type: typeof ChannelsActionsType.fetchChannelsError;
};

export type TUploadImageFinished = {
  type: typeof ChannelsActionsType.uploadImageFinished;
  payload: TReturnablePayload;
};
