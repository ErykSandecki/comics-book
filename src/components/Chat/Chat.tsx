// @ts-nocheck
import { FunctionComponent, useContext, useRef } from 'react';

// components
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';

// core
import { Context } from '../../core/ContextProvider/ContextProvider';

// others
import { TContext } from '../../core/ContextProvider/types';

// styles
import './chat-styles.scss';

const Chat: FunctionComponent<{}> = () => {
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const { margin }: TContext = useContext(Context);

  const onInputHandler = (): void => {
    const height = inputRef.current.clientHeight;
    messagesRef.current.style.height = `calc(100% - ${height}px)`;
  };

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
