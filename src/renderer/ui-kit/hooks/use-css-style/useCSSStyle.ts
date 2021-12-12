import { CSSProperties, useMemo } from 'react';

const useCSSStyle = (style: CSSProperties, deps: any[]) => {
  // eslint-disable-next-line
  return useMemo<CSSProperties>(() => style, deps);
};
export { useCSSStyle };
