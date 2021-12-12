import { useState } from 'react';
import { usePress } from '../use-press';
import { PressTypesEnum } from '../use-press/usePress';

const usePressState = (ref: any) => {
  const [states, setStates] = useState<PressTypesEnum>(PressTypesEnum.idle);

  usePress((type: any) => {
    setStates(() => {
      return type;
    });
  }, ref);

  return states;
};
export { usePressState };
