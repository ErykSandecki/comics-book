// @ts-nocheck
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// hooks
import useOnDisconnectHandlers from './useOnDisconnectHandlers';

// others
import { TProfile } from '../../store/profiles/types';

// store
import { getAttributeFromProfiles } from '../../store/profiles/selectors';
import { updateTimeProfile } from '../../store/profiles/actions';

const OnlineHandler: FunctionComponent = () => {
  const dispatch = useDispatch();
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );
  const profiles: Array<TProfile> = useSelector(
    getAttributeFromProfiles('data')
  );
  const indexProfile = profiles.findIndex(
    ({ profileId }) => profileId === selectedProfileId
  );
  const { disconnectProfile } = useOnDisconnectHandlers(indexProfile);

  useEffect(() => {
    disconnectProfile();
    dispatch(updateTimeProfile(selectedProfileId));
    // eslint-disable-next-line
  }, []);

  return null;
};

export default OnlineHandler;