import { FunctionComponent } from 'react';

// styles
import './chat-input-styles.scss';

const ChatInput: FunctionComponent<{}> = () => {
  return (
    <div className="ChatInput">
      <p
        className="ChatInput__text-field"
        contentEditable={true}
        suppressContentEditableWarning
      />
    </div>
  );
};

export default ChatInput;
