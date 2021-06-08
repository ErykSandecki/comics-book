import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';

// others
import { config } from './constants';
import { DatabaseColumns } from './enums';
import { TChannel } from '../../store/channels/types';
import { TProfile } from '../../store/profiles/types';
import { TTyping } from '../../store/typings/types';

// store
import { isAuthenticatedSelector } from '../../store/selectors';
import { fetchChannelsSuccess } from '../../store/channels/actions';
import { fetchProfilesSuccess } from '../../store/profiles/actions';
import { fetchTypingsSuccess } from '../../store/typings/actions';

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
    const channelsActions = (payload: Array<TChannel>): void => {
      dispatch(fetchChannelsSuccess(payload));
    };
    const typingsActions = (payload: Array<TTyping>): void => {
      dispatch(fetchTypingsSuccess(payload));
    };

    if (isAuthenticated) {
      setTimeout(() => {
        databaseHandler(firebase, profilesActions, DatabaseColumns.profiles);
        databaseHandler(firebase, channelsActions, DatabaseColumns.channels);
        databaseHandler(firebase, typingsActions, DatabaseColumns.typings);
      }, 8000);
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return null;
};

export default Firebase;
