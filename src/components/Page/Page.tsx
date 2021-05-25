import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// components
import PageHeader from '../PageHeader/PageHeader';
import ProfilePicker from '../ProfilePickerSection/ProfilePickerSection';
import PageLoader from '../PageLoader/PageLoader';

// store
import { profileIdSelector } from '../../store/auth/selectors';
import { appDataLoadedSelector } from '../../store/selectors';

// styles
import './page-styles.scss';

const Page: FunctionComponent<{}> = () => {
  const profileId = useSelector(profileIdSelector);
  const appDataLoaded = useSelector(appDataLoadedSelector);

  if (!appDataLoaded) {
    return <PageLoader appDataLoaded={appDataLoaded} />;
  }

  // if (!profileId) {
  //   return <ProfilePicker />;
  // }

  return (
    <div className="Page">
      <PageHeader />
    </div>
  );
};

export default Page;
