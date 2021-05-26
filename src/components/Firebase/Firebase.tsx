// @ts-nocheck
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';

// others
import { config } from './constants';
import { DatabaseColumns } from './enums';
import { TProfile } from '../../store/profiles/types';

// store
import { isAuthenticatedSelector } from '../../store/selectors';
import { fetchProfilesSuccess } from '../../store/profiles/actions';

// services
import databaseHandler from './services/databaseHandler';

const Firebase: FunctionComponent<{}> = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.initializeApp(config);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const profilesActions = (payload: Array<TProfile>): void => {
      dispatch(fetchProfilesSuccess(payload));
    };

    if (isAuthenticated) {
      setTimeout(() => {
        databaseHandler(firebase, profilesActions, DatabaseColumns.profiles);
      }, 5000);
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return null;
};

export default Firebase;
