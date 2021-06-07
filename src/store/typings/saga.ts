// @ts-nocheck
import { PutEffect, put, select } from 'redux-saga/effects';

// others
import { DatabaseColumns } from '../../components/Firebase/enums';
import { TChannel, TTyping } from './types';

// services
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';
import { getTypingsWithRemovedItem } from '../../components/Chat/ChatInput/services';

// store
import { getAttributeFromTypings } from './selectors';
import { setStatusTypingError } from './actions';

export function* setStatusTyping({
  payload,
}: TTyping & { mode: 'add' | 'remove' }): Generator<PutEffect<any>> {
  const { channelId, mode, profileId, profileName } = payload;
  const typings: Array<TChannel> =
    (yield select(getAttributeFromTypings('typings'))) || [];

  try {
    yield getRefDatabase([DatabaseColumns.typings]).set(
      mode === 'add'
        ? [...typings, { channelId, profileId, profileName }]
        : getTypingsWithRemovedItem(typings, profileId)
    );
  } catch (error) {
    yield put(setStatusTypingError(error));
  }
}
