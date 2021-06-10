import { SessionState } from './reducers';

// Session Actions

interface SessionChangeType {
  type: 'SESSION_CHANGE_TYPE';
  payload: SessionState['type'];
}

export type SessionActions = SessionChangeType;
