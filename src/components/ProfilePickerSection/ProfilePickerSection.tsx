import { FunctionComponent, useState } from 'react';

// components
import CreateProfileForm from '../CreateProfileForm/CreateProfileForm';
import ProfilePickerList from '../ProfilePickerList/ProfilePickerList';

// others
import BackIcon from '../../assets/images/icons/back.svg';
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
        // CREATE PROFILE FORM
        <>
          <h2 className="ProfilePickerSection__title">
            <img
              alt="back-icon"
              className="ProfilePickerSection__icon"
              onClick={onClickBackHandler}
              src={BackIcon}
            />
            Create Profile:
          </h2>
          <CreateProfileForm clickHandler={() => setMode(Mode.listProfiles)} />
        </>
      )}
    </section>
  );
};

export default ProfilePickerSection;
