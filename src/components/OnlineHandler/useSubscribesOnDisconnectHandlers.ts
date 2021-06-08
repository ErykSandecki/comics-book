// @ts-nocheck
import { useSelector } from 'react-redux';

// others
import { DatabaseColumns } from '../Firebase/enums';

// services
import getRefDatabase from '../Firebase/services/getRefDatabase';
import { getTypingsWithRemovedItem } from '../Chat/ChatInput/services';

// store
import { getAttributeFromSelectedChannel } from '../../store/channels/selectors';

const useSubscribesDisconnectHandlers = (
  indexProfile: number,
  selectedProfileId: string
) => {
  const typings = useSelector(getAttributeFromSelectedChannel('typings')) || [];

  const subscribeProfile = () =>
    getRefDatabase([DatabaseColumns.profiles, indexProfile, 'online'])
      .onDisconnect()
      .set(false);

  const subscribeTypings = () => null;
    getRefDatabase([DatabaseColumns.typings])
      .onDisconnect()
      .set(getTypingsWithRemovedItem(typings, selectedProfileId));

  return {
    subscribeTypings,
    subscribeProfile,
  };
};

export default useSubscribesDisconnectHandlers;
