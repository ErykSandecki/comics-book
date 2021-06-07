import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';

// store
import { setStatusTyping } from '../../../store/channels/actions';

const useTyping = (profileId: string, profileName: string) => {
  const [isTyping, setIsTyping] = useState(false);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const turnOffTyping = useCallback(
    debounce(() => {
      setIsTyping(false);
      dispatch(setStatusTyping({ mode: 'remove', profileId, profileName }));
    }, 1000),
    []
  );

  const turnOnTyping = () => {
    if (!isTyping) {
      setIsTyping(true);
      dispatch(
        setStatusTyping({
          mode: 'add',
          profileId,
          profileName,
        })
      );
    }
    turnOffTyping();
  };

  useEffect(() => {
    dispatch(setStatusTyping({ mode: 'remove', profileId, profileName }));
    // eslint-disable-next-line
  }, []);

  return turnOnTyping;
};

export default useTyping;
