import {
  FETCH_ALL_POSTS_SUCCESS, CREATE_POST_SUCCESS, UPDATE_POST_SUCCESS, DELETE_POST_SUCCESS,
  LIKE_POST_SUCCESS, UNLIKE_POST_SUCCESS,
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
    case LIKE_POST_SUCCESS:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return { ...post, upvotes: [...post.upvotes, action.payload.userId] };
        }
        return post;
      });
    case UNLIKE_POST_SUCCESS:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          const index = post.upvotes.indexOf(action.payload.userId);
          const newUpvotes = [...post.upvotes];
          newUpvotes.splice(index, 1);
          return { ...post, upvotes: [...newUpvotes] };
        }
        return post;
      });
    default:
      return state;
  }
};

export default posts;
