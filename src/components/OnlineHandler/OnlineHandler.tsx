// @ts-nocheck
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// hooks
import useSubscribesDisconnectHandlers from './useSubscribesOnDisconnectHandlers';

// others
import { TChannel } from '../../store/channels/types';
import { TProfile } from '../../store/profiles/types';

// store
import { getAttributeFromProfiles } from '../../store/profiles/selectors';
import { getAttributeFromChannels } from '../../store/channels/selectors';
import { updateTimeProfile } from '../../store/profiles/actions';

const OnlineHandler: FunctionComponent = () => {
  const dispatch = useDispatch();
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );
  const selectedChannelId = useSelector(
    getAttributeFromChannels('selectedChannelId')
  );
  const profiles: Array<TProfile> = useSelector(
    getAttributeFromProfiles('data')
  );
  const channels: Array<TChannel> = useSelector(
    getAttributeFromChannels('channels')
  );
  const indexProfile = profiles.findIndex(
    ({ profileId }) => profileId === selectedProfileId
  );
  const indexChannel = channels.findIndex(
    ({ channelId }) => channelId === selectedChannelId
  );

  const { subscribeChannels, subscribeProfile } =
    useSubscribesDisconnectHandlers(
      indexProfile,
      indexChannel,
      selectedProfileId
    );

  useEffect(() => {
    subscribeChannels();
    subscribeProfile();
    dispatch(updateTimeProfile(selectedProfileId));
    // eslint-disable-next-line
  }, []);

  return null;
};

export default OnlineHandler;
