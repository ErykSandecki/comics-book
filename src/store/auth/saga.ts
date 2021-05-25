// @ts-nocheck
import { PutEffect, put } from 'redux-saga/effects';
import firebase from 'firebase';

// others
import { EMAIL } from '../../constants';
import { LocalStorageKeys } from '../../enums';

// store
import { loginActionError, loginActionSuccess } from './actions';

export function* login(data: { payload: string }): Generator<PutEffect<any>> {
  const password = data.payload;
  const profileId = localStorage.getItem(LocalStorageKeys.profileId) || '';

  try {
    yield firebase.auth().signInWithEmailAndPassword(EMAIL, password);
    yield put(loginActionSuccess(profileId));
  } catch (error) {
    const { code } = error;
    yield put(loginActionError(code));
  }
}
