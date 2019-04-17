import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Post from './Post';
import PostModal from './PostModal';

const PostsListWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const PostListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 0;
  @media (max-width: 500px) {
    display: column;
  }
`;


const PostsList = (props) => {
  const {
    posts, deletePost, updatePost, showPostModal, shownPostModal, hidePostModal, isEditable,
    makePostModalEditable, makePostModalUneditable, loggedIn,
  } = props;
  return (
    <PostsListWrapper>
      <PostListContainer>
        <PostModal
          isEditable={isEditable}
          posts={posts}
          shownPostModal={shownPostModal}
          hidePostModal={hidePostModal}
          deletePost={deletePost}
          updatePost={updatePost}
          makePostModalEditable={makePostModalEditable}
          makePostModalUneditable={makePostModalUneditable}
          loggedIn={loggedIn}
        />
        {posts.map(post => (
          <Post
            id={post.id}
            key={post.id}
            imageUrl={post.imageUrl}
            upvotes={post.upvotes.length}
            userId={post.userId}
            description={post.description}
            postName={post.postName}
            deletePost={deletePost}
            updatePost={updatePost}
            showPostModal={showPostModal}
            shownPostModal={shownPostModal}
          />
        ))}
      </PostListContainer>
    </PostsListWrapper>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showPostModal: PropTypes.func.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  isEditable: PropTypes.bool.isRequired,
  makePostModalEditable: PropTypes.func.isRequired,
  makePostModalUneditable: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default PostsList;
