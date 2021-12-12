import { useEffect, useRef } from 'react';
import { throttle } from '../utils/throttle';

const useScrollEvent = (
  callback: (e: any) => void,
  options = { throttle: 16 },
  ref: any
) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const elem = ref.current;
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const callback = callbackRef.current;

    const handleScroll = throttle((e) => {
      callback(e);
    }, options.throttle);

    elem.addEventListener('scroll', handleScroll);

    return () => {
      elem.removeEventListener('scroll', handleScroll);
    };
  }, [callbackRef, ref, options.throttle]);
};
export { useScrollEvent };
