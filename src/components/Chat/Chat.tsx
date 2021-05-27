import { FunctionComponent } from 'react';

// components
import ChatInput from './ChatInput/ChatInput';

// styles
import './chat-styles.scss';

const Chat: FunctionComponent<{}> = () => {
  return (
    <section className="Chat">
      <ChatInput />
    </section>
  );
};

export default Chat;
