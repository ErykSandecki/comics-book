// @ts-nocheck
import { PutEffect, take, put, select } from 'redux-saga/effects';
import { TProfileFormData } from './types';

// others
import { DatabaseColumns } from '../../components/Firebase/enums';
import { StoragePath } from '../../enums';

// services
import afterUploadImageHandler from '../../components/Firebase/services/afterUploadImageHandler';
import generateProfileId from '../../components/Firebase/services/generateProfileId';
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

// store
import { ProfilesActionsType } from './actionsType';
import {
  createProfileSuccess,
  createProfileError,
  uploadImageFinished,
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
  const profileId = generateProfileId(data);

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
