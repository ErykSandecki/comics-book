import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { login } from './saga';
import { AuthActionsType } from './actionsType';

export function* watchAuth(): Generator<AllEffect<ForkEffect<any>>> {
  yield all([
    // @ts-ignore
    takeEvery(AuthActionsType.login, login),
  ]);
}
