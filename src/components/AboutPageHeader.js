import React from 'react';
import styled from 'styled-components';
import DownloadApp from '../assets/about-page/download-app.svg';


const AboutPageHeader = () => (
  <AboutHeader>
    <div className="about-header-left">
      <h1>We are Aportfolio</h1>
      <p>
        Microdosing distillery meggings roof party, tumblr wolf cronut drinking vinegar
        tousled yuccie fixie raclette fanny pack.
        Sustainable four dollar toast austin, scenester bushwick ramps
        listicle hashtag DIY kinfolk pug.
      </p>
      <div className="cta-buttons">
        <button type="button" className="bordered">Expore our Features</button>
        <button type="button" className="filled">Download the app</button>
      </div>
    </div>
    <div className="about-header-right">
      <img src={DownloadApp} alt="download-app" />
    </div>
  </AboutHeader>
);

const AboutHeader = styled.section`
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #676D85;
  margin: 10px auto;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  .about-header-left {
    max-width: 60%;
    padding-right: 5%;
    @media (max-width: 500px) {
      max-width: 100%;
      padding: 0 20px;
    }
    .cta-buttons {
      padding: 20px 0;
    }
    button {
      height: 40px;
      width: 210px;
      margin: 10px 10px 0 0;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 1.6rem;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
      @media (max-width: 500px) {
        width: 100%;
      }
    }
    .bordered {
      color: #BEBEBE;
      background: none;
      border: 1px solid #E19870;
      
    }
    .filled {
      background: #E19870;
      height: 40px;
      border: 1px solid #E19870;
    }
  }
  .about-header-right {
    max-width: 35%;
    @media (max-width: 500px) {
      max-width: 100%;
      padding: 40px 20px;
    }
    img {
      max-width: 100%;
    }
  }
`;


export default AboutPageHeader;
