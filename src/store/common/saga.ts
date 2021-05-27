// @ts-nocheck
import firebase from 'firebase';
import { eventChannel } from 'redux-saga';
import { PutEffect, put, takeEvery } from 'redux-saga/effects';
import { TFileUploadPayload } from './types';

export function* uploadImage({ payload }): Generator<PutEffect<any>> {
  const { action, file, path }: TFileUploadPayload = payload;

  try {
    const uploadTask = firebase.storage().ref(path).put(file);
    const channel = eventChannel((emit) =>
      uploadTask.on('state_changed', emit)
    );
    let src = '';

    yield takeEvery(channel, () => {});
    yield uploadTask;
    yield uploadTask.snapshot.ref
      .getDownloadURL()
      .then((response) => (src = response));
    yield put(action({ result: 'success', src }));
  } catch (error) {
    yield put(action({ error, result: 'error' }));
  }
}
