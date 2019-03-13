import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PostModalEditable from './PostModalEditable';
import PostModalUneditable from './PostModalUneditable';

const PostModal = (props) => {
  const {
    shownPostModal, posts, hidePostModal, deletePost, isEditable, makePostModalEditable,
    makePostModalUneditable, updatePost, loggedIn,
  } = props;

  if (loggedIn && shownPostModal) {
    return (
      <PostModalEditable
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
    );
  }
  if (shownPostModal) {
    return (
      <PostModalUneditable
        posts={posts}
        shownPostModal={shownPostModal}
        hidePostModal={hidePostModal}
      />
    );
  }
  return null;
};

//   if (shownPostModal && !isEditable) {
//     const post = posts.find(aPost => aPost.id === shownPostModal);
//     console.log(post);
//     return (
//       <div className="post-modal-container">
// I am a post modal.
//         <button type="button" onClick={handleClick(hidePostModal)}>X</button>
//         <img src={post.imageUrl} alt="cannot display post" />
//         <p>
//           {post.upvotes}
//           {' '}
// Likes
//         </p>
//         <div className="post-action-buttons">
//           <button type="button" className="delete" onClick={handleDeleteClick(shownPostModal, deletePost, hidePostModal)}>DELETE</button>
//           <button type="button" className="edit" onClick={handleEditClick(makePostModalEditable)}>EDIT</button>
//         </div>
//         <p>{post.postName}</p>
//         <p>{post.description}</p>
//       </div>
//     );
//   }
//   if (shownPostModal && isEditable) {
//     const post = posts.find(aPost => aPost.id === shownPostModal);
//     return (
//       <div className="post-modal-container">
//         I am a post modal.
//         <button type="button" onClick={handleClick(hidePostModal)}>X</button>
//         <form>
//           <input name="imageUrl" placeholder={post.imageUrl} />
//           <input name="postName" placeholder={post.postName} />
//           <input name="description" placeholder={post.description} />
//           <div className="post-action-buttons">
//             <button type="button" className="delete" onClick={handleDeleteClick(shownPostModal, deletePost, hidePostModal)}>DELETE</button>
//             <button type="button" className="edit" onClick={handleSave(shownPostModal, updatePost)}>SAVE</button>
//           </div>
//         </form>
//         <p>
//           {post.upvotes}
//           {' '}
// Likes
//         </p>
//
//         <p>{post.postName}</p>
//         <p>{post.description}</p>
//       </div>
//     );
//   }
//   if (shownPostModal & !loggedIn) {
//     const post = posts.find(aPost => aPost.id === shownPostModal);
//     return (
//       <div className="post-modal-container">
//         I am a post modal.
//         <button type="button" onClick={handleClick(hidePostModal)}>X</button>
//         <img src={post.imageUrl} alt="cannot display post" />
//         <p>
//           {post.upvotes}
//           {' '}
//           Likes
//         </p>
//         {/*<div className="post-action-buttons">*/}
//           {/*<button type="button" className="delete" onClick={handleDeleteClick(shownPostModal, deletePost, hidePostModal)}>DELETE</button>*/}
//           {/*<button type="button" className="edit" onClick={handleEditClick(makePostModalEditable)}>EDIT</button>*/}
//         {/*</div>*/}
//         <p>{post.postName}</p>
//         <p>{post.description}</p>
//       </div>
//     )
//   }
//   return null;
// };

PostModal.propTypes = {
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
  loggedIn: PropTypes.bool.isRequired,
};

export default PostModal;
