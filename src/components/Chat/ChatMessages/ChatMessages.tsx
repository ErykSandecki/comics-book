// @ts-nocheck
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { useSelector } from 'react-redux';

// others
import EmptyMessages from '../../../assets/images/backgrounds/empty-messages.svg';
import { Message } from '../../../store/channels/types';

// store
import {
  getAttributeFromChannels,
  getAttributeFromSelectedChannel,
} from '../../../store/channels/selectors';

// styles
import './chat-messages-styles.scss';

const ChatMessages: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, {}>((_, ref) => {
    const selectedChannelId = useSelector(
      getAttributeFromChannels('selectedChannelId')
    );
    const messages: Array<Message> =
      useSelector(
        getAttributeFromSelectedChannel('messages', selectedChannelId)
      ) || [];

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
          <div className="ChatMessages__wrapper">
            <img alt="avatar" className="ChatMessages__avatar" />
            <div className="ChatMessages__content">
              <p className="ChatMessages__profile-name">
                <b></b> date
              </p>
              <p className="ChatMessages__message"></p>
            </div>
          </div>
        )}
      </section>
    );
  });

export default ChatMessages;
