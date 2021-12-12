import { useTheme } from 'styled-components';
import { useMemo } from 'react';
import { colors } from '../../utils';
import { ThemeI } from '../../../Theme.types';

const useColors = (path: string) => {
  const theme = useTheme() as ThemeI;
  return useMemo(() => colors(path)({ theme }), [theme, path]);
};
export { useColors };
