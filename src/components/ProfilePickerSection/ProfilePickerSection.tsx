import { FunctionComponent, useState } from 'react';

// components
import ProfilePickerList from '../ProfilePickerList/ProfilePickerList';

// others
import { Mode } from './enums';

// styles
import './profile-picker-section-styles.scss';

const ProfilePickerSection: FunctionComponent<{}> = () => {
  const [mode, setMode] = useState(Mode.listProfiles);

  return (
    <section className="ProfilePickerSection">
      {mode === Mode.listProfiles ? (
        <ProfilePickerList clickHandler={(mode: Mode) => setMode(mode)} />
      ) : (
        <div>Create</div>
      )}
    </section>
  );
};

export default ProfilePickerSection;
