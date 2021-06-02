import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Chat from '../Chat/Chat';
import PageHeader from '../PageHeader/PageHeader';
import ProfilePicker from '../ProfilePickerSection/ProfilePickerSection';
import PageLoader from '../PageLoader/PageLoader';

// store
import { appDataLoadedSelector } from '../../store/selectors';
import {
  getAttributeFromProfiles,
  getAttributeFromSelectedProfile,
} from '../../store/profiles/selectors';
import { setStatusProfile } from '../../store/profiles/actions';

// styles
import './page-styles.scss';

const Page: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('seletedProfileId')
  );
  const online = useSelector(
    getAttributeFromSelectedProfile('online', selectedProfileId)
  );

  useEffect(() => {
    if (selectedProfileId && !online) {
      dispatch(setStatusProfile(true));
    }
    // eslint-disable-next-line
  }, [online, selectedProfileId]);

  const appDataLoaded = useSelector(appDataLoadedSelector);

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
