import React from 'react';
import DownloadApp from '../assets/about-page/download-app.svg';

const AboutPageHeader = () => (
  <section className="about-header">
    <div className="about-header-left">
      <h1>We are Art Portolio</h1>
      <p>Microdosing distillery meggings roof party, tumblr wolf cronut drinking vinegar tousled yuccie fixie raclette fanny pack. Sustainable four dollar toast austin, scenester bushwick ramps listicle hashtag DIY kinfolk pug.</p>
      <div className="cta-buttons">
        <button className="purple">Expore our Features</button>
        <button className="orange">Download the app</button>
      </div>
    </div>
    <div className="about-header-right">
      <img src={DownloadApp} alt="download-app" />
    </div>
  </section>
);

export default AboutPageHeader;
