import { FunctionComponent } from 'react';

// others
import BackIcon from '../../assets/images/icons/back.svg';
import ButtonPicture from '../../assets/images/icons/button-picture.svg';

// styles
import './profile-form-styles.scss';

type TProps = {
  clickHandler: () => void;
  src?: string;
  title: string;
};

const ProfileForm: FunctionComponent<TProps> = ({
  clickHandler,
  src,
  title,
}) => {
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
        <div className="ProfileForm__avatar">
          {/* AVATAR */}
          {src ? (
            <img alt="avatar" className="ProfileForm__image" src={src} />
          ) : (
            <p className="ProfileForm__empty-picture">Please select picture:</p>
          )}

          {/* BUTTON */}
          <img
            alt="button-picture"
            className="ProfileForm__button-picture"
            src={ButtonPicture}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
