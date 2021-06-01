import { FunctionComponent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// styles
import './nav-menu-create-channel-form-styles.scss';

const NavMenuCreateChannelForm: FunctionComponent = () => {
  const [channelName, setChannelName] = useState('');

  return (
    <form className="NavMenuCreateChannelForm">
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
        // disabled={isPending}
        size="large"
        type="submit"
        variant="contained"
      >
        Create Channel
        {/* {isPending && (
          <CircularProgress
            className="ProfileForm__spinner"
            color="primary"
            size={20}
          />
        )} */}
      </Button>
    </form>
  );
};

export default NavMenuCreateChannelForm;
