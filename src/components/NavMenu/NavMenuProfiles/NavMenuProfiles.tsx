import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// others
import OfflineIcon from '../../../assets/images/icons/offline-icon.svg';
import OnlineIcon from '../../../assets/images/icons/online-icon.svg';
import { TProfile } from '../../../store/profiles/types';

// store
import { getAttributeFromProfiles } from '../../../store/profiles/selectors';

// styles
import './nav-menu-profiles-styles.scss';

const NavMenuProfiles: FunctionComponent = () => {
  const profiles: Array<TProfile> = useSelector(
    getAttributeFromProfiles('data')
  );
  const seletedProfileId = useSelector(
    getAttributeFromProfiles('seletedProfileId')
  );

  return (
    <div className="NavMenuProfiles">
      {/* HEADER */}
      <div className="NavMenuProfiles__header">
        <p className="NavMenuProfiles__title">Brothers-in-law</p>
      </div>

      {/* USERS */}
      <div className="NavMenuProfiles__profiles">
        {profiles
          .filter(({ profileId }) => profileId !== seletedProfileId)
          .map(({ name, online, profileId, src }) => (
            <div className="NavMenuProfiles__profile" key={profileId}>
              <img
                alt={profileId}
                className="NavMenuProfiles__avatar"
                src={src}
              />
              <img
                alt="status-icon"
                className="NavMenuProfiles__status"
                src={online ? OnlineIcon : OfflineIcon}
              />
              <p className="NavMenuProfiles__name" key={profileId}>
                {name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NavMenuProfiles;
