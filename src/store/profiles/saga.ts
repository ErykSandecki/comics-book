// @ts-nocheck
import { eventChannel } from 'redux-saga';
import { PutEffect, call, take, put } from 'redux-saga/effects';
import { TProfileFormData } from './types';

// store
import { ProfilesActionsType } from './actionsType';
import { uploadImageFinished } from './actions';
import { uploadFile } from '../common/actions';
import { CommonActionsType } from '../common/actionsType';

export function* createProfile({ payload }): Generator<PutEffect<any>> {
  const {
    name,
    imageData: { file },
  }: TProfileFormData = payload;

  try {
    yield put(uploadFile({ action: uploadImageFinished, name, file }));
    const { payload } = yield take(ProfilesActionsType.uploadImageFinished);
    console.log(payload);
  } catch (error) {}
}
