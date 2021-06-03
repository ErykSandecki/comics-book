// @ts-nocheck
// others
import { DatabaseColumns } from '../Firebase/enums';

// services
import getRefDatabase from '../Firebase/services/getRefDatabase';

const useOnDisconnectHandlers = (indexProfile: number) => {
  const disconnectProfile = () =>
    getRefDatabase([DatabaseColumns.profiles, indexProfile, 'online'])
      .onDisconnect()
      .set(false);

  return {
    disconnectProfile,
  };
};

export default useOnDisconnectHandlers;
