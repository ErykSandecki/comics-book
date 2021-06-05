import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';

// styles
import './chat-messages-styles.scss';

const ChatMessages: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, {}>((_, ref) => {
    return (
      <section className="ChatMessages" ref={ref}>
        <div className="ChatMessages__wrapper">
          <img alt="avatar" className="ChatMessages__avatar" />
          <div className="ChatMessages__content">
            <p className="ChatMessages__profile-name">
              <b></b> date
            </p>
            <p className="ChatMessages__message"></p>
          </div>
        </div>
      </section>
    );
  });

export default ChatMessages;
