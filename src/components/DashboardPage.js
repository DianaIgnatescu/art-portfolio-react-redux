import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import UserProfile from '../assets/artist.png';
import PostsList from './PostsList';

const handleClick = createPost => (event) => {
  event.preventDefault();
  let title = '';
  let description = '';
  let imageUrl = '';
  event.target.parentNode.childNodes.forEach((childNode) => {
    if (childNode.name === 'title') {
      title = childNode.value;
    } else if (childNode.name === 'description') {
      description = childNode.value;
    } else if (childNode.name === 'imageUrl') {
      imageUrl = childNode.value;
    }
  });
  if (title && description && imageUrl) {
    createPost(title, imageUrl, description);
    event.target.parentNode.childNodes.forEach((childNode) => {
      // eslint-disable-next-line no-param-reassign
      childNode.value = '';
    });
  }
};

const DashboardPage = (props) => {
  const {
    posts, fetchAllPosts, showPostModal, deletePost, updatePost, shownPostModal, hidePostModal,
    createPost, isEditable, makePostModalEditable, makePostModalUneditable,
  } = props;

  return (
    <div className="dashboard-wrapper">
      <div className="user-info">
        <img src={UserProfile} alt="user" />
        <h3>User name</h3>
        <p>Some description blah blah blah blah blah blah blah blah</p>
        <p>Number of Followers</p>
        <button type="button">Follow</button>
        <p>Elsewhere:</p>
        <p>Instagram</p>
        <p>Website</p>
        <p>Twitter</p>
      </div>
      <div className="user-actions">
        <div className="create-post">
          <h4>Share your work</h4>
          <form>
            <input name="title" type="text" placeholder="Title your post..." />
            <input name="imageUrl" type="text" placeholder="Insert image..." />
            <input name="description" type="text" placeholder="Add a description..." />
            <button type="button" onClick={handleClick(createPost)}>Share Post</button>
          </form>
        </div>
        <div className="artist-post-list">
          <PostsList
            posts={posts}
            fetchAllPosts={fetchAllPosts}
            showPostModal={showPostModal}
            hidePostModal={hidePostModal}
            deletePost={deletePost}
            updatePost={updatePost}
            shownPostModal={shownPostModal}
            isEditable={isEditable}
            makePostModalEditable={makePostModalEditable}
            makePostModalUneditable={makePostModalUneditable}
          />
        </div>
      </div>
    </div>
  );
};

DashboardPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchAllPosts: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  showPostModal: PropTypes.func.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  isEditable: PropTypes.bool.isRequired,
  makePostModalEditable: PropTypes.func.isRequired,
  makePostModalUneditable: PropTypes.func.isRequired,
};

export default DashboardPage;
