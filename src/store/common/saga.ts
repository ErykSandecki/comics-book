// @ts-nocheck
import firebase from 'firebase';
import { eventChannel } from 'redux-saga';
import { PutEffect, takeEvery, put } from 'redux-saga/effects';
import { TFileUploadPayload } from './types';

export function* uploadImage({ payload }): Generator<PutEffect<any>> {
  const { action, file, name }: TFileUploadPayload = payload;

  try {
    const uploadTask = firebase.storage().ref('image.png').put(file);
    const channel = eventChannel((emit) =>
      uploadTask.on('state_changed', emit)
    );

    yield takeEvery(channel, () => {});
    yield uploadTask;
    const src = yield uploadTask.snapshot.ref.getDownloadURL();
    yield put(action({ result: 'success', src }));
  } catch (error) {
    yield put(action({ result: 'error', src: '' }));
  }
}
