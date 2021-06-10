import React from 'react';

import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import {
  DefaultTheme,
  Provider as ThemePaperProvider,
} from 'react-native-paper';

import Navigation from './src/navigation';

import store from './src/store';
import themes from './src/themes';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.get()}>
        <ThemePaperProvider
          theme={{ ...DefaultTheme, colors: themes.getPaper() }}>
          <StatusBar translucent barStyle="light-content" />

          <Navigation />
        </ThemePaperProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
