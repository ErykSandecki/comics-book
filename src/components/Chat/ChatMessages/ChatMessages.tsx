// @ts-nocheck
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { useSelector } from 'react-redux';

// others
import EmptyMessages from '../../../assets/images/backgrounds/empty-messages.svg';
import { TMessage } from '../../../store/channels/types';

// store
import { getAttributeFromSelectedChannel } from '../../../store/channels/selectors';

// styles
import './chat-messages-styles.scss';

const ChatMessages: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, {}>((_, ref) => {
    const messages: Array<TMessage> =
      useSelector(getAttributeFromSelectedChannel('messages')) || [];

    return (
      <section className="ChatMessages" ref={ref}>
        {messages.length === 0 ? (
          <div className="ChatMessages__empty">
            <img alt="empty-messages" src={EmptyMessages} />
            <p className="ChatMessages__suggestion">
              No messages! You can start a conversation on this channel.
            </p>
          </div>
        ) : (
          messages.map(({ avatarSrc, content, profileName }, index) => (
            <div className="ChatMessages__wrapper" key={index}>
              <img
                alt="avatar"
                className="ChatMessages__avatar"
                src={avatarSrc}
              />
              <div className="ChatMessages__content">
                <p className="ChatMessages__profile-name">
                  <b>{profileName}</b>
                </p>
                <p className="ChatMessages__content">{content}</p>
              </div>
            </div>
          ))
        )}
      </section>
    );
  });

export default ChatMessages;
