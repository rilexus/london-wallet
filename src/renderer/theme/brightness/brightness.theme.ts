import { accessTheme } from '../utils';

const brightnessTheme = {
  0: 0,
  50: 0.5,
  75: 0.75,
  90: 0.9,
  95: 0.95,
  100: 1,
  105: 1.05,
  110: 1.1,
  125: 1.25,
  150: 1.5,
  200: 2,
};

const brightness = (path: string) => accessTheme(path, 'brightness');
export { brightness, brightnessTheme };
