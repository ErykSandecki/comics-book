import { FunctionComponent } from 'react';

// components
import ProfileForm from '../ProfileForm/ProfileForm';

const CreateProfileForm: FunctionComponent = ({ ...restProps }) => {
  //@ts-ignore
  return <ProfileForm title="Create Profile:" {...restProps} />;
};

export default CreateProfileForm;
