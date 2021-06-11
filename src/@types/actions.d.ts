import { User } from './types';
import { SessionState } from './reducers';

// Session Actions

interface SessionChangeType {
  type: 'SESSION_CHANGE_TYPE';
  payload: SessionState['type'];
}

interface SessionSetUser {
  type: 'SESSION_SET_USER';
  payload: User | undefined;
}

interface SessionSetToken {
  type: 'SESSION_SET_TOKEN';
  payload: string | undefined;
}

export type SessionActions =
  | SessionChangeType
  | SessionSetUser
  | SessionSetToken;

// Snack Actions

interface SnackSetMessage {
  type: 'SNACK_SET_MESSAGE';
  payload: string | undefined;
}

export type SnackActions = SnackSetMessage;
