// @ts-nocheck
import { PutEffect, put } from 'redux-saga/effects';
import firebase from 'firebase';

// others
import { EMAIL } from '../../constants';

// store
import { loginActionError, loginActionSuccess } from './actions';

export function* login(data: { payload: string }): Generator<PutEffect<any>> {
  const password = data.payload;

  try {
    yield firebase.auth().signInWithEmailAndPassword(EMAIL, password);
    yield put(loginActionSuccess());
  } catch (error) {
    const { code } = error;
    yield put(loginActionError(code));
  }
}
