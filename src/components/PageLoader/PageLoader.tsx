import { FunctionComponent, useEffect, useState } from 'react';

// components
import Spinner from '../Spinner/Spinner';

// others
import Gentleman from '../../assets/images/backgrounds/gentleman.svg';

// styles
import './page-loader-styles.scss';

const PageLoader: FunctionComponent = () => {
  const [visibleContent, setVisibleContent] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisibleContent(false), 5000);
  }, []);

  return (
    <div className="PageLoader">
      {/* CONTENT */}
      {visibleContent && (
        <div className="PageLoader__content">
          <h2 className="PageLoader__title">Welcome Gentleman:</h2>
          <img
            alt="gentleman-logo"
            className="PageLoader__image-welcome"
            src={Gentleman}
          />
        </div>
      )}

      {/* SPINNER */}
      <div
        className={`PageLoader__spinner ${
          !visibleContent ? 'PageLoader__spinner--show' : ''
        }`}
      >
        <Spinner />
      </div>
    </div>
  );
};

export default PageLoader;
