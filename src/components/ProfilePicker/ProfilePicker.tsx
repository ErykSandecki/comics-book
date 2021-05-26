import { FunctionComponent } from 'react';

// others
import PlusIcon from '../../assets/images/icons/plus.svg';

// styles
import './profile-picker-styles.scss';

type TProps = {
  clickHandler: () => void;
  mode?: 'add' | 'select';
};

const ProfilePicker: FunctionComponent<TProps> = ({
  clickHandler,
  mode = 'add',
}) => {
  return (
    <section className={`ProfilePicker ProfilePicker--${mode}`}>
      {/* TITLE */}
      <p className="ProfilePicker__title">Create:</p>

      {/* CIRCLE */}
      <div className="ProfilePicker__button" onClick={clickHandler}>
        <img alt="icon" className="ProfilePicker__icon-plus" src={PlusIcon} />
      </div>
    </section>
  );
};

export default ProfilePicker;
