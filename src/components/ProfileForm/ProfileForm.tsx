import { FunctionComponent, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// others
import BackIcon from '../../assets/images/icons/back.svg';
import ButtonPicture from '../../assets/images/icons/button-picture.svg';
import { TProfileFormData } from '../../store/profiles/types';

// services
import loadImage from './services/loadImage';

// styles
import './profile-form-styles.scss';

type TProps = {
  clickHandler: () => void;
  submitHandler: (formData: TProfileFormData) => void;
  title: string;
};

const ProfileForm: FunctionComponent<TProps> = ({
  clickHandler,
  submitHandler,
  title,
}) => {
  const inputRef = useRef(null);
  const [src, setSrc] = useState(null);
  const [name, setName] = useState('');

  const onSubmitHandler = () => {
    if (name && src) {
      // @ts-ignore
      submitHandler({ name, src });
    }
  };

  return (
    <div className="ProfileForm__form-wrapper">
      <h2 className="ProfileForm__title">
        <img
          alt="back-icon"
          className="ProfileForm__icon"
          onClick={clickHandler}
          src={BackIcon}
        />
        {title}
      </h2>

      {/* FORM */}
      <form className="ProfileForm" onSubmit={onSubmitHandler}>
        {/* AVATAR */}
        <div
          className={`ProfileForm__avatar ${
            src ? 'ProfileForm__avatar--selected' : ''
          }`}
        >
          {src ? (
            // @ts-ignore
            <img alt="avatar" className="ProfileForm__image" src={src} />
          ) : (
            <p className="ProfileForm__empty-picture">Please select picture:</p>
          )}

          {/* BUTTON */}
          <img
            alt="button-icon"
            className="ProfileForm__button-picture"
            // @ts-ignore
            onClick={() => inputRef.current.click()}
            src={ButtonPicture}
          />
          <input
            className="ProfileForm__input-file"
            // @ts-ignore
            onChange={(event: Event) => loadImage(event, setSrc)}
            ref={inputRef}
            type="file"
          />
        </div>

        {/* INPUT NAME */}
        <TextField
          className="ProfileForm__input-name"
          onChange={(e) => setName(e.target.value)}
          label="Profile name:"
          value={name}
          required
        />

        <Button
          className="ProfileForm__submit-button"
          color="primary"
          size="large"
          type="submit"
          variant="contained"
        >
          Create Profile
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
