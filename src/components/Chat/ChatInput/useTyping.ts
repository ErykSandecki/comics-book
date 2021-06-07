import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

// store
import { getAttributeFromChannels } from '../../../store/channels/selectors';
import { setStatusTyping } from '../../../store/typings/actions';

const useTyping = (profileId: string, profileName: string) => {
  const [isTyping, setIsTyping] = useState(false);
  const dispatch = useDispatch();
  const channelId = useSelector(getAttributeFromChannels('selectedChannelId'));
  const payload = {
    profileId,
    profileName,
    channelId,
  };

  // eslint-disable-next-line
  const turnOffTyping = useCallback(
    debounce(() => {
      setIsTyping(false);
      dispatch(setStatusTyping({ ...payload, mode: 'remove' }));
    }, 1000),
    []
  );

  const turnOnTyping = () => {
    if (!isTyping) {
      setIsTyping(true);
      dispatch(
        setStatusTyping({
          ...payload,
          mode: 'add',
        })
      );
    }
    turnOffTyping();
  };

  useEffect(() => {
    dispatch(setStatusTyping({ ...payload, mode: 'remove' }));
    // eslint-disable-next-line
  }, []);

  return turnOnTyping;
};

export default useTyping;
