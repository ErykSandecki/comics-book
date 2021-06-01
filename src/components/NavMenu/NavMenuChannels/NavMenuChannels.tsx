import { FunctionComponent, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import NavMenuCreateChannelForm from '../NavMenuCreateChannelForm/NavMenuCreateChannelForm';

// others
import PlusWhiteIcon from '../../../assets/images/icons/plus-white-icon.svg';

// styles
import './nav-menu-channels-styles.scss';

const NavMenuChannels: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="NavMenuChannels">
      {/* NAV */}
      <div className="NavMenuChannels__nav">
        <p className="NavMenuChannels__title">Channels</p>
        <img
          alt="plus-white-icon"
          className="NavMenuChannels__button"
          onClick={() => setVisible(true)}
          src={PlusWhiteIcon}
        />
      </div>

      {/* MODAL */}
      <Modal
        className="NavMenuChannels__modal"
        closeAfterTransition
        open={visible}
        onClose={() => setVisible(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visible}>
          <div className="NavMenuChannels__card">
            <NavMenuCreateChannelForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default NavMenuChannels;
