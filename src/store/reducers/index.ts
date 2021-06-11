import { combineReducers } from 'redux';

// Reducers
import sessionReducer from './session.reducer';
import snackReducer from './snack.reducer';

export default combineReducers({
  session: sessionReducer,
  snack: snackReducer,
});
