import { FunctionComponent, useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';

// others
import UpdateIcon from '../../assets/images/icons/update-icon.svg';
import { UPDATE_DETAILS, CURRENT_VERSION } from './constants';
import { LocalStorageKey } from '../../enums';

// styles
import './modal-new-updates-styles.scss';

const ModalNewUpdates: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const savedVersion = localStorage.getItem(LocalStorageKey.version) || '';

  const onClickHandler = (): void => {
    localStorage.setItem(LocalStorageKey.version, CURRENT_VERSION);
    setVisible(false);
  };

  useEffect(() => {
    if (savedVersion !== CURRENT_VERSION) {
      setTimeout(() => {
        setVisible(true);
      }, 1000);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Modal
      className="ModalNewUpdates"
      closeAfterTransition
      open={visible}
      onClose={onClickHandler}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={visible}>
        <div className="ModalNewUpdates__container">
          <div className="ModalNewUpdates__wrapper">
            {/* ICON */}
            <div className="ModalNewUpdates__icon">
              <img alt="update-icon" src={UpdateIcon} />
            </div>

            {/* DETAILS */}
            <div className="ModalNewUpdates__content">
              <h4 className="ModalNewUpdates__title">
                New Update: {CURRENT_VERSION}
              </h4>
              <ul className="ModalNewUpdates__details">
                {UPDATE_DETAILS.map((description) => (
                  <li className="ModalNewUpdates__item" key={description}>
                    <p className="ModalNewUpdates__description">
                      {description}.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Button
            className="ModalNewUpdates__submit"
            onClick={onClickHandler}
            variant="outlined"
          >
            Understand
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalNewUpdates;
