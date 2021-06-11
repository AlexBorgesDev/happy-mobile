import { SnackReducer, SnackState } from '../../@types/reducers';

const initState: SnackState = {
  message: undefined,
};

const snackReducer: SnackReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SNACK_SET_MESSAGE':
      return { ...state, message: action.payload };

    default:
      return state;
  }
};

export default snackReducer;
