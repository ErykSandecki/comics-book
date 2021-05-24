import { FunctionComponent } from 'react';

// others
import Background from '../../assets/images/backgrounds/error.svg';

// styles
import './error-container.scss';

const ErrorContainer: FunctionComponent<{}> = () => {
  return (
    <div className="Error">
      <img
        alt="background-error"
        className="Error__background"
        src={Background}
      />
    </div>
  );
};

export default ErrorContainer;
