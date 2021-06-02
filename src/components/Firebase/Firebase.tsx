// @ts-nocheck
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';

// hooks
import useOnDisconnectHandlers from './useOnDisconnectHandlers';

// others
import { config } from './constants';
import { DatabaseColumns } from './enums';
import { TChannel } from '../../store/channels/types';
import { TProfile } from '../../store/profiles/types';

// store
import { isAuthenticatedSelector } from '../../store/selectors';
import { fetchChannelsSuccess } from '../../store/channels/actions';
import { fetchProfilesSuccess } from '../../store/profiles/actions';

// services
import databaseHandler from './services/databaseHandler';

const Firebase: FunctionComponent<{}> = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();
  const { disconnectProfile } = useOnDisconnectHandlers();

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

    if (!isAuthenticated) {
      setTimeout(() => {
        databaseHandler(
          firebase,
          profilesActions,
          DatabaseColumns.profiles,
          disconnectProfile
        );
        databaseHandler(firebase, channelsActions, DatabaseColumns.channels);
      }, 1);
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return null;
};

export default Firebase;
