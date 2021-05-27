import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';

// styles
import './chat-messages-styles.scss';

const ChatMessages: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, {}>((_, ref) => {
    return <div className="ChatMessages" ref={ref}></div>;
  });

export default ChatMessages;
