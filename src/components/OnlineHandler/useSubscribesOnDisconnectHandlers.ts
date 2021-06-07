// @ts-nocheck
// others
import { DatabaseColumns } from '../Firebase/enums';

// services
import getRefDatabase from '../Firebase/services/getRefDatabase';

const useSubscribesDisconnectHandlers = (indexProfile: number) => {
  const subscribeProfile = () =>
    getRefDatabase([DatabaseColumns.profiles, indexProfile, 'online'])
      .onDisconnect()
      .set(false);

  return {
    subscribeProfile,
  };
};

export default useSubscribesDisconnectHandlers;
