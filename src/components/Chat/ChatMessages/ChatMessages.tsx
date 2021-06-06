// @ts-nocheck
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

// others
import EmptyMessages from '../../../assets/images/backgrounds/empty-messages.svg';
import { TMessage } from '../../../store/channels/types';

// services
import { getDate } from './services';

// store
import {
  getAttributeFromChannels,
  getAttributeFromSelectedChannel,
} from '../../../store/channels/selectors';

// styles
import './chat-messages-styles.scss';

const ChatMessages: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, {}>((_, ref) => {
    const [automaticScroll, setAutomaticScroll] = useState(true);
    const selectedChannelId = useSelector(
      getAttributeFromChannels('selectedChannelId')
    );
    // eslint-disable-next-line
    const messages: Array<TMessage> =
      useSelector(getAttributeFromSelectedChannel('messages')) || [];

    const onScrollHandler = () => {
      const { current } = ref;
      const maxScrollTop = current.scrollHeight - current.clientHeight;

      if (current.scrollTop === maxScrollTop) {
        setAutomaticScroll(true);
      } else {
        setAutomaticScroll(false);
      }
    };

    useEffect(() => {
      const { current } = ref;
      if (automaticScroll) {
        current.scrollTo({ top: current.scrollHeight, behavior: 'smooth' });
      }
      // eslint-disable-next-line
    }, [messages, ref]);

    useEffect(() => {
      const { current } = ref;
      current.scrollTo({ top: current.scrollHeight, behavior: 'smooth' });
      setAutomaticScroll(true);
      // eslint-disable-next-line
    }, [selectedChannelId]);

    return (
      <section className="ChatMessages" onScroll={onScrollHandler} ref={ref}>
        {messages.length === 0 ? (
          <div className="ChatMessages__empty">
            <img alt="empty-messages" src={EmptyMessages} />
            <p className="ChatMessages__suggestion">
              No messages! You can start a conversation on this channel.
            </p>
          </div>
        ) : (
          messages.map(({ avatarSrc, content, profileName, time }, index) => (
            <div className="ChatMessages__wrapper" key={index}>
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
          ))
        )}
      </section>
    );
  });

export default ChatMessages;
