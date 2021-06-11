import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import { createStackNavigator } from '@react-navigation/stack';

// Types
import { NotLoggedScreens } from '../@types/navigation';

// Pages
import Login from '../screens/Login';
import Register from '../screens/Register';

const { Navigator, Screen } = createStackNavigator<NotLoggedScreens>();

const NotLoggedIn = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Navigator initialRouteName="login" headerMode="none">
      <Screen name="login" component={Login} />

      <Screen name="register" component={Register} />
    </Navigator>
  );
};

export default NotLoggedIn;
