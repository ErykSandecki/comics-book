import { FunctionComponent } from 'react';

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
  return (
    <section
      className={`ProfilePicker ProfilePicker--${mode}`}
      onClick={clickHandler}
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
    </section>
  );
};

export default ProfilePicker;
