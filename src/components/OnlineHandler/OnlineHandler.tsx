// @ts-nocheck
import { FunctionComponent, useEffect } from 'react';

// hooks
import useOnDisconnectHandlers from './useOnDisconnectHandlers';

const OnlineHandler: FunctionComponent = () => {
  const { disconnectProfile } = useOnDisconnectHandlers();

  useEffect(() => {
    disconnectProfile();
    // eslint-disable-next-line
  }, []);

  return null;
};

export default OnlineHandler;
