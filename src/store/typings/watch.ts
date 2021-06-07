// @ts-nocheck
import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { setStatusTyping } from './saga';
import { TypingsActionsType } from './actionsType';

export function* watchTypings(): Generator<AllEffect<ForkEffect<any>>> {
  yield all([takeEvery(TypingsActionsType.setStatusTyping, setStatusTyping)]);
}
