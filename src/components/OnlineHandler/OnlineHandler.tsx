// @ts-nocheck
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// hooks
import useSubscribesDisconnectHandlers from './useSubscribesOnDisconnectHandlers';

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

  const { subscribeTypings, subscribeProfile } =
    useSubscribesDisconnectHandlers(indexProfile, selectedProfileId);

  useEffect(() => {
    subscribeProfile();
    subscribeTypings();
    dispatch(updateTimeProfile(selectedProfileId));
    // eslint-disable-next-line
  }, []);

  return null;
};

export default OnlineHandler;
