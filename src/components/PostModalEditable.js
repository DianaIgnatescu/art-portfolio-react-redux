import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const handleClick = hidePostModal => () => hidePostModal();

const handleEditClick = makePostModalEditable => (event) => {
  event.preventDefault();
  makePostModalEditable();
};

const handleDeleteClick = (id, deletePost) => (event) => {
  event.preventDefault();
  console.log(id);
  deletePost(id);
};

const handleSave = (id, updatePost) => (event) => {
  event.preventDefault();
  let postName = '';
  let imageUrl = '';
  let description = '';
  event.target.parentNode.parentNode.childNodes.forEach((childNode) => {
    if (childNode.name === 'postName') {
      postName = childNode.value;
    } else if (childNode.name === 'imageUrl') {
      imageUrl = childNode.value;
    } else if (childNode.name === 'description') {
      description = childNode.value;
    }
  });
  if (postName || description || imageUrl) {
    updatePost(id, postName, imageUrl, description);
  }
};

const PostModalEditable = (props) => {
  const {
    shownPostModal, posts, hidePostModal, deletePost, isEditable, makePostModalEditable, updatePost,
  } = props;
  if (!isEditable) {
    const post = posts.find(aPost => aPost.id === shownPostModal);
    return (
      <div className="post-modal-container">
        I am a post modal.
        <button type="button" onClick={handleClick(hidePostModal)}>X</button>
        <div className="image-container">
          <img src={post.imageUrl} alt="cannot display post" />
        </div>

        <p>
          {post.upvotes}
          {' '}
          Likes
        </p>
        <div className="post-action-buttons">
          <button type="button" className="delete" onClick={handleDeleteClick(shownPostModal, deletePost)}>DELETE</button>
          <button type="button" className="edit" onClick={handleEditClick(makePostModalEditable)}>EDIT</button>
        </div>
        <p>{post.postName}</p>
        <p>{post.description}</p>
      </div>
    );
  }
  if (isEditable) {
    const post = posts.find(aPost => aPost.id === shownPostModal);
    return (
      <div className="post-modal-container">
        I am a post modal.
        <button type="button" onClick={handleClick(hidePostModal)}>X</button>
        <form>
          <input name="imageUrl" placeholder={post.imageUrl} />
          <input name="postName" placeholder={post.postName} />
          <input name="description" placeholder={post.description} />
          <div className="post-action-buttons">
            <button type="button" className="delete" onClick={handleDeleteClick(shownPostModal, deletePost)}>DELETE</button>
            <button type="button" className="edit" onClick={handleSave(shownPostModal, updatePost)}>SAVE</button>
          </div>
        </form>
        <p>
          {post.upvotes}
          {' '}
          Likes
        </p>

        <p>{post.postName}</p>
        <p>{post.description}</p>
      </div>
    );
  }
};

PostModalEditable.propTypes = {
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  // imageUrl: PropTypes.string.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  makePostModalEditable: PropTypes.func.isRequired,
  makePostModalUneditable: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
};

export default PostModalEditable;
