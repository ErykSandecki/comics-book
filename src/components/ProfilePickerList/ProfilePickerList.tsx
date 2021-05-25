import { FunctionComponent } from 'react';

// components
import ProfilePicker from '../ProfilePicker/ProfilePicker';

// others
import { Mode } from '../ProfilePickerSection/enums';

// styles
import './profile-picker-list-styles.scss';

type TProps = {
  clickHandler: (mode: Mode) => void;
};

const ProfilePickerList: FunctionComponent<TProps> = ({ clickHandler }) => {
  return (
    <section className="ProfilePickerList">
      {/* CONTENT */}
      <h1 className="ProfilePickerList__title">Choose a user:</h1>
      <p className="ProfilePickerList__description">
        Select a user to start a conversation with your brother-in-law.
      </p>

      {/* PICKERS */}
      <div className="ProfilePickerList__pickers">
        <ProfilePicker clickHandler={() => clickHandler(Mode.addProfile)} />
      </div>
    </section>
  );
};

export default ProfilePickerList;
