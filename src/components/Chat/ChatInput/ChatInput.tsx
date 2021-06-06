// @ts-nocheck
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// others
import SendIcon from '../../../assets/images/icons/send-icon.svg';
import SendDisabledIcon from '../../../assets/images/icons/send-disabled-icon.svg';
import { TProfile } from '../../../store/profiles/types';

// services
import parseHTMLtoText from './parseHTMLtoText';

// store
import { sendMessage } from '../../../store/channels/actions';
import { getAttributesFromSelectedProfile } from '../../../store/profiles/selectors';

// styles
import './chat-input-styles.scss';

type TProps = {
  channelName: string;
  inputHandler: (event: Event) => void;
};

const ChatInput: ForwardRefExoticComponent<
  TProps & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TProps>(({ channelName, inputHandler }, ref) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [visibilityPlaceholder, setVisibilityPlaceholder] = useState(true);
  const {
    name: profileName,
    src: avatarSrc,
    profileId,
  }: TProfile = useSelector(getAttributesFromSelectedProfile);

  const onBlurHandler = (): void => {
    if (!content) {
      setVisibilityPlaceholder(true);
    }
  };

  const onInputHandler = (event: Event): void => {
    const { target } = event;

    setContent(target.innerText.trim());
    inputHandler();
  };

  const onSubmitHandler = () => {
    if (content) {
      dispatch(
        sendMessage({
          avatarSrc,
          content,
          profileName,
          profileId,
          time: new Date().getTime(),
        })
      );
    }
  };

  return (
    <div className="ChatInput" ref={ref}>
      <p
        className="ChatInput__text-field"
        contentEditable={true}
        onBlur={onBlurHandler}
        onFocus={() => setVisibilityPlaceholder(false)}
        onInput={onInputHandler}
        suppressContentEditableWarning
        spellCheck={true}
      />
      {visibilityPlaceholder && (
        <span className="ChatInput__placeholder">Message #{channelName}:</span>
      )}
      <img
        alt="send-icon"
        className="ChatInput__send-icon"
        onClick={onSubmitHandler}
        src={content ? SendIcon : SendDisabledIcon}
      />
    </div>
  );
});

export default ChatInput;
