import { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

// components
import NavMenuCreateChannelForm from '../NavMenuCreateChannelForm/NavMenuCreateChannelForm';

// others
import PlusWhiteIcon from '../../../assets/images/icons/plus-white-icon.svg';
import { TChannel } from '../../../store/channels/types';

// store
import { getAttributeFromChannels } from '../../../store/channels/selectors';
import { setChannelId } from '../../../store/channels/actions';

// styles
import './nav-menu-channels-styles.scss';

type TProps = {
  closeNavMenu: () => void;
};

const NavMenuChannels: FunctionComponent<TProps> = ({ closeNavMenu }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const channels: Array<TChannel> = useSelector(
    getAttributeFromChannels('channels')
  );

  const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const onClickHandler = (channelId: string): void => {
    closeNavMenu();
    dispatch(setChannelId(channelId));
  };

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
      {/* CHANNELS */}
      <div className="NavMenuChannels__channels">
        {channels.map(({ channelId, name }) => (
          <p
            className="NavMenuChannels__channel-name"
            key={channelId}
            onClick={() => onClickHandler(channelId)}
          >
            #{name}
          </p>
        ))}
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
            <NavMenuCreateChannelForm
              closeModal={() => setVisible(false)}
              openNotifiaction={() => setOpen(true)}
            />
          </div>
        </Fade>
      </Modal>

      {/* NOTIFICATION */}
      <Snackbar
        open={open}
        className="NavMenuChannels__snackbar"
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Channel has been added!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NavMenuChannels;
