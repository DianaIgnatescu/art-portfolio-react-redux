import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PostsList from './PostsList';
import HomeImage from '../assets/illustrations/undraw_home.svg';
// import { fetchAllPosts } from '../store/actions';

const HomePage = (props) => {
  const { posts, fetchAllPosts } = props;
  return (
    <div className="home-page-wrapper">
      <section className="home-page-header">
        <div className="header-left">
          <h2>Discover the world's top creatives</h2>
          <p>
          Art Portolio is amet everyday carry humblebreg street art keffiyeh 90's tacos poutine bitters drinking vinegar slow-carb subway tile echo park vaporware ethical. Quinoa viral gluten-free kinfolk ramps chillwave.
          </p>
          <button type="button" className="orange">SIGN UP</button>
        </div>
        <div className="header-right">
          <img src={HomeImage} alt="undraw-illustration" />
        </div>
      </section>

      <PostsList posts={posts} fetchAllPosts={fetchAllPosts} />

      <section className="home-page-bottom-content">
        <h2>Download the App</h2>
        <h3>Our app is available for download so give it a try</h3>
        <div className="download-buttons">
          <button type="button">For iOS</button>
          <button type="button">For Android</button>
        </div>
      </section>
      
    </div>
  );
};

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchAllPosts: PropTypes.func.isRequired,
};

export default HomePage;
