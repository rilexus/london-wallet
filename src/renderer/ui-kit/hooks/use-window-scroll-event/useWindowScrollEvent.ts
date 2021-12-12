import { useEffect, useRef } from 'react';
import { throttle } from '../utils';

function useWindowScrollEvent(callback: () => void, throttleDelay: number) {
  const callBackRef = useRef(callback);

  useEffect(() => {
    callBackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleScrollPosition = throttle(() => {
      if (typeof callBackRef.current === 'function') {
        callBackRef.current();
      }
    }, throttleDelay);

    window.addEventListener('scroll', handleScrollPosition);
    return function clean() {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, [throttleDelay]);
}
export { useWindowScrollEvent };
