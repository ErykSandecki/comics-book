// @ts-nocheck
import { delay, PutEffect, put, select } from 'redux-saga/effects';

// others
import { DatabaseColumns } from '../../components/Firebase/enums';

// services
import generateId from '../../components/Firebase/services/generateId';
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

// store
import { createChannelSuccess, createChannelError } from './actions';
import { getAttributeFromChannels } from './selectors';

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
