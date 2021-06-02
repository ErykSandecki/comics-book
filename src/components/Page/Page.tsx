import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Chat from '../Chat/Chat';
import PageHeader from '../PageHeader/PageHeader';
import ProfilePicker from '../ProfilePickerSection/ProfilePickerSection';
import PageLoader from '../PageLoader/PageLoader';

// others
import { DatabaseColumns } from '../Firebase/enums';
import { TProfile } from '../../store/profiles/types';

// store
import { appDataLoadedSelector } from '../../store/selectors';
import {
  getAttributeFromProfiles,
  getAttributeFromSelectedProfile,
} from '../../store/profiles/selectors';
import { setStatusProfile } from '../../store/profiles/actions';

// services
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

// styles
import './page-styles.scss';

const Page: FunctionComponent<{}> = () => {
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('seletedProfileId')
  );
  const data: Array<TProfile> = useSelector(getAttributeFromProfiles('data'));
  const indexProfile = data?.findIndex(
    ({ profileId }) => profileId === selectedProfileId
  );
  const appDataLoaded = useSelector(appDataLoadedSelector);

  const setStatusOffline = (event: Event) => {
    event.preventDefault();
    if (indexProfile !== -1) {
      // @ts-ignore
      getRefDatabase([DatabaseColumns.profiles, indexProfile, 'online']).set(
        false
      );
    }
    return undefined;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', setStatusOffline);
    // eslint-disable-next-line
  });

  if (!appDataLoaded) {
    return <PageLoader appDataLoaded={appDataLoaded} />;
  }

  if (!selectedProfileId) {
    return <ProfilePicker />;
  }

  return (
    <div className="Page">
      <PageHeader />
      <Chat />
    </div>
  );
};

export default Page;
