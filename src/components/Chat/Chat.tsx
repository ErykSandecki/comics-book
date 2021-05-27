// @ts-nocheck
import { FunctionComponent, useRef } from 'react';

// components
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';

// styles
import './chat-styles.scss';

const Chat: FunctionComponent<{}> = () => {
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  const onInputHandler = (event: Event): void => {
    const height = inputRef.current.clientHeight;
    messagesRef.current.style.height = `calc(100% - ${height}px)`;
  };

  return (
    <section className="Chat">
      <ChatMessages ref={messagesRef} />
      <ChatInput inputHandler={onInputHandler} ref={inputRef} />
    </section>
  );
};

export default Chat;
