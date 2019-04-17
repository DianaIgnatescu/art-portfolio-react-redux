import { LOGIN_SUCCESS, LOGOUT } from '../actions';

const initialState = { username: '', email: '', userId: null };

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        username: action.payload.username,
        email: action.payload.email,
        userId: action.payload.userId,
      };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default currentUser;
