import { FunctionComponent } from 'react';

// others
import HamburgerMenu from '../../assets/images/icons/hamburger-menu.svg';

// styles
import './page-header-styles.scss';

const PageHeader: FunctionComponent<{}> = () => {
  return (
    <header className="PageHeader">
      {/* LEFT COLUMN */}
      <div className="PageHeader__left-column">
        {/* PICKER */}
        <div className="PageHeader__channel-picker">ME</div>

        {/* DETAILS */}
        <div>
          <p className="PageHeader__title">Gentleman App - Meetings</p>
          <p className="PageHeader__users">2 Brothers-in-law online</p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <img
        alt="hamburger-menu"
        className="PageHeader__hamburger-menu"
        src={HamburgerMenu}
      />
    </header>
  );
};

export default PageHeader;
