// @ts-nocheck
export const REDUCER_KEY = 'profiles';

export enum ProfilesActionsType {
  createProfile = `${REDUCER_KEY}/createProfile`,
  createProfileSuccess = `${REDUCER_KEY}/createProfileSuccess`,
  createProfileError = `${REDUCER_KEY}/createProfileError`,
  fetchProfilesSuccess = `${REDUCER_KEY}/fetchProfilesSuccess`,
  fetchProfilesError = `${REDUCER_KEY}/fetchProfilesError`,
  uploadImageFinished = `${REDUCER_KEY}/uploadImageFinished`,
  selectProfile = `${REDUCER_KEY}/selectProfile`,
  selectProfileError = `${REDUCER_KEY}/selectProfileError`,
  setStatusProfile = `${REDUCER_KEY}/setStatusProfile`,
  setStatusProfileError = `${REDUCER_KEY}/setStatusProfileError`,
}
