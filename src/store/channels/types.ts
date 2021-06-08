// others
import { TReturnablePayload } from './../common/types';

// store
import { ChannelsActionsType } from './actionsType';

export type TMessage = {
  avatarSrc: string;
  content: string;
  profileName: string;
  profileId: string;
  time: number;
};

export type TChannel = {
  channelId: string;
  messages?: Array<TMessage>;
  name: string;
  shortcut: string;
};

export type TChannelsState = {
  channels: Array<TChannel>;
  error: string;
  isPending: boolean;
  selectedChannelId: string;
};

export type TCreateChannel = {
  type: typeof ChannelsActionsType.createChannel;
  payload: Omit<TChannel, 'chanelId' | 'messages'>;
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

export type TSendMessage = {
  type: typeof ChannelsActionsType.sendMessage;
  payload: TMessage;
};

export type TSendMessageSuccess = {
  type: typeof ChannelsActionsType.sendMessageSuccess;
};

export type TSendMessageError = {
  type: typeof ChannelsActionsType.sendMessageError;
  payload: string;
};

export type TSetChannelId = {
  type: typeof ChannelsActionsType.setChannelId;
  payload: string;
};

export type TUploadImageFinished = {
  type: typeof ChannelsActionsType.uploadImageFinished;
  payload: TReturnablePayload;
};
