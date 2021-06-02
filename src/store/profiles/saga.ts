// @ts-nocheck
import { PutEffect, take, put, select } from 'redux-saga/effects';
import { TProfileFormData } from './types';

// others
import { DatabaseColumns } from '../../components/Firebase/enums';
import { TProfile } from './types';
import { StoragePath } from '../../enums';

// services
import afterUploadImageHandler from '../../components/Firebase/services/afterUploadImageHandler';
import generateId from '../../components/Firebase/services/generateId';
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

// store
import { ProfilesActionsType } from './actionsType';
import {
  createProfileSuccess,
  createProfileError,
  uploadImageFinished,
  selectProfileError,
  setStatusProfileError,
} from './actions';
import { uploadFile } from '../common/actions';
import { getAttributeFromProfiles } from './selectors';

export function* createProfile({ payload }): Generator<PutEffect<any>> {
  const {
    backToProfileList,
    name,
    imageData: { file },
  }: TProfileFormData = payload;
  const path = `${StoragePath.profiles}/${name}`;
  const data = yield select(getAttributeFromProfiles('data'));
  const profileId = generateId(data, 'profileId');

  try {
    yield put(uploadFile({ action: uploadImageFinished, path, file }));

    const { payload } = yield take(ProfilesActionsType.uploadImageFinished);
    const src = afterUploadImageHandler(payload);

    yield getRefDatabase([DatabaseColumns.profiles]).set([
      ...data,
      { name, online: false, profileId, src },
    ]);
    yield put(createProfileSuccess());
    yield backToProfileList();
  } catch (error) {
    yield put(createProfileError(error));
  }
}

export function* selectProfile({
  payload: selectedProfileId,
}): Generator<PutEffect<any>> {
  const profiles: Array<TProfile> = yield select(
    getAttributeFromProfiles('data')
  );
  const indexProfile = profiles.findIndex(
    ({ profileId }) => profileId === selectedProfileId
  );

  try {
    yield getRefDatabase([
      DatabaseColumns.profiles,
      indexProfile,
      'online',
    ]).set(true);
  } catch (error) {
    yield put(selectProfileError(error));
  }
}

export function* setStatusProfile({
  payload: online,
}): Generator<PutEffect<any>> {
  const selectedProfileId = yield select(
    getAttributeFromProfiles('seletedProfileId')
  );
  const data: Array<TProfile> = yield select(getAttributeFromProfiles('data'));
  const indexProfile = data.findIndex(
    ({ profileId }) => profileId === selectedProfileId
  );

  if (indexProfile === -1) {
    return;
  }

  try {
    yield getRefDatabase([
      DatabaseColumns.profiles,
      indexProfile,
      'online',
    ]).set(online);
  } catch (error) {
    yield put(setStatusProfileError(error));
  }
}
