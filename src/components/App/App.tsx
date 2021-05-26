import { useEffect, useMemo, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// components
import ErrorPage from '../ErrorPage/ErrorPage';
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

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark',
        },
      }),
    []
  );

  useEffect(() => {
    const password = prompt('Please enter a password:');
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    dispatch(loginAction(password as string));
    // eslint-disable-next-line
  }, []);

  if (isPending) {
    return null;
  }

  if (errorMessage) {
    return <ErrorPage />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Page />;
    </ThemeProvider>
  );
};

export default App;
