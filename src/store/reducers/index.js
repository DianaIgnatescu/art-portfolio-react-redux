import { combineReducers } from 'redux';
import posts from './posts';
import authToken from './authToken';
import shownPostModal from './shownPostModal';

export default combineReducers({
  posts, authToken, shownPostModal,
});
