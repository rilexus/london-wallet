import { useEffect, useRef, useState } from 'react';

enum PressTypesEnum {
  idle = 'idle',
  pressstart = 'pressstart',
  press = 'press',
  pressend = 'pressend',
}

const usePress = (callback: any, ref: any): PressTypesEnum => {
  const [currentState, setCurrentState] = useState<PressTypesEnum>(
    PressTypesEnum.idle
  );

  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    callbackRef.current(currentState);
  }, [currentState, callbackRef]);

  const pressStartRef = useRef<any>();
  const pressRef = useRef<any>();
  const pressedRef = useRef<any>();

  useEffect(() => {
    const htmlElement = ref.current;
    const start = () => {
      const setStart = () => setCurrentState(PressTypesEnum.pressstart);
      const setPress = () => setCurrentState(PressTypesEnum.press);
      const setPressed = () => setCurrentState(PressTypesEnum.pressend);

      pressStartRef.current = setTimeout(() => setStart(), 150);
      pressRef.current = setTimeout(() => setPress(), 200);
      pressedRef.current = setTimeout(() => setPressed(), 700);
    };

    const abort = () => {
      clearTimeout(pressStartRef.current);
      clearTimeout(pressRef.current);
      clearTimeout(pressedRef.current);

      const setIdle = () => setCurrentState(PressTypesEnum.idle);

      setIdle();
    };
    if (htmlElement) {
      htmlElement.addEventListener('mousedown', start);
      htmlElement.addEventListener('touchstart', start);

      htmlElement.addEventListener('mouseup', abort);
      htmlElement.addEventListener('touchend', abort);
    }

    return () => {
      if (htmlElement) {
        htmlElement.removeEventListener('mousedown', start);
        htmlElement.removeEventListener('touchstart', start);

        htmlElement.removeEventListener('mouseup', abort);
        htmlElement.removeEventListener('touchend', abort);
      }
    };
  }, [ref, currentState, pressRef, pressStartRef, pressedRef]);

  return currentState;
};

export { usePress, PressTypesEnum };
