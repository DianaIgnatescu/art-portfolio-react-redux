import React from 'react';
import styled from 'styled-components';
import AboutPageHeader from './AboutPageHeader';
import AboutPageServices from './AboutPageServices';
import AboutPageFeatures from './AboutPageFeatures';
import AboutPageTeam from './AboutPageTeam';

const AboutPageWrapper = styled.div`
  padding: 80px 0;
  h1, h2, h3 {
    padding: 10px 0;
  }
  p {
    line-height: 2.6rem;
  }
`;

const AboutPage = () => (
  <AboutPageWrapper>
    <AboutPageHeader />
    <AboutPageServices />
    <AboutPageFeatures />
    <AboutPageTeam />
  </AboutPageWrapper>
);

export default AboutPage;
