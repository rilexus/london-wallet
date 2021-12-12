import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useCallback,
  useState,
} from 'react';

const useInput = ({ name, initState }: { name: string; initState: any }) => {
  const [state, setState] = useState({ value: initState, key: '' });

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { value } = e.target;
      setState((p) => ({ ...p, value }));
    },
    []
  );

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { key } = e;
      setState((p) => ({ ...p, key }));
    },
    []
  );

  const register = useCallback(
    () => ({
      value: state.value,
      name,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
    }),
    [handleKeyDown, handleChange, name, state.value]
  );

  return {
    key: state.key,
    value: state.value,
    register,
  };
};
export { useInput };
