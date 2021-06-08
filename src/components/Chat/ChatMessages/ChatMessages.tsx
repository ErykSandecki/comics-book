// @ts-nocheck
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { useSelector } from 'react-redux';

// components
import ChatMessagesTypings from './ChatMessagesTypings/ChatMessagesTypings';

// hooks
import useScroll from './useScroll';

// others
import EmptyMessages from '../../../assets/images/backgrounds/empty-messages.svg';
import { TMessage } from '../../../store/channels/types';
import { TTyping } from '../../../store/typings/types';

// services
import { getDate } from './services';

// store
import { getAttributeFromSelectedChannel } from '../../../store/channels/selectors';
import { getAttributeFromTypings } from '../../../store/typings/selectors';

// styles
import './chat-messages-styles.scss';

const ChatMessages: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, {}>((_, ref) => {
    // eslint-disable-next-line
    const messages: Array<TMessage> =
      useSelector(getAttributeFromSelectedChannel('messages')) || [];
    const typings: Array<TTyping> =
      useSelector(getAttributeFromTypings('typings')) || [];
    const scrollHandler = useScroll(messages, ref, typings);
    const lastElement = messages.length - 1;

    return (
      <section className="ChatMessages" onScroll={scrollHandler} ref={ref}>
        {messages.length === 0 ? (
          <div className="ChatMessages__empty">
            <img alt="empty-messages" src={EmptyMessages} />
            <p className="ChatMessages__suggestion">
              No messages! You can start a conversation on this channel.
            </p>
          </div>
        ) : (
          <>
            {messages.map(
              ({ avatarSrc, content, profileName, time }, index) => (
                <div
                  className={`ChatMessages__wrapper ${
                    index === lastElement ? 'ChatMessages__wrapper--last' : ''
                  }`}
                  key={index}
                >
                  <img
                    alt="avatar"
                    className="ChatMessages__avatar"
                    src={avatarSrc}
                  />
                  <div className="ChatMessages__content">
                    <p className="ChatMessages__profile-name">
                      <b>{profileName}</b> {getDate(time)}
                    </p>
                    <p
                      className="ChatMessages__content"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>
                </div>
              )
            )}
            <ChatMessagesTypings typings={typings} />
          </>
        )}
      </section>
    );
  });

export default ChatMessages;
