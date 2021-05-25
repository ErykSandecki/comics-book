import { FunctionComponent } from 'react';

// others
import Gentleman from '../../assets/images/backgrounds/gentleman.svg';

// styles
import './page-loader-styles.scss';

type TProps = {
  appDataLoaded: boolean;
};

const PageLoader: FunctionComponent<TProps> = ({ appDataLoaded }) => (
  <div className="PageLoader">
    <h2 className="PageLoader__title">WELCOME GENTLEMAN</h2>
    {/* LOGO */}
    <img alt="gentleman-logo" src={Gentleman} />

    {/* SPINNER */}
    <div className="PageLoader__spinner">
      {Array.from(Array(12)).map((_, index) => (
        <div
          className={`PageLoader__circle PageLoader__circle--${index + 1}`}
          key={index}
        ></div>
      ))}
    </div>
  </div>
);

export default PageLoader;
