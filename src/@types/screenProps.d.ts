import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { NotLoggedScreens } from './navigation';

export type LoginProps = {
  route: RouteProp<NotLoggedScreens, 'login'>;
  navigation: StackNavigationProp<NotLoggedScreens, 'login'>;
};

export type RegisterProps = {
  route: RouteProp<NotLoggedScreens, 'register'>;
  navigation: StackNavigationProp<NotLoggedScreens, 'register'>;
};
