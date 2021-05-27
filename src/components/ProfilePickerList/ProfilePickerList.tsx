import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import ProfilePicker from '../ProfilePicker/ProfilePicker';

// others
import { Mode } from '../ProfilePickerSection/enums';
import { TProfile } from '../../store/profiles/types';

// store
import { setProfileId } from '../../store/profiles/actions';
import { getAttributeFromProfiles } from '../../store/profiles/selectors';

// styles
import './profile-picker-list-styles.scss';

type TProps = {
  clickHandler: (mode: Mode) => void;
};

const ProfilePickerList: FunctionComponent<TProps> = ({ clickHandler }) => {
  const dispatch = useDispatch();
  const profiles: Array<TProfile> = useSelector(
    getAttributeFromProfiles('data')
  );

  return (
    <section className="ProfilePickerList">
      {/* CONTENT */}
      <h1 className="ProfilePickerList__title">Choose a brother-in-law:</h1>
      <p className="ProfilePickerList__description">
        Select a profile to start a conversation with your brother-in-law.
      </p>

      {/* PICKERS */}
      <div className="ProfilePickerList__pickers">
        <ProfilePicker clickHandler={() => clickHandler(Mode.createProfile)} />

        {/* LIST */}
        {/* @ts-ignore */}
        {profiles.map(({ name, profileId, src }) => (
          <ProfilePicker
            clickHandler={() => dispatch(setProfileId(profileId))}
            key={profileId}
            mode="select"
            name={name}
            src={src}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfilePickerList;
