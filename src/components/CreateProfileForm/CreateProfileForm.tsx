import { FunctionComponent } from 'react';

// styles
import './create-profile-form-styles.scss';

type TProps = {
  clickHandler: () => void;
};

const CreateProfileForm: FunctionComponent<TProps> = ({ clickHandler }) => {
  return <form className="CreateProfileForm"></form>;
};

export default CreateProfileForm;
