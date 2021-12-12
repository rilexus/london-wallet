import { ThemeType } from '../Theme.types';

const access = (
  path: string /* key.path.to.object.value */,
  object: { [key: string]: object }
): any => {
  // Gets value from object by given path.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const value = path.split('.').reduce((value, key) => value[key], object);
  if (!value) {
    // eslint-disable-next-line no-console
    console.warn(`Value is undefined for path: "${path}"!`);
  }
  return value;
};

const accessTheme = (stylePatch: string, themePath: string) => {
  return ({ theme }: { theme: ThemeType }) =>
    access(stylePatch, access(themePath, theme));
};

export { access, accessTheme };
