// @ts-nocheck
import { useCallback, useRef, useState } from 'react';

const usePress = (
  pressHandler,
  clickHandler,
  { shouldPreventDefault = true, delay = 1000 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const start = useCallback(
    (event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }

      timeout.current = setTimeout(() => {
        pressHandler(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [pressHandler, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (_, shouldTriggerClick = true) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      if (shouldTriggerClick && !longPressTriggered) {
        clickHandler();
      }

      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }

      setLongPressTriggered(false);
    },
    [shouldPreventDefault, clickHandler, longPressTriggered]
  );

  return {
    onMouseDown: (e) => start(e),
    onTouchStart: (e) => start(e),
    onMouseUp: (e) => clear(e),
    onMouseLeave: (e) => clear(e, false),
    onTouchEnd: (e) => clear(e),
    clearManual: () => clear(null, false),
  };
};

const isTouchEvent = (event) => {
  return 'touches' in event;
};

const preventDefault = (event) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default usePress;
