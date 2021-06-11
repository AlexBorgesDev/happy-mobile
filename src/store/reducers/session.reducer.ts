import { SessionReducer, SessionState } from '../../@types/reducers';

const initState: SessionState = {
  type: 'loading',
  user: undefined,
  token: undefined,
};

const sessionReducer: SessionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SESSION_CHANGE_TYPE':
      return { ...state, type: action.payload };

    case 'SESSION_SET_USER':
      return { ...state, user: action.payload };

    case 'SESSION_SET_TOKEN':
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default sessionReducer;
