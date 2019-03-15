// === ACTION TYPES ==== //

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_ALL_POSTS_SUCCESS = 'FETCH_ALL_POSTS_SUCCESS';
export const FETCH_ALL_POSTS_FAILURE = 'FETCH_ALL_POSTS_FAILURE';

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

export const loginSuccess = (token) => {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
    },
  };
};

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

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
    const result = await fetch('http://localhost:5000/api/login', config);
    const jsonResult = await result.json();
    if (result.status === 403) {
      throw new Error(jsonResult.error);
    }
    dispatch(loginSuccess(jsonResult.token));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const fetchAllPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_POSTS });
  try {
    const result = await fetch('http://localhost:5000/api/posts');
    const jsonResult = await result.json();
    dispatch(fetchAllPostsSuccess(jsonResult));
  } catch (error) {
    dispatch(fetchAllPostsFailure(error));
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
    const result = await fetch('http://localhost:5000/api/posts', config);
    const jsonResult = await result.json();
    const newPost = {
      ...post, id: jsonResult[0], upvotes: 0, userId: 1,
    };
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
    const result = await fetch(`http://localhost:5000/api/posts/${id}`, config);
    const jsonResult = await result.json();
    if (result.ok) {
      const newPost = {
        ...updatedPost, id, upvotes: 0, userId: 0,
      };
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
    const result = await fetch(`http://localhost:5000/api/posts/${id}`, config);
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
