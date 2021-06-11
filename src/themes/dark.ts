import { DefaultTheme } from 'react-native-paper';

import { Theme } from '../@types/styled';

const dark: Theme = {
  color: '#ffffff',
  inverseColor: '#ffffff',

  captionColor: '#808080',

  primary: '#f4452e',
  bodyBackground: '#0F0F0F',

  shimmer: ['#1B1B1F', '#212126', '#1B1B1F'],
};

export const darkPaper: typeof DefaultTheme.colors = {
  ...DefaultTheme.colors,
  text: dark.color,
  error: '#F4442E',
  primary: dark.primary,
  surface: '#808080',
  background: '#121213',
  placeholder: '#808080',
};

export default dark;
