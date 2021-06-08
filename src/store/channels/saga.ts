// @ts-nocheck
import { delay, PutEffect, put, select } from 'redux-saga/effects';

// others
import { DatabaseColumns } from '../../components/Firebase/enums';
import { TChannel } from './types';

// services
import generateId from '../../components/Firebase/services/generateId';
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

// store
import {
  createChannelSuccess,
  createChannelError,
  sendMessageSuccess,
  sendMessageError,
} from './actions';
import {
  getAttributeFromChannels,
  getAttributeFromSelectedChannel,
} from './selectors';

export function* createChannel({ payload }): Generator<PutEffect<any>> {
  const { name, shortcut } = payload;
  const data = yield select(getAttributeFromChannels('channels'));
  const channelId = generateId(data, 'channelId');

  try {
    yield delay(1000);
    yield getRefDatabase([DatabaseColumns.channels]).set([
      ...data,
      { channelId, name, shortcut },
    ]);
    yield put(createChannelSuccess());
  } catch (error) {
    yield put(createChannelError(error));
  }
}

export function* sendMessage({ payload }): Generator<PutEffect<any>> {
  const channels: Array<TChannel> = yield select(
    getAttributeFromChannels('channels')
  );
  const selectedChannelId = yield select(
    getAttributeFromChannels('selectedChannelId')
  );
  const messages =
    (yield select(getAttributeFromSelectedChannel('messages'))) || [];
  const indexOfChannel = channels.findIndex(
    ({ channelId }) => channelId === selectedChannelId
  );

  try {
    yield getRefDatabase([
      DatabaseColumns.channels,
      indexOfChannel,
      'messages',
    ]).set([...messages, payload]);
    yield put(sendMessageSuccess());
  } catch (error) {
    yield put(sendMessageError(error));
  }
}