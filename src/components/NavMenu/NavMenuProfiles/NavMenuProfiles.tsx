import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// others
import OfflineIcon from '../../../assets/images/icons/offline-icon.svg';
import OnlineIcon from '../../../assets/images/icons/online-icon.svg';
import { TProfile } from '../../../store/profiles/types';

// services
import isOnlineUser from '../../../services/isOnlineUser';

// store
import {
  getAttributeFromProfiles,
  getAttributeFromSelectedProfile,
} from '../../../store/profiles/selectors';

// styles
import './nav-menu-profiles-styles.scss';

const NavMenuProfiles: FunctionComponent = () => {
  const profiles: Array<TProfile> = useSelector(
    getAttributeFromProfiles('data')
  );
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );

  //@ts-ignore
  const lastUpdateTime: number = useSelector(
    getAttributeFromSelectedProfile('lastUpdateTime')
  );

  const getIconPath = (
    lastUpdateTimeProfile: number,
    online: boolean
  ): string => {
    if (isOnlineUser(lastUpdateTime, lastUpdateTimeProfile, online)) {
      return OnlineIcon;
    }
    return OfflineIcon;
  };

  return (
    <div className="NavMenuProfiles">
      {/* HEADER */}
      <div className="NavMenuProfiles__header">
        <p className="NavMenuProfiles__title">Brothers-in-law</p>
      </div>

      {/* USERS */}
      <div className="NavMenuProfiles__profiles">
        {profiles
          .filter(({ profileId }) => profileId !== selectedProfileId)
          .map(({ lastUpdateTime, name, online, profileId, src }) => (
            <div className="NavMenuProfiles__profile" key={profileId}>
              <img
                alt={profileId}
                className="NavMenuProfiles__avatar"
                src={src}
              />
              <img
                alt="status-icon"
                className="NavMenuProfiles__status"
                src={getIconPath(lastUpdateTime, online)}
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
