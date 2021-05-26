// @ts-nocheck
export const REDUCER_KEY = 'profiles';

export enum ProfilesActionsType {
  createProfile = `${REDUCER_KEY}/createProfile`,
  fetchProfilesSuccess = `${REDUCER_KEY}/fetchProfilesSuccess`,
  fetchProfilesError = `${REDUCER_KEY}/fetchProfilesError`,
  uploadImageFinished = `${REDUCER_KEY}/uploadImageFinished`,
}
