import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Portal, Snackbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

// Actions
import sessionActions from '../store/actions/session.actions';
import snackActions from '../store/actions/snack.actions';

// Navigators
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';

const Navigation = () => {
  const sessionType = useSelector(state => state.session.type);

  const snackMessage = useSelector(state => state.snack.message);

  const handleSessionStorage = async () => {
    try {
      const sessionToken = await AsyncStorage.getItem('session_token');
      const sessionUser = await AsyncStorage.getItem('session_user');

      sessionToken && sessionActions.setToken(sessionToken);
      sessionUser && sessionActions.setUser(JSON.parse(sessionUser));
      sessionActions.setType(sessionToken ? 'logged' : 'notLogged');
    } catch (err) {
      sessionActions.setType('notLogged');
    }
  };

  useEffect(() => {
    handleSessionStorage();
  }, []);

  return (
    <>
      <NavigationContainer>
        {sessionType === 'notLogged' && <NotLoggedIn />}
        {sessionType === 'logged' && <LoggedIn />}
      </NavigationContainer>

      <Portal>
        <Snackbar
          visible={!!snackMessage}
          action={{
            label: 'Fechar',
            onPress: () => snackActions.setMessage(undefined),
          }}
          onDismiss={() => snackActions.setMessage(undefined)}>
          {snackMessage}
        </Snackbar>
      </Portal>
    </>
  );
};

export default Navigation;
