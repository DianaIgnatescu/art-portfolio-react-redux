import { combineReducers } from 'redux';
import posts from './posts';
import authToken from './authToken';
import shownPostModal from './shownPostModal';
import currentUser from './currentUser';

export default combineReducers({
  posts, authToken, shownPostModal, currentUser,
});
