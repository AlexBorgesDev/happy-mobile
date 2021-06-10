import { combineReducers } from 'redux';

// Reducers
import sessionReducer from './session.reducer';

export default combineReducers({
  session: sessionReducer,
});
