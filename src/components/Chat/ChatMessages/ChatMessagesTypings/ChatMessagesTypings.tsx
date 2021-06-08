//@ts-nocheck
import { FunctionComponent, useCallback } from 'react';
import { useSelector } from 'react-redux';

// others
import TypingSpinner from '../../../../assets/images/icons/typing-spinner.svg';
import { TTyping } from '../../../../store/typings/types';

// store
import {
  getAttributeFromProfiles,
  getAttributeFromSelectedProfile,
} from '../../../../store/profiles/selectors';
import { getAttributeFromChannels } from '../../../../store/channels/selectors';

// services
import isOnlineUser from '../../../../services/isOnlineUser';

// styles
import './chat-messages-typings-styles.scss';

type TProps = {
  typings: Array<TTyping>;
};

const ChatMessagesTypings: FunctionComponent<TProps> = ({ typings }) => {
  const selectedProfileId = useSelector(
    getAttributeFromProfiles('selectedProfileId')
  );
  const selectedChannelId = useSelector(
    getAttributeFromChannels('selectedChannelId')
  );
  const lastUpdateTime: number = useSelector(
    getAttributeFromSelectedProfile('lastUpdateTime')
  );
  const filteredProfiles = useCallback(
    () =>
      typings.filter(
        ({ channelId, profileId, time: lastUpdateTimeProfile }) =>
          profileId !== selectedProfileId &&
          channelId === selectedChannelId &&
          isOnlineUser(lastUpdateTime, lastUpdateTimeProfile, true)
      ),
    [lastUpdateTime, selectedChannelId, selectedProfileId, typings]
  );

  const getDescription = (): string =>
    filteredProfiles().length === 1 ? 'is Typing:' : 'are Typings:';

  const getUsersWhoTypings = (): string => {
    const users = filteredProfiles();

    return users.length > 2
      ? `${users.length} users`
      : users.map(({ profileName }) => profileName).join(', ');
  };

  if (filteredProfiles().length === 0) {
    return null;
  }

  return (
    <div className="ChatMessagesTypings">
      <p className="ChatMessagesTypings__profile">{getUsersWhoTypings()}</p>
      <p className="ChatMessagesTypings__description">{getDescription()}</p>
      <img
        alt="typing-spinner"
        className="ChatMessagesTypings__spinner"
        src={TypingSpinner}
      />
    </div>
  );
};

export default ChatMessagesTypings;
