import { FunctionComponent, useState } from 'react';

// components
import CreateProfileForm from '../CreateProfileForm/CreateProfileForm';
import ProfilePickerList from '../ProfilePickerList/ProfilePickerList';

// others
import { Mode } from './enums';

// styles
import './profile-picker-section-styles.scss';

const ProfilePickerSection: FunctionComponent<{}> = () => {
  const [mode, setMode] = useState(Mode.createProfile);

  return (
    <section className="ProfilePickerSection">
      {mode === Mode.listProfiles ? (
        <ProfilePickerList clickHandler={(mode: Mode) => setMode(mode)} />
      ) : (
        <>
          <h2>Create Profile:</h2>
          <CreateProfileForm clickHandler={() => setMode(Mode.listProfiles)} />
        </>
      )}
    </section>
  );
};

export default ProfilePickerSection;
