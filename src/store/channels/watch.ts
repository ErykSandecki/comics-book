import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { createChannel } from './saga';
import { ChannelsActionsType } from './actionsType';

export function* watchChannels(): Generator<AllEffect<ForkEffect<any>>> {
  yield all([
    // @ts-ignore
    takeEvery(ChannelsActionsType.createChannel, createChannel),
  ]);
}
