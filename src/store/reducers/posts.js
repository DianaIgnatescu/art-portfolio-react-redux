import {
  FETCH_ALL_POSTS_SUCCESS, CREATE_POST_SUCCESS, UPDATE_POST_SUCCESS, DELETE_POST_SUCCESS,
} from '../actions';

const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return [...action.payload.posts];
    case CREATE_POST_SUCCESS:
      return [...state, { ...action.payload.newPost }];
    case UPDATE_POST_SUCCESS:
      return state.map((post) => {
        if (post.id === action.payload.updatedPost.id) {
          return { ...action.payload.updatedPost };
        }
        return post;
      });
    case DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== action.payload.postId);
    default:
      return state;
  }
};

export default posts;
