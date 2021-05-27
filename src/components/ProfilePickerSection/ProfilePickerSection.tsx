import { FunctionComponent, useState } from 'react';

// components
import CreateProfileForm from '../CreateProfileForm/CreateProfileForm';
import ProfilePickerList from '../ProfilePickerList/ProfilePickerList';

// others
import { Mode } from './enums';

// styles
import './profile-picker-section-styles.scss';

const ProfilePickerSection: FunctionComponent = () => {
  const [mode, setMode] = useState(Mode.listProfiles);

  const onClickBackHandler = (): void => setMode(Mode.listProfiles);

  return (
    <section className="ProfilePickerSection">
      {mode === Mode.listProfiles ? (
        // LIST
        <ProfilePickerList clickHandler={(mode: Mode) => setMode(mode)} />
      ) : (
        // @ts-ignore
        <CreateProfileForm clickHandler={onClickBackHandler} />
      )}
    </section>
  );
};

export default ProfilePickerSection;
