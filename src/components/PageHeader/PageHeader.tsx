import { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

// components
import NavMenu from '../NavMenu/NavMenu';
import PageHeaderSettingsMenu from './PageHeaderSettingsMenu/PageHeaderSettingsMenu';

// others
import HamburgerMenu from '../../assets/images/icons/hamburger-menu.svg';
import { TChannel } from '../../store/channels/types';
import { TProfile } from '../../store/profiles/types';

// services
import isOnlineUser from '../../services/isOnlineUser';

// store
import {
  getAttributeFromChannels,
  getAttributesFromSelectedChannel,
  getDefaultChannelId,
} from '../../store/channels/selectors';
import {
  getAttributeFromProfiles,
  getAttributeFromSelectedProfile,
} from '../../store/profiles/selectors';

// styles
import './page-header-styles.scss';

const PageHeader: FunctionComponent<{}> = () => {
  const [visible, setVisible] = useState(false);
  const defaultChannelId = useSelector(getDefaultChannelId);
  const selectedChannelId =
    useSelector(getAttributeFromChannels('selectedChannelId')) ||
    defaultChannelId;
  const { name, shortcut }: TChannel = useSelector(
    getAttributesFromSelectedChannel(selectedChannelId)
  );
  const profiles: Array<TProfile> = useSelector(
    getAttributeFromProfiles('data')
  );
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );

  //@ts-ignore
  const lastUpdateTime: number = useSelector(
    getAttributeFromSelectedProfile('lastUpdateTime', selectedProfileId)
  );

  const getNumberOfUsersOnline = (): number =>
    profiles
      .filter(({ profileId }) => profileId !== selectedProfileId)
      .reduce(
        (total, { lastUpdateTime: lastUpdateTimeProfile, online }) =>
          isOnlineUser(lastUpdateTime, lastUpdateTimeProfile, online)
            ? ++total
            : total,
        0
      );

  return (
    <header className="PageHeader">
      {/* LEFT COLUMN */}
      <div className="PageHeader__left-column">
        {/* PICKER */}
        <div className="PageHeader__channel-picker">{shortcut}</div>

        {/* DETAILS */}
        <div>
          <p className="PageHeader__title">#{name}</p>
          <p className="PageHeader__users">
            {getNumberOfUsersOnline()} Brothers online
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="PageHeader__right-column">
        <PageHeaderSettingsMenu />
        <img
          alt="hamburger-menu"
          className="PageHeader__hamburger-menu"
          onClick={() => setVisible(true)}
          src={HamburgerMenu}
        />
      </div>

      {/* Nav Left Menu */}
      <NavMenu visible={visible} setVisible={setVisible} />
    </header>
  );
};

export default PageHeader;
