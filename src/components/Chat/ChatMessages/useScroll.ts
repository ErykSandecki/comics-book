// @ts-nocheck
import { ForwardedRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// others
import { TMessage } from './../../../store/channels/types';
import { TTyping } from './../../../store/typings/types';

// store
import {
    getAttributeFromChannels,
  } from '../../../store/channels/selectors';

const useScroll = (messages: Array<TMessage>, ref: ForwardedRef<HTMLDivElement>, typings: Array<TTyping>) => {
    const [automaticScroll, setAutomaticScroll] = useState(true);
    const selectedChannelId = useSelector(
      getAttributeFromChannels('selectedChannelId')
    );

    const scrollHandler = () => {
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
      }, [messages, ref, typings]);
  
      useEffect(() => {
        const { current } = ref;
        current.scrollTo({ top: current.scrollHeight, behavior: 'smooth' });
        setAutomaticScroll(true);
        // eslint-disable-next-line
      }, [selectedChannelId]);

      return scrollHandler;
}

export default useScroll;