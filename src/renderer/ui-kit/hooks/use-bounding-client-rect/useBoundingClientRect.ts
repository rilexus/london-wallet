import { useEffect, useState } from 'react';
import { useWindowScrollEvent } from '../use-window-scroll-event/useWindowScrollEvent';
import { getBoundingClientRect } from './utils';

type Rect = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  scrollLeft: number;
  scrollRight: number;
  scrollWidth: number;
};

const useBoundingClientRect = (ref: any): [Rect] => {
  const [rect, setRect] = useState({
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    scrollLeft: 1,
    scrollRight: 1,
    scrollWidth: 1,
    // will by hydrated with scroll values
  });

  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const rect = getBoundingClientRect(elem);
      setRect((prevRect) => ({
        ...prevRect,
        ...rect,
      }));
    }
  }, [ref]);

  useWindowScrollEvent(() => {
    if (ref.current) {
      const elem = ref.current;
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const rect = getBoundingClientRect(elem);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setRect((prevRect) => ({
        ...prevRect,
        ...rect,
      }));
    }
  }, 10);

  return [rect];
};
export { useBoundingClientRect };
