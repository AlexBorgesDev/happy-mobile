import { SessionActions } from './actitons';

export type SessionState = {
  type: 'logged' | 'notLogged' | 'loading';
};

export type SessionReducer = (
  state: SessionState,
  action: SessionActions,
) => SessionState;
