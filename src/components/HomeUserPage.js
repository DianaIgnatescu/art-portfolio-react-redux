import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PostsList from './PostsList';
import HomeImage from '../assets/illustrations/undraw_home.svg';
// import { fetchAllPosts } from '../store/actions';

const HomePageWrapper = styled.div`
  // @media (max-width: 500px) {
  //   display: flex;
  //   flex-direction: column;
  // }
`;

const HomePageHeader = styled.section`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 150px 0 30px;
  @media (max-width: 500px) {
    flex-direction: column;
    max-width: 100%;
    margin: 0 15px; 
  }
  .header-left {
    max-width: 50%;
    margin-right: 20px;
    @media (max-width: 500px) {
      max-width: 100%;
      margin: 0;
    }
    h2 {
      padding: 15px 0;
    }
    p {
      line-height: 2.8rem;
      padding-bottom: 20px;
    }
    button {
      width: 150px;
      font-family: 'Roboto', sans-serif;
      border: none;
      padding: 10px 15px;
      border-radius: 3px;
      font-size: 1.8rem;
      color: #202330;
      font-size: 1.6rem;
      background: #E19870;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
  .header-right {
     align-items: center;
     max-width: 40%;
     @media (max-width: 500px) {
      max-width: 100%;
      padding-top: 40px;
     }
  }
`;

const HeaderIllustration = styled.img`
  max-width: 100%;
`;

const UserPostsList = styled.div`
  @media (max-width: 500px) {
    margin: 20px;
  }
`;

const HomePageBottomContent = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 60px;
  h2 {
    padding: 60px 0 20px;
  }
  .cta {
    padding-bottom: 60px;
    border-bottom: 1px solid #676D85;
    h2 {
      padding: 20px 0;
    }
    button {
      width: 150px;
      font-family: 'Roboto', sans-serif;
      border: none;
      padding: 10px 15px;
      border-radius: 3px;
      font-size: 1.8rem;
      color: #202330;
      font-size: 1.6rem;
      background: #E19870;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
    
  }
  .download-buttons {
    display: flex;
    padding-top: 15px;
    @media (max-width: 500px) {
      flex-direction: column;
      margin: 0;
    }
    button {
      margin: 10px;
      width: 250px;
      font-family: 'Roboto', sans-serif;
      border: none;
      padding: 10px 15px;
      border-radius: 3px;
      font-size: 1.8rem;
      @media (max-width: 500px) {
        width: 350px;
      }
      i {
        padding-right: 7px;
        font-size: 2.2rem;
      }
    }
    .filled {
      color: #202330;
      font-size: 1.6rem;
      background: #E19870;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
    .border {
      border: 2px solid #E19870;
      background: none;
      color: #BEBEBE;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
  
  
`;

const HomeUserPage = (props) => {
  const {
    posts, fetchAllPosts, showPostModal, deletePost, updatePost, hidePostModal, shownPostModal,
    loggedIn, isEditable, makePostModalEditable, makePostModalUneditable,
  } = props;
  return (
    <HomePageWrapper>
      <HomePageHeader>
        <div className="header-left">
          <h2>Discover the world's top creatives</h2>
          <p>
            Art Portolio is amet everyday carry humblebreg street art keffiyeh 90's tacos poutine
            bitters drinking vinegar slow-carb subway tile echo park vaporware ethical. Quinoa viral
            gluten-free kinfolk ramps chillwave.
          </p>
          <button type="button">SIGN UP</button>
        </div>
        <div className="header-right">
          <HeaderIllustration src={HomeImage} alt="undraw-illustration" />
        </div>
      </HomePageHeader>

      <UserPostsList>
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
      </UserPostsList>

      <HomePageBottomContent>

        <div className="cta">
          <h2>Sign up to see more</h2>
          <button type="button">SIGN UP</button>
        </div>
        <h2>Download the App</h2>
        <h3>Our app is available for download so give it a try</h3>
        <div className="download-buttons">
          <button type="button" className="filled">
            <i className="fab fa-apple" />
            For iOS
          </button>
          <button type="button" className="border">
            <i className="fab fa-google-play" />
            For Android
          </button>
        </div>
      </HomePageBottomContent>

    </HomePageWrapper>
  );
};

HomeUserPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchAllPosts: PropTypes.func.isRequired,
  showPostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  // isEditable: PropTypes.bool.isRequired,
  // makePostModalEditable: PropTypes.func.isRequired,
  // makePostModalUneditable: PropTypes.func.isRequired,
};

export default HomeUserPage;
