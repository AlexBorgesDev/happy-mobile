import { DefaultTheme } from 'react-native-paper';

const light = {
  color: '#111111',
  inverseColor: '#ffffff',

  captionColor: '#757575',

  primary: '#f4452e',
  bodyBackground: '#f5f7f9',
};

export const lightPaper: typeof DefaultTheme.colors = {
  ...DefaultTheme.colors,
  text: light.color,
  error: '#F4442E',
  primary: light.primary,
  surface: '#ffffff',
  background: '#ffffff',
  placeholder: '#303030',
};

export default light;
