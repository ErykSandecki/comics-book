import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// components
import Chat from '../Chat/Chat';
import OnlineHandler from '../OnlineHandler/OnlineHandler';
import PageHeader from '../PageHeader/PageHeader';
import ProfilePicker from '../ProfilePickerSection/ProfilePickerSection';
import PageLoader from '../PageLoader/PageLoader';

// store
import { appDataLoadedSelector } from '../../store/selectors';
import { getAttributeFromProfiles } from '../../store/profiles/selectors';

// styles
import './page-styles.scss';

const Page: FunctionComponent<{}> = () => {
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );
  const appDataLoaded = useSelector(appDataLoadedSelector);

  if (!appDataLoaded) {
    return <PageLoader appDataLoaded={appDataLoaded} />;
  }

  if (!selectedProfileId) {
    return <ProfilePicker />;
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
