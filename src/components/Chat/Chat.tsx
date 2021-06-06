// @ts-nocheck
import { FunctionComponent, useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';

// core
import { Context } from '../../core/ContextProvider/ContextProvider';

// others
import { TContext } from '../../core/ContextProvider/types';

// store
import { getAttributeFromSelectedChannel } from '../../store/channels/selectors';

// styles
import './chat-styles.scss';

const Chat: FunctionComponent<{}> = () => {
  const inputRef = useRef(null);
  const messagesRef = useRef(null);
  const name = useSelector(getAttributeFromSelectedChannel('name'));
  const { margin }: TContext = useContext(Context);

  const onInputHandler = (): void => {
    const height = inputRef.current.clientHeight;
    const calculatedHeight = `calc(100% - ${height}px)`;

    messagesRef.current.style.height = calculatedHeight;
    messagesRef.current.style.maxHeight = calculatedHeight;
  };

  return (
    <section
      className="Chat"
      style={{ height: `calc(100vh - ${80 + margin}px)` }}
    >
      <ChatMessages ref={messagesRef} />
      <ChatInput
        channelName={name}
        inputHandler={onInputHandler}
        ref={inputRef}
      />
    </section>
  );
};

export default Chat;
