import { combineReducers } from 'redux';
import posts from './posts';
import authToken from './authToken';

export default combineReducers({
  posts, authToken,
});
