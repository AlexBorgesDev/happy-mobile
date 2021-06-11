import store from '..';

import { SnackState } from '../../@types/reducers';
import { AppDispatch } from '../../@types/redux';

class SnackActions {
  private readonly dispatch: AppDispatch;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  setMessage = (message: SnackState['message']) =>
    this.dispatch({ type: 'SNACK_SET_MESSAGE', payload: message });
}

export default new SnackActions(store.dispatch);
