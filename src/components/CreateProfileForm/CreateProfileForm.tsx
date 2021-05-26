import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

// components
import ProfileForm from '../ProfileForm/ProfileForm';

// store
import { createProfile } from '../../store/profiles/actions';
import { TProfileFormData } from '../../store/profiles/types';

const CreateProfileForm: FunctionComponent = ({ ...restProps }) => {
  const dispatch = useDispatch();

  const submitHandler = (formData: TProfileFormData) =>
    dispatch(createProfile(formData));

  return (
    //@ts-ignore
    <ProfileForm
      submitHandler={submitHandler}
      title="Create Profile:"
      {...restProps}
    />
  );
};

export default CreateProfileForm;
