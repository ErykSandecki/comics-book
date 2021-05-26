import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { uploadImage } from './saga';
import { CommonActionsType } from './actionsType';

export function* watchCommonStore(): Generator<AllEffect<ForkEffect<any>>> {
  yield all([
    // @ts-ignore
    takeEvery(CommonActionsType.uploadFile, uploadImage),
  ]);
}
