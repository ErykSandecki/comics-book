import { FunctionComponent, useRef, useState } from 'react';

// others
import BackIcon from '../../assets/images/icons/back.svg';
import ButtonPicture from '../../assets/images/icons/button-picture.svg';

// services
import loadImage from './services/loadImage';

// styles
import './profile-form-styles.scss';

type TProps = {
  clickHandler: () => void;
  title: string;
};

const ProfileForm: FunctionComponent<TProps> = ({ clickHandler, title }) => {
  const inputRef = useRef(null);
  const [src, setSrc] = useState(null);

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
      <form className="ProfileForm">
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
      </form>
    </div>
  );
};

export default ProfileForm;
