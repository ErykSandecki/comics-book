// @ts-nocheck
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from 'react';

// others
import SendIcon from '../../../assets/images/icons/send-icon.svg';

// styles
import './chat-input-styles.scss';

type TProps = {
  inputHandler: (event: Event) => void;
};

const ChatInput: ForwardRefExoticComponent<
  TProps & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TProps>(({ inputHandler }, ref) => {
  const [visibilityPlaceholder, setVisibilityPlaceholder] = useState(true);

  const onBlurHandler = (event: Event): void => {
    const { target } = event;

    if (target.innerText === '') {
      setVisibilityPlaceholder(true);
    }
  };

  return (
    <div className="ChatInput" ref={ref}>
      <p
        className="ChatInput__text-field"
        contentEditable={true}
        onBlur={onBlurHandler}
        onFocus={() => setVisibilityPlaceholder(false)}
        onInput={inputHandler}
        suppressContentEditableWarning
      />
      {visibilityPlaceholder && (
        <span className="ChatInput__placeholder">Message #Meetings:</span>
      )}
      <img alt="send-icon" className="ChatInput__send-icon" src={SendIcon} />
    </div>
  );
});

export default ChatInput;
