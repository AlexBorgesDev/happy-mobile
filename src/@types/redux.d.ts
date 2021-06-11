import store from '../store';

import { SessionState, SnackState } from './reducers';

export type AppDispatch = typeof store.dispatch;

declare module 'react-redux' {
  interface DefaultRootState {
    session: SessionState;
    snack: SnackState;
  }
}
