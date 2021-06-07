// @ts-nocheck
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// hooks
import useTyping from './useTyping';

// others
import SendIcon from '../../../assets/images/icons/send-icon.svg';
import SendDisabledIcon from '../../../assets/images/icons/send-disabled-icon.svg';
import { TProfile } from '../../../store/profiles/types';

// services
import { getPreparedContent } from './services';

// store
import { sendMessage } from '../../../store/channels/actions';
import { getAttributesFromSelectedProfile } from '../../../store/profiles/selectors';

// styles
import './chat-input-styles.scss';

type TProps = {
  channelName: string;
  updateHeightMessages: () => void;
};

const ChatInput: ForwardRefExoticComponent<
  TProps & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TProps>(
  ({ updateHeightMessages, channelName }, ref) => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const [content, setContent] = useState('');
    const [visibilityPlaceholder, setVisibilityPlaceholder] = useState(true);
    const {
      name: profileName,
      src: avatarSrc,
      profileId,
    }: TProfile = useSelector(getAttributesFromSelectedProfile);
    const inputText = inputRef.current?.innerText.trim() || '';
    const turnOnTyping = useTyping(profileId, profileName);

    const onBlurHandler = (): void => {
      if (!inputText) {
        setVisibilityPlaceholder(true);
      }
    };

    const onInputHandler = (event: Event): void => {
      const { target } = event;

      turnOnTyping();
      setContent(target.innerHTML);
      updateHeightMessages();
    };
    // eslint-disable-next-line

    const onSubmitHandler = () => {
      if (content) {
        dispatch(
          sendMessage({
            avatarSrc,
            content: getPreparedContent(content),
            profileName,
            profileId,
            time: new Date().getTime(),
          })
        );
        resetAfterSubmit();
      }
    };

    const resetAfterSubmit = () => {
      inputRef.current.innerText = '';

      updateHeightMessages();
      setContent('');
      setVisibilityPlaceholder(true);
    };

    return (
      <div className="ChatInput" ref={ref}>
        <p
          className="ChatInput__text-field"
          contentEditable={true}
          onBlur={onBlurHandler}
          onFocus={() => setVisibilityPlaceholder(false)}
          onInput={onInputHandler}
          ref={inputRef}
          suppressContentEditableWarning
        />
        {visibilityPlaceholder && (
          <span className="ChatInput__placeholder">
            Message #{channelName}:
          </span>
        )}
        <img
          alt="send-icon"
          className="ChatInput__send-icon"
          onClick={onSubmitHandler}
          src={inputText ? SendIcon : SendDisabledIcon}
        />
      </div>
    );
  }
);

export default ChatInput;
