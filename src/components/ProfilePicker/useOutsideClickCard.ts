// @ts-nocheck
import { MutableRefObject, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const useOutsideClickCard = (ref: MutableRefObject<HTMLDivElement>) => {
  const [isFocus, setFocus] = useState(false);

  useEffect(() => {
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

    if (isMobile) {
      document.addEventListener('touchstart', handleClickOutside);
      return () => {
        document.removeEventListener('touchstart', handleClickOutside);
      };
    } else {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [ref, isFocus]);

  return isFocus;
};

export default useOutsideClickCard;
