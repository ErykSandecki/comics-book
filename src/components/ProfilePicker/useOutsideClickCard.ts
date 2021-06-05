// @ts-nocheck
import { MutableRefObject, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const useOutsideClickCard = (ref: MutableRefObject<HTMLDivElement>) => {
  const [isFocus, setFocus] = useState(false);
  const eventType = isMobile ? 'touchstart' : 'mousedown';

  const handleClickOutside = (event: Event): void => {
    const target = event.target as Node;

    if (ref.current) {
      if (!isFocus && ref.current.contains(target)) {
        setFocus(true);
      } else if (isFocus && !ref.current.contains(target)) {
        setFocus(false);
      }
    }
  };


  useEffect(() => {
    document.addEventListener(eventType, handleClickOutside);
    
    return () => {
      document.removeEventListener(eventType, handleClickOutside);
    };
    // eslint-disable-next-line
  }, [ref, isFocus]);

  return isFocus;
};

export default useOutsideClickCard;
