import {
  FETCH_ALL_USERS_SUCCESS, REGISTER_USER_SUCCESS, UPDATE_USER_SUCCESS, DELETE_USER_SUCCESS,
} from '../actions';

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_SUCCESS:
      return [...action.payload.users];
    case REGISTER_USER_SUCCESS:
      return [...state, { ...action.payload.newUser }];
    case UPDATE_USER_SUCCESS:
      return state.map((user) => {
        if (user.id === action.payload.updatedUser.id) {
          return { ...action.payload.updatedUser };
        }
        return user;
      });
    case DELETE_USER_SUCCESS:
      return state.filter(user => user.id !== action.payload.userId);
    default:
      return state;
  }
};

export default users;
