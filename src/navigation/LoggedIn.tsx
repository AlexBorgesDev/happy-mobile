import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import { createStackNavigator } from '@react-navigation/stack';

// Types
import { LoggedInScreens } from '../@types/navigation';

// Screens
import Home from '../screens/Home';
import Comments from '../screens/Comments';
import EditProfile from '../screens/EditProfile';
import UserPosts from '../screens/UserPosts';
import UserSavedPosts from '../screens/UserSavedPosts';

const { Navigator, Screen } = createStackNavigator<LoggedInScreens>();

const LoggedIn = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Navigator initialRouteName="home" headerMode="none">
      <Screen name="home" component={Home} />

      <Screen name="comments" component={Comments} />

      <Screen name="editProfile" component={EditProfile} />

      <Screen name="userPosts" component={UserPosts} />

      <Screen name="userSavedPosts" component={UserSavedPosts} />
    </Navigator>
  );
};

export default LoggedIn;
