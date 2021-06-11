import { User } from './types';
import { SessionActions, SnackActions } from './actions';

export type SessionState = {
  type: 'logged' | 'notLogged' | 'loading';
  user: User | undefined;
  token: string | undefined;
};

export type SnackState = {
  message: string | undefined;
};

export type SessionReducer = (
  state: SessionState,
  action: SessionActions,
) => SessionState;

export type SnackReducer = (
  state: SnackState,
  action: SnackActions,
) => SnackState;
