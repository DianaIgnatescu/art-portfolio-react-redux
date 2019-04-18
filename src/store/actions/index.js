const DOMAIN = 'https://art-portfolio-project-back-end.herokuapp.com';
// === ACTION TYPES ==== //

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILURE = 'FETCH_ALL_USERS_FAILURE';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const FETCH_SINGLE_USER = 'FETCH_SINGLE_USER';
export const FETCH_SINGLE_USER_SUCCESS = 'FETCH_SINGLE_USER_SUCCESS';
export const FETCH_SINGLE_USER_FAILURE = 'FETCH_SINGLE_USER_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const DELETE_USER = 'DELETE_USER_FAILURE';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_ALL_POSTS_SUCCESS = 'FETCH_ALL_POSTS_SUCCESS';
export const FETCH_ALL_POSTS_FAILURE = 'FETCH_ALL_POSTS_FAILURE';

export const FETCH_POSTS_FROM_USER = 'FETCH_POSTS_FROM_USER';
export const FETCH_POSTS_FROM_USER_SUCCESS = 'FETCH_POSTS_FROM_USER_SUCCESS';
export const FETCH_POSTS_FROM_USER_FAILURE = 'FETCH_POSTS_FROM_USER_FAILURE';

export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';
export const FETCH_SINGLE_POST_FAILURE = 'FETCH_SINGLE_POST_FAILURE';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const UPDATE_POST = 'UPDATE_PHOTOS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const LIKE_POST = 'LIKE_POST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST = 'UNLIKE_POST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOGOUT = 'LOGOUT';

export const SHOW_POST_MODAL = 'SHOW_POST_MODAL';
export const HIDE_POST_MODAL = 'HIDE_POST_MODAL';

export const MAKE_POST_MODAL_EDITABLE = 'MAKE_POST_MODAL_EDITABLE';
export const MAKE_POST_MODAL_UNEDITABLE = 'MAKE_POST_MODAL_UNEDITABLE';

// Synchronous action creators

export const makePostModalEditable = () => ({
  type: MAKE_POST_MODAL_EDITABLE,
});

export const makePostModalUneditable = () => ({
  type: MAKE_POST_MODAL_UNEDITABLE,
});

export const showPostModal = id => ({
  type: SHOW_POST_MODAL,
  payload: {
    id,
  },
});

export const hidePostModal = () => ({
  type: HIDE_POST_MODAL,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginSuccess = (token, username, email, userId) => {
  const currentUser = {
    token, username, email, userId,
  };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  return {
    type: LOGIN_SUCCESS,
    payload: {
      userId,
      email,
      token,
      username,
    },
  };
};

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const fetchSingleSuccess = (user) => {
  if (!user) {
    throw new Error('fetchSingleUserSuccess requires a user argument');
  }
  return {
    type: FETCH_SINGLE_USER_SUCCESS,
    payload: {
      user,
    },
  };
};

export const fetchSingleUserFailure = (error) => {
  if (!error) {
    throw new Error('fetchSingleUserFailure requires an error argument');
  }
  return {
    type: FETCH_SINGLE_USER_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchAllUsersSuccess = (users) => {
  if (!users) {
    throw new Error('fetchAllUsersSuccess requires a users argument');
  }
  return {
    type: FETCH_ALL_USERS_SUCCESS,
    payload: {
      users,
    },
  };
};

export const fetchAllUsersFailure = (error) => {
  if (!error) {
    throw new Error('fetchAllUsersFailure requires an error argument');
  }
  return {
    type: FETCH_ALL_USERS_FAILURE,
    payload: {
      error,
    },
  };
};

export const registerUserSuccess = (newUser) => {
  if (!newUser) {
    throw new Error('registerUserSuccess requires an newUser argument');
  }
  return {
    type: REGISTER_USER_SUCCESS,
    payload: {
      newUser,
    },
  };
};

export const registerUserFailure = (error) => {
  if (!error) {
    throw new Error('registerUserFailure requires an error argument');
  }
  return {
    type: REGISTER_USER_FAILURE,
    payload: {
      error,
    },
  };
};

export const updateUserSuccess = (updatedUser) => {
  if (!updatedUser) {
    throw new Error('updateUserSuccess requires an updatedUser argument');
  }
  return {
    type: UPDATE_USER_SUCCESS,
    payload: {
      updatedUser,
    },
  };
};

export const updateUserFailure = (error) => {
  if (!error) {
    throw new Error('updateUserFailure requires an error argument');
  }
  return {
    type: UPDATE_USER_FAILURE,
    payload: {
      error,
    },
  };
};

export const deleteUserSuccess = (userId) => {
  if (!userId) {
    throw new Error('deleteUserSuccess requires a userId argument');
  }
  return {
    type: DELETE_USER_SUCCESS,
    payload: {
      userId,
    },
  };
};

export const deleteUserFailure = (error) => {
  if (!error) {
    throw new Error('deleteUserFailure requires an error argument');
  }
  return {
    type: DELETE_USER_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchAllPostsSuccess = (posts) => {
  if (!posts) {
    throw new Error('fetchAllPostsSuccess requires a posts argument');
  }
  return {
    type: FETCH_ALL_POSTS_SUCCESS,
    payload: {
      posts,
    },
  };
};

export const fetchAllPostsFailure = (error) => {
  if (!error) {
    throw new Error('fetchAllPostsFailure requires an error argument');
  }
  return {
    type: FETCH_ALL_POSTS_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchPostsFromUserSuccess = (posts) => {
  if (!posts) {
    throw new Error('fetchPostsFromUserSuccess requires a posts argument');
  }
  return {
    type: FETCH_POSTS_FROM_USER_SUCCESS,
    payload: {
      posts,
    },
  };
};

export const fetchPostsFromUserFailure = (error) => {
  if (!error) {
    throw new Error('fetchPostsFromUserFailure requires an error argument');
  }
  return {
    type: FETCH_POSTS_FROM_USER_FAILURE,
    payload: {
      error,
    },
  };
};

export const createPostSuccess = (newPost) => {
  if (!newPost) {
    throw new Error('createPostSuccess requires an newPost argument');
  }
  return {
    type: CREATE_POST_SUCCESS,
    payload: {
      newPost,
    },
  };
};

export const createPostFailure = (error) => {
  if (!error) {
    throw new Error('createPostFailure requires an error argument');
  }
  return {
    type: CREATE_POST_FAILURE,
    payload: {
      error,
    },
  };
};

export const updatePostSuccess = (updatedPost) => {
  if (!updatedPost) {
    throw new Error('updatePostSuccess requires an updatedPost argument');
  }
  return {
    type: UPDATE_POST_SUCCESS,
    payload: {
      updatedPost,
    },
  };
};

export const updatePostFailure = (error) => {
  if (!error) {
    throw new Error('updatePostFailure requires an error argument');
  }
  return {
    type: UPDATE_POST_FAILURE,
    payload: {
      error,
    },
  };
};

export const deletePostSuccess = (postId) => {
  if (!postId) {
    throw new Error('deletePostSuccess requires a postId argument');
  }
  return {
    type: DELETE_POST_SUCCESS,
    payload: {
      postId,
    },
  };
};

export const deletePostFailure = (error) => {
  if (!error) {
    throw new Error('deletePostFailure requires an error argument');
  }
  return {
    type: DELETE_POST_FAILURE,
    payload: {
      error,
    },
  };
};

export const likePostSuccess = (likedPost) => {
  if (!likedPost) {
    throw new Error('likePostSuccess requires an updatedPost argument');
  }
  return {
    type: LIKE_POST_SUCCESS,
    payload: {
      userId: Number(likedPost.userId),
      postId: Number(likedPost.postId),
    },
  };
};

export const likePostFailure = (error) => {
  if (!error) {
    throw new Error('likePostFailure requires an error argument');
  }
  return {
    type: LIKE_POST_FAILURE,
    payload: {
      error,
    },
  };
};

export const unlikePostSuccess = (unlikedPost) => {
  if (!unlikedPost) {
    throw new Error('unlikePostSuccess requires an updatedPost argument');
  }
  return {
    type: UNLIKE_POST_SUCCESS,
    payload: {
      userId: Number(unlikedPost.userId),
      postId: Number(unlikedPost.postId),
    },
  };
};

export const unlikePostFailure = (error) => {
  if (!error) {
    throw new Error('unlikePostFailure requires an error argument');
  }
  return {
    type: UNLIKE_POST_FAILURE,
    payload: {
      error,
    },
  };
};

// Asynchronous action creators

export const loginRequest = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };
  try {
    const result = await fetch(`${DOMAIN}/api/login`, config);
    const jsonResult = await result.json();
    if (result.status === 401) {
      throw new Error(jsonResult.error);
    }
    dispatch(loginSuccess(jsonResult.token, jsonResult.username,
      jsonResult.email, jsonResult.userId));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const registerUser = (username, password, email) => async (dispatch) => {
  dispatch({ type: REGISTER_USER });
  const user = {
    username: String(username),
    password: String(password),
    email: String(email),
  };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  try {
    const result = await fetch(`${DOMAIN}/api/register`, config);
    const jsonResult = await result.json();
    const newUser = jsonResult;
    if (result.ok) {
      dispatch(registerUserSuccess(newUser));
    } else {
      throw new Error(jsonResult.message);
    }
  } catch (error) {
    dispatch(registerUserFailure(error));
  }
};

export const fetchAllUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_USERS });
  try {
    const result = await fetch(`${DOMAIN}/api/users`);
    const jsonResult = await result.json();
    dispatch(fetchAllUsersSuccess(jsonResult));
  } catch (error) {
    dispatch(fetchAllUsersFailure(error));
  }
};

export const fetchSingleUser = id => async (dispatch) => {
  dispatch({ type: FETCH_ALL_USERS });
  try {
    const result = await fetch(`${DOMAIN}/api/users/:${id}`);
    const jsonResult = await result.json();
    dispatch(fetchAllUsersSuccess(jsonResult));
  } catch (error) {
    dispatch(fetchAllUsersFailure(error));
  }
};

export const fetchAllPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_POSTS });
  try {
    const result = await fetch(`${DOMAIN}/api/posts`);
    const jsonResult = await result.json();
    dispatch(fetchAllPostsSuccess(jsonResult));
  } catch (error) {
    dispatch(fetchAllPostsFailure(error));
  }
};

export const fetchPostsFromUser = userId => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_FROM_USER });
  try {
    const result = await fetch(`${DOMAIN}/api/posts/?userId=${userId}`);
    const jsonResult = await result.json();
    dispatch(fetchPostsFromUserSuccess(jsonResult));
  } catch (error) {
    dispatch(fetchPostsFromUserFailure(error));
  }
};

export const createPost = (postName, imageUrl, description) => async (dispatch, getState) => {
  dispatch({ type: CREATE_POST });
  const post = {
    postName: String(postName),
    imageUrl: String(imageUrl),
    description: String(description),
  };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: getState().authToken,
    },
    body: JSON.stringify(post),
  };
  try {
    const result = await fetch(`${DOMAIN}/api/posts`, config);
    const jsonResult = await result.json();
    const newPost = { ...jsonResult };
    if (result.ok) {
      dispatch(createPostSuccess(newPost));
    } else {
      throw new Error(jsonResult.message);
    }
  } catch (error) {
    dispatch(createPostFailure(error.message));
  }
};

export const updatePost = (id, postName, imageUrl, description) => async (dispatch, getState) => {
  dispatch({ type: 'UPDATE_POST' });
  const updatedPost = {
    postName: String(postName),
    imageUrl: String(imageUrl),
    description: String(description),
  };
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: getState().authToken,
    },
    body: JSON.stringify(updatedPost),
  };
  try {
    const result = await fetch(`${DOMAIN}/api/posts/${id}`, config);
    const jsonResult = await result.json();
    if (result.ok) {
      const newPost = { ...jsonResult };
      dispatch(updatePostSuccess(newPost));
    } else {
      throw new Error(jsonResult.message);
    }
  } catch (error) {
    dispatch(updatePostFailure(error.message));
  }
};

export const deletePost = id => async (dispatch, getState) => {
  dispatch({ type: DELETE_POST });
  const config = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: getState().authToken,
    },
  };
  try {
    const result = await fetch(`${DOMAIN}/api/posts/${id}`, config);
    const jsonResult = await result.json();
    if (result.ok) {
      dispatch(deletePostSuccess(id));
    } else {
      throw new Error(jsonResult.message);
    }
  } catch (error) {
    dispatch(deletePostFailure(error));
  }
};

export const likePost = (postId, userId) => async (dispatch, getState) => {
  dispatch({ type: 'LIKE_POST' });
  const likedPost = { postId, userId };
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: getState().authToken,
    },
    body: JSON.stringify(likedPost),
  };
  try {
    const result = await fetch(`${DOMAIN}/api/posts/upvote/${postId}`, config);
    const jsonResult = await result.json();
    if (result.ok) {
      dispatch(likePostSuccess(jsonResult));
    } else {
      throw new Error(jsonResult.message);
    }
  } catch (error) {
    dispatch(likePostFailure(error));
  }
};

export const unlikePost = (postId, userId) => async (dispatch, getState) => {
  dispatch({ type: 'UNLIKE_POST' });
  const unlikedPost = { postId, userId };
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: getState().authToken,
    },
    body: JSON.stringify(unlikedPost),
  };
  try {
    const result = await fetch(`${DOMAIN}/api/posts/downvote/${postId}`, config);
    const jsonResult = await result.json();
    if (result.ok) {
      dispatch(unlikePostSuccess(jsonResult));
    } else {
      throw new Error(jsonResult.message);
    }
  } catch (error) {
    dispatch(unlikePostFailure(error));
  }
};
