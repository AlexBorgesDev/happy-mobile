/**
 * @format
 */

import 'react-native-gesture-handler';
import 'moment/locale/pt-br';

import moment from 'moment';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import App from './App';

moment.locale('pt-br');
AppRegistry.registerComponent(appName, () => App);
