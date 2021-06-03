// others
import { TIME_TO_COMPARE } from '../constants';

const isOnlineUser = (
  lastTimeFromSelectedProfile: number,
  lastUpdateFromTimeSomeProfile: number,
  online: boolean
): boolean =>
  online &&
  lastTimeFromSelectedProfile - lastUpdateFromTimeSomeProfile < TIME_TO_COMPARE;

export default isOnlineUser;
