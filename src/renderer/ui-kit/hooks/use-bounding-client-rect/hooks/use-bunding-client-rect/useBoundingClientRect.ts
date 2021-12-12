import { useMemo } from 'react';
import { useScrollEvent } from '../../../use-scroll-event/useScrollEvent';

const useContainerScrollEvent = (callback, ref) => {
  const options = useMemo(() => ({ throttle: 16 }), []);
  useScrollEvent(callback, options, ref);
};

export { useContainerScrollEvent };
