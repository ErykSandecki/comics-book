import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// components
import PageHeader from '../PageHeader/PageHeader';
import ProfilePicker from '../ProfilePickerSection/ProfilePickerSection';

// store
import { profileIdSelector } from '../../store/auth/selectors';

// styles
import './page-styles.scss';

const Page: FunctionComponent<{}> = () => {
  const profileId = useSelector(profileIdSelector);

  if (!profileId) {
    return <ProfilePicker />;
  }

  return (
    <div className="Page">
      <PageHeader />
    </div>
  );
};

export default Page;
