import { FunctionComponent } from 'react';

// others
import Background from '../../assets/images/backgrounds/error.svg';

// styles
import './error-container-styles.scss';

const ErrorContainer: FunctionComponent<{}> = () => {
  return (
    <section className="Error">
      <img
        alt="background-error"
        className="Error__background"
        src={Background}
      />
    </section>
  );
};

export default ErrorContainer;
