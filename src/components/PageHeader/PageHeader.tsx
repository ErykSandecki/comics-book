import { FunctionComponent, useState } from 'react';

// components
import NavMenu from '../NavMenu/NavMenu';

// others
import HamburgerMenu from '../../assets/images/icons/hamburger-menu.svg';

// styles
import './page-header-styles.scss';

const PageHeader: FunctionComponent<{}> = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="PageHeader">
      {/* LEFT COLUMN */}
      <div className="PageHeader__content">
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
        onClick={() => setVisible(true)}
        src={HamburgerMenu}
      />

      {/* Nav Left Menu */}
      <NavMenu visible={visible} setVisible={setVisible} />
    </header>
  );
};

export default PageHeader;
