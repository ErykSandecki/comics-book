// @ts-nocheck
import { useSelector } from 'react-redux';

// others
import { DatabaseColumns } from '../Firebase/enums';
import { TProfile } from './../../store/profiles/types';

// store
import { getAttributeFromProfiles } from '../../store/profiles/selectors';

// services
import getRefDatabase from '../Firebase/services/getRefDatabase';

const useOnDisconnectHandlers = () => {
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );
  const profiles: Array<TProfile> = useSelector(
    getAttributeFromProfiles('data')
  );
  const indexProfile = profiles.findIndex(
    ({ profileId }) => profileId === selectedProfileId
  );

  const disconnectProfile = () =>
    getRefDatabase([DatabaseColumns.profiles, indexProfile, 'online'])
      .onDisconnect()
      .set(false);

  return {
    disconnectProfile,
  };
};

export default useOnDisconnectHandlers;
