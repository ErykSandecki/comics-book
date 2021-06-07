// @ts-nocheck
export const REDUCER_KEY = 'channels';

export enum ChannelsActionsType {
  createChannel = `${REDUCER_KEY}/createChannel`,
  createChannelSuccess = `${REDUCER_KEY}/createChannelSuccess`,
  createChannelsError = `${REDUCER_KEY}/createChannelsError`,
  fetchChannelsSuccess = `${REDUCER_KEY}/fetchChannelsSuccess`,
  fetchChannelsError = `${REDUCER_KEY}/fetchChannelsError`,
  uploadImageFinished = `${REDUCER_KEY}/uploadImageFinished`,
  sendMessage = `${REDUCER_KEY}/sendMessage`,
  sendMessageSuccess = `${REDUCER_KEY}/sendMessageSuccess`,
  sendMessageError = `${REDUCER_KEY}/sendMessageError`,
  setChannelId = `${REDUCER_KEY}/setChannelId`,
  setStatusTyping = `${REDUCER_KEY}/setStatusTyping`,
  setStatusTypingError = `${REDUCER_KEY}/setStatusTypingError`,
}
