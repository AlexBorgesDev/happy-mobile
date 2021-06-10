import store from '..';

import { AppDispatch } from '../../@types/redux';
import { SessionState } from '../../@types/reducers';

class SessionActions {
  private readonly dispatch: AppDispatch;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  setType = (type: SessionState['type']) =>
    this.dispatch({ type: 'SESSION_CHANGE_TYPE', payload: type });
}

export default new SessionActions(store.dispatch);
