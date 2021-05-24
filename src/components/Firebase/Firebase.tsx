// @ts-nocheck
import { FunctionComponent, useEffect } from 'react';
import firebase from 'firebase';

// others
import { config } from './constants';

const Firebase: FunctionComponent<{}> = () => {
  useEffect(() => {
    firebase.initializeApp(config);
    // eslint-disable-next-line
  }, []);

  return null;
};

export default Firebase;
