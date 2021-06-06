// @ts-nocheck
import { FunctionComponent, useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

// components
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';

// core
import { Context } from '../../core/ContextProvider/ContextProvider';

// others
import { TContext } from '../../core/ContextProvider/types';

// store
import { getAttributeFromChannels } from '../../store/channels/selectors';
import { setChannelId } from '../../store/channels/actions';

// styles
import './chat-styles.scss';

const Chat: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const { margin }: TContext = useContext(Context);
  const selectedChannelId = useSelector(
    getAttributeFromChannels('selectedChannelId')
  );
  const channels = useSelector(getAttributeFromChannels('channels'));

  const onInputHandler = (): void => {
    const height = inputRef.current.clientHeight;
    const calculatedHeight = `calc(100% - ${height}px)`;

    messagesRef.current.style.height = calculatedHeight;
    messagesRef.current.style.maxHeight = calculatedHeight;
  };

  useEffect(() => {
    if (!selectedChannelId) {
      const channelId = get(channels, '0.channelId');
      dispatch(setChannelId(channelId));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section
      className="Chat"
      style={{ height: `calc(100vh - ${80 + margin}px)` }}
    >
      <ChatMessages ref={messagesRef} />
      <ChatInput inputHandler={onInputHandler} ref={inputRef} />
    </section>
  );
};

export default Chat;
