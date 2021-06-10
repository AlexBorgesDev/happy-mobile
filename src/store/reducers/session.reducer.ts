import { SessionReducer, SessionState } from '../../@types/reducers';

const initState: SessionState = {
  type: 'loading',
};

const sessionReducer: SessionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SESSION_CHANGE_TYPE':
      return { ...state, type: action.payload };

    default:
      return state;
  }
};

export default sessionReducer;
