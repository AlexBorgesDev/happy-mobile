import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import { createStackNavigator } from '@react-navigation/stack';

// Types
import { LoggedInScreens } from '../@types/navigation';

// Screens
import Home from '../screens/Home';
import NewPost from '../screens/NewPost';

const { Navigator, Screen } = createStackNavigator<LoggedInScreens>();

const LoggedIn = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Navigator initialRouteName="home" headerMode="none">
      <Screen name="home" component={Home} />

      <Screen name="newPost" component={NewPost} />
    </Navigator>
  );
};

export default LoggedIn;
