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
  const hideTyping = useCallback(
    debounce(() => {
      setIsTyping(false);
      dispatch(
        setStatusTyping({
          ...payload,
          mode: 'remove',
          time: -1,
        })
      );
    }, 1000),
    []
  );

  const showTyping = () => {
    if (!isTyping) {
      setIsTyping(true);
      dispatch(
        setStatusTyping({
          ...payload,
          mode: 'add',
          time: new Date().getTime(),
        })
      );
    }
    hideTyping();
  };

  useEffect(() => {
    dispatch(
      setStatusTyping({
        ...payload,
        mode: 'remove',
        time: -1,
      })
    );
    // eslint-disable-next-line
  }, []);

  return showTyping;
};

export default useTyping;
