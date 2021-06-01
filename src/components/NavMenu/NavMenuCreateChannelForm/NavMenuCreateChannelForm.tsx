// @ts-nocheck
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// store
import { createChannel } from '../../../store/channels/actions';
import { isPendingSelector } from '../../../store/channels/selectors';

// styles
import './nav-menu-create-channel-form-styles.scss';

type TProps = {
  closeModal: () => void;
};

const NavMenuCreateChannelForm: FunctionComponent<TProps> = ({
  closeModal,
}) => {
  const [channelName, setChannelName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isPending = useSelector(isPendingSelector);
  const dispatch = useDispatch();

  const onSubmitHandler = (event: Event): void => {
    event.preventDefault();

    if (channelName) {
      dispatch(createChannel(channelName));
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (!isPending && isSubmitted) {
      closeModal();
    }
    // eslint-disable-next-line
  }, [isPending, isSubmitted]);

  return (
    <form className="NavMenuCreateChannelForm" onSubmit={onSubmitHandler}>
      <h2>Create channel:</h2>
      <TextField
        className="NavMenuCreateChannelForm__input"
        onChange={(e) => setChannelName(e.target.value)}
        label="Channel name:"
        value={channelName}
      />
      <Button
        className="ProfileForm__submit-button"
        color="primary"
        disabled={isPending}
        size="large"
        type="submit"
        variant="contained"
      >
        Create Channel
        {isPending && (
          <CircularProgress
            className="ProfileForm__spinner"
            color="primary"
            size={20}
          />
        )}
      </Button>
    </form>
  );
};

export default NavMenuCreateChannelForm;
