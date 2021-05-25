import { useEffect, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import ErrorContainer from '../ErrorContainer/ErrorContainer';
import Page from '../Page/Page';

// store
import {
  errorMessageSelector,
  isPendingSelector,
} from '../../store/auth/selectors';
import { loginAction } from '../../store/auth/actions';

const App: FunctionComponent<{}> = () => {
  const isPending = useSelector(isPendingSelector);
  const dispatch = useDispatch();
  const errorMessage = useSelector(errorMessageSelector);

  // useEffect(() => {
  //   const password = prompt('Please enter a password:');
  //   indexedDB.deleteDatabase('firebaseLocalStorageDb');
  //   dispatch(loginAction(password as string));
  //   // eslint-disable-next-line
  // }, []);

  // if (isPending) {
  //   return null;
  // }

  // if (errorMessage) {
  //   return <ErrorContainer />;
  // }

  return <Page />;
};

export default App;
