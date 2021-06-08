import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

// components
import Chat from '../Chat/Chat';
import ModalNewUpdates from '../ModalNewUpdates/ModalNewUpdates';
import OnlineHandler from '../OnlineHandler/OnlineHandler';
import PageHeader from '../PageHeader/PageHeader';
import ProfilePicker from '../ProfilePickerSection/ProfilePickerSection';
import PageLoader from '../PageLoader/PageLoader';

// store
import { appDataLoadedSelector } from '../../store/selectors';
import { getAttributeFromProfiles } from '../../store/profiles/selectors';
import { getAttributeFromChannels } from '../../store/channels/selectors';
import { setChannelId } from '../../store/channels/actions';

// styles
import './page-styles.scss';

const Page: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );
  const selectedChannelId = useSelector(
    getAttributeFromChannels('selectedChannelId')
  );
  const appDataLoaded = useSelector(appDataLoadedSelector);
  const channels = useSelector(getAttributeFromChannels('channels'));

  useEffect(() => {
    if (appDataLoaded && !selectedChannelId) {
      const channelId = get(channels, '0.channelId');
      dispatch(setChannelId(channelId));
    }
    // eslint-disable-next-line
  }, [appDataLoaded, selectedChannelId]);

  if (!appDataLoaded) {
    return <PageLoader />;
  }

  if (!selectedProfileId) {
    return (
      <>
        <ModalNewUpdates />
        <ProfilePicker />
      </>
    );
  }

  return (
    <div className="Page">
      <OnlineHandler />
      <PageHeader />
      <Chat />
    </div>
  );
};

export default Page;
