import { FunctionComponent } from 'react';

// components
import Spinner from '../Spinner/Spinner';

// styles
import './page-loader-styles.scss';

const PageLoader: FunctionComponent = () => (
  <div className="PageLoader">
    <div className="PageLoader__spinner">
      <Spinner />
      <p className="PageLoader__prompt">Loading...</p>
    </div>
  </div>
);

export default PageLoader;
