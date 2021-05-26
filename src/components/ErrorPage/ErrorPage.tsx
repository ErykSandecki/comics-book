import { FunctionComponent } from 'react';

// others
import Background from '../../assets/images/backgrounds/error.svg';

// styles
import './error-page-styles.scss';

const ErrorPage: FunctionComponent = () => (
  <section className="ErrorPage">
    <img
      alt="background-error"
      className="ErrorPage__background"
      src={Background}
    />
  </section>
);

export default ErrorPage;
