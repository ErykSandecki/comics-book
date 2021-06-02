// @ts-nocheck
export const REDUCER_KEY = 'channels';

export enum ChannelsActionsType {
  createChannel = `${REDUCER_KEY}/createChannel`,
  createChannelSuccess = `${REDUCER_KEY}/createChannelSuccess`,
  createChannelsError = `${REDUCER_KEY}/createChannelsError`,
  fetchChannelsSuccess = `${REDUCER_KEY}/fetchChannelsSuccess`,
  fetchChannelsError = `${REDUCER_KEY}/fetchChannelsError`,
  uploadImageFinished = `${REDUCER_KEY}/uploadImageFinished`,
  setChannelId = `${REDUCER_KEY}/setChannelId`,
}
