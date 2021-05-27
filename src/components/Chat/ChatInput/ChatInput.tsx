// @ts-nocheck
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';

// others
import SendIcon from '../../../assets/images/icons/send-icon.svg';

// styles
import './chat-input-styles.scss';

type TProps = {
  changeHandler: (event: Event) => void;
};

const ChatInput: ForwardRefExoticComponent<
  TProps & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TProps>(({ changeHandler }, ref) => {
  return (
    <div className="ChatInput" ref={ref}>
      <p
        className="ChatInput__text-field"
        contentEditable={true}
        onInput={changeHandler}
        suppressContentEditableWarning
      />
      <img alt="send-icon" className="ChatInput__send-icon" src={SendIcon} />
    </div>
  );
});

export default ChatInput;
