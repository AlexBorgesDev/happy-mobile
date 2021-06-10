import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

// Actions
import sessionActions from '../store/actions/session.actions';

// Navigators
import NotLoggedIn from './NotLoggedIn';

const Navigation = () => {
  const sessionType = useSelector(state => state.session.type);

  const handleSessionStorage = async () => {
    try {
      const sessionToken = await AsyncStorage.getItem('session_token');

      sessionActions.setType(sessionToken ? 'logged' : 'notLogged');
    } catch (err) {
      sessionActions.setType('notLogged');
    }
  };

  useEffect(() => {
    handleSessionStorage();
  }, []);

  return (
    <NavigationContainer>
      {sessionType === 'notLogged' && <NotLoggedIn />}
    </NavigationContainer>
  );
};

export default Navigation;
