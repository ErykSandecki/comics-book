import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { createProfile } from './saga';
import { ProfilesActionsType } from './actionsType';

export function* watchProfiles(): Generator<AllEffect<ForkEffect<any>>> {
  yield all([
    // @ts-ignore
    takeEvery(ProfilesActionsType.createProfile, createProfile),
  ]);
}
