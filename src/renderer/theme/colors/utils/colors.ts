import { accessTheme } from '../../utils';

const colors = (path: string) => accessTheme(path, 'colors');
export { colors };
