import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PostsList from './PostsList';
import HomeArtistProfilePanel from './HomeArtistProfilePanel';
import HomeArtistCreatePost from './HomeArtistCreatePost';

const HomeArtistPageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  padding: 80px 0 30px;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const UserActions = styled.div`
  max-width: 70%;
  @media (max-width: 500px) {
    max-width: 100%;
    margin: 15px;
  }
`;

const HomeArtistPage = (props) => {
  const {
    posts, fetchAllPosts, showPostModal, deletePost, updatePost, shownPostModal, hidePostModal,
    createPost, isEditable, makePostModalEditable, makePostModalUneditable, loggedIn,
  } = props;

  return (
    <HomeArtistPageWrapper>
      <HomeArtistProfilePanel />
      <UserActions>
        <HomeArtistCreatePost createPost={createPost} />
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
            loggedIn={loggedIn}
          />
        </div>
      </UserActions>
    </HomeArtistPageWrapper>
  );
};

HomeArtistPage.propTypes = {
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

export default HomeArtistPage;
