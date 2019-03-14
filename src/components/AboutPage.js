import React from 'react';
import AboutPageHeader from './AboutPageHeader';
import AboutPageServices from './AboutPageServices';
import AboutPageFeatures from './AboutPageFeatures';
import AboutPageTeam from './AboutPageTeam';

const AboutPage = () => (
  <div className="about-page-wrapper">
    <AboutPageHeader />
    <AboutPageServices />
    <AboutPageFeatures />
    <AboutPageTeam />
  </div>
);

export default AboutPage;
