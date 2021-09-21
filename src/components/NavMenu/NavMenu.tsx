import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// components
import NavMenuChannels from './NavMenuChannels/NavMenuChannels';
import NavMenuProfiles from './NavMenuProfiles/NavMenuProfiles';

// others
import CloseWhiteIcon from '../../assets/images/icons/close-white-icon.svg';

// store
import { getAttributesFromSelectedProfile } from '../../store/profiles/selectors';

// services
import getBrowserName from '../../services/getBrowserName';

// styles
import './nav-menu-styles.scss';

type TProps = {
  visible: boolean;
  setVisible: (flag: boolean) => void;
};

const NavMenu: FunctionComponent<TProps> = ({ visible, setVisible }) => {
  const onClickHandler = (): void => setVisible(false);
  const { name, src } = useSelector(getAttributesFromSelectedProfile);
  const BrowserName = getBrowserName();

  return (
    <div
      className={`NavMenu ${visible && 'NavMenu--visible'}`}
      onClick={onClickHandler}
    >
      {/* BACKGROUND */}
      <div
        className={`NavMenu__background ${
          visible && 'NavMenu__background--visible'
        }`}
      />

      {/* CONTAINER */}
      <div
        className={`NavMenu__container ${
          visible && 'NavMenu__container--visible'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="NavMenu__header">
          <div className="NavMenu__profile-data">
            <img
              alt="profile-avatar"
              className="NavMenu__profile-avatar"
              src={src}
            />
            <p className="NavMenu__profile-name">{name}</p>
          </div>
          <img
            alt="close-white-icon"
            className="NavMenu__button-close"
            onClick={onClickHandler}
            src={CloseWhiteIcon}
          />
        </div>

        {/* CONTENT */}
        <div className={`NavMenu__content NavMenu__content--${BrowserName}`}>
          <NavMenuChannels closeNavMenu={onClickHandler} />
          <NavMenuProfiles />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
