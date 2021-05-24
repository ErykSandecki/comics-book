import { FunctionComponent } from 'react';

// components
import PageHeader from '../PageHeader/PageHeader';

// styles
import './page-styles.scss';

const Main: FunctionComponent<{}> = () => {
  return (
    <div className="Page">
      <PageHeader />
    </div>
  );
};

export default Main;
