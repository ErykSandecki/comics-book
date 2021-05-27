import { FunctionComponent } from 'react';

// others
import CloseIcon from '../../assets/images/icons/close.svg';

// styles
import './nav-menu-styles.scss';

type TProps = {
  visible: boolean;
  setVisible: (flag: boolean) => void;
};

const NavMenu: FunctionComponent<TProps> = ({ visible, setVisible }) => {
  const onClickHandler = (): void => setVisible(false);

  return (
    <div
      className={`NavMenu ${visible && 'NavMenu--visible'}`}
      onClick={onClickHandler}
    >
      <div
        className={`NavMenu__background ${
          visible && 'NavMenu__background--visible'
        }`}
      />
      <div
        className={`NavMenu__container ${
          visible && 'NavMenu__container--visible'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="NavMenu__header">
          <div className="NavMenu__button-close">
            <img alt="close-icon" onClick={onClickHandler} src={CloseIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
