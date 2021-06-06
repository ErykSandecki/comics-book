// @ts-nocheck
import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { createChannel, sendMessage } from './saga';
import { ChannelsActionsType } from './actionsType';

export function* watchChannels(): Generator<AllEffect<ForkEffect<any>>> {
  yield all([
    takeEvery(ChannelsActionsType.createChannel, createChannel),
    takeEvery(ChannelsActionsType.sendMessage, sendMessage),
  ]);
}
