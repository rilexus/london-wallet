import { colorsTheme } from '../colors';
import { accessTheme } from '../utils';

const backgroundColorTheme = colorsTheme;

const backgroundColor = (path: string) => accessTheme(path, 'backgroundColor');
export { backgroundColorTheme, backgroundColor };
