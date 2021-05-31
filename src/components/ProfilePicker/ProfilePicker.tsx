import { FunctionComponent, useState } from 'react';

// hooks
import usePress from './usePress';

// others
import PlusIcon from '../../assets/images/icons/plus.svg';

// styles
import './profile-picker-styles.scss';

type TProps = {
  clickHandler: () => void;
  mode?: 'add' | 'select';
  name?: string;
  src?: string;
};

const ProfilePicker: FunctionComponent<TProps> = ({
  clickHandler,
  mode = 'add',
  name,
  src,
}) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const isOverlayVisible = mode === 'select' && overlayVisible;
  const onPressHandler = () => {
    setOverlayVisible(true);
  };

  const onClickHandler = () => {
    clickHandler();
  };

  const press = usePress(onPressHandler, onClickHandler);

  return (
    <section className="ProfilePicker">
      <div
        className={`ProfilePicker__card ProfilePicker--${mode} ${
          isOverlayVisible ? 'ProfilePicker__blur' : ''
        }`}
        {...press}
      >
        {/* TITLE */}
        <p className={`ProfilePicker__title ProfilePicker--${mode}__title`}>
          {name ? name : 'Create:'}
        </p>

        {/* CIRCLE */}
        <div className={`ProfilePicker__button ProfilePicker--${mode}__button`}>
          <img
            alt={name ? `${name}-avatar` : 'icon'}
            className={`ProfilePicker__image ProfilePicker--${mode}__image`}
            src={src ? src : PlusIcon}
          />
        </div>
      </div>

      {/* OVERLAY */}
      {isOverlayVisible && <div className="ProfilePicker__overlay"></div>}
    </section>
  );
};

export default ProfilePicker;
