import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// components
import PageHeader from '../PageHeader/PageHeader';
import ProfilePicker from '../ProfilePickerSection/ProfilePickerSection';
import PageLoader from '../PageLoader/PageLoader';

// store
import { getAttributeFromProfiles } from '../../store/profiles/selectors';
import { appDataLoadedSelector } from '../../store/selectors';

// styles
import './page-styles.scss';

const Page: FunctionComponent<{}> = () => {
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('seletedProfileId')
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
      <PageHeader />
    </div>
  );
};

export default Page;
