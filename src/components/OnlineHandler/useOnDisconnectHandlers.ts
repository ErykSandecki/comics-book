// @ts-nocheck
// others
import { DatabaseColumns } from '../Firebase/enums';
import { LocalStorageKey } from '../../enums';

// services
import getRefDatabase from '../Firebase/services/getRefDatabase';

const useOnDisconnectHandlers = () => {
  const disconnectProfile = () => {
    const indexProfile =
    localStorage.getItem(LocalStorageKey.indexProfile) || -1;
    return getRefDatabase([DatabaseColumns.profiles, indexProfile, 'online'])
      .onDisconnect()
      .set(false);
  };

  return {
    disconnectProfile,
  };
};

export default useOnDisconnectHandlers;
