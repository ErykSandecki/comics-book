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
import { getAttributeFromProfiles } from '../../store/profiles/selectors';
import { setStatusProfile } from '../../store/profiles/actions';

// styles
import './page-styles.scss';

const Page: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('seletedProfileId')
  );
  const appDataLoaded = useSelector(appDataLoadedSelector);

  const setStatusOffline = (event: Event) => {
    event.preventDefault();

    dispatch(setStatusProfile(false));

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
