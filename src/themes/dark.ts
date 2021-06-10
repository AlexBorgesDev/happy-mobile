import { DefaultTheme } from 'react-native-paper';

import { Theme } from '../@types/styled';

const dark: Theme = {
  color: '#111111',
  inverseColor: '#ffffff',

  captionColor: '#757575',

  primary: '#f4452e',
  bodyBackground: '#f5f7f9',
};

export const darkPaper: typeof DefaultTheme.colors = {
  ...DefaultTheme.colors,
  text: dark.color,
  error: '#F4442E',
  primary: dark.primary,
  surface: '#ffffff',
  background: '#ffffff',
};

export default dark;
