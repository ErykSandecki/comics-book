// @ts-nocheck
import { FunctionComponent, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// others
import BackIcon from '../../assets/images/icons/back.svg';
import ButtonPicture from '../../assets/images/icons/button-picture.svg';
import EmptyImage from '../../assets/images/icons/empty-image.svg';
import { TImageData } from '../../types';
import { TProfileFormData } from '../../store/profiles/types';

// services
import loadImage from './services/loadImage';

// store
import { isPendingSelector } from '../../store/profiles/selectors';

// styles
import './profile-form-styles.scss';

type TProps = {
  clickHandler: () => void;
  name?: string;
  imageData?: TImageData;
  submitHandler: (formData: TProfileFormData) => void;
  title: string;
};

const ProfileForm: FunctionComponent<TProps> = ({
  clickHandler,
  name: initialName = '',
  imageData: initialImageData = null,
  submitHandler,
  title,
}) => {
  const isPending = useSelector(isPendingSelector);
  const inputRef = useRef(null);
  const [imageData, setImageData] = useState(initialImageData);
  const [name, setName] = useState(initialName);

  const onSubmitHandler = (event: Event) => {
    event.preventDefault();

    if (imageData && name) {
      submitHandler({ backToProfileList: clickHandler, imageData, name });
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
            imageData ? 'ProfileForm__avatar--selected' : ''
          }`}
        >
          {imageData ? (
            <img
              alt="avatar"
              className="ProfileForm__image"
              src={imageData.src}
            />
          ) : (
            <img
              alt="empty"
              className="ProfileForm__empty-picture"
              src={EmptyImage}
            />
          )}

          {/* BUTTON */}
          <img
            alt="button-icon"
            className="ProfileForm__button-picture"
            onClick={() => inputRef.current.click()}
            src={ButtonPicture}
          />
          <input
            className="ProfileForm__input-file"
            onChange={(event: Event) => loadImage(event, setImageData)}
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
        />

        <Button
          className="ProfileForm__submit-button"
          color="primary"
          disabled={isPending}
          size="large"
          type="submit"
          variant="contained"
        >
          Create Profile
          {isPending && (
            <CircularProgress
              className="ProfileForm__spinner"
              color="primary"
              size={20}
            />
          )}
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
