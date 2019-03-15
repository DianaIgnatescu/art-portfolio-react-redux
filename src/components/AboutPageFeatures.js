import React from 'react';
import styled from 'styled-components';
import SvgIconOne from '../assets/about-page/seo-icons/seo-1.png';
import SvgIconTwo from '../assets/about-page/seo-icons/seo-2.png';
import SvgIconThree from '../assets/about-page/seo-icons/seo-3.png';
import SvgIconFour from '../assets/about-page/seo-icons/seo-4.png';
import SvgIconFive from '../assets/about-page/seo-icons/seo-5.png';
import SvgIconSix from '../assets/about-page/seo-icons/seo-6.png';


const Features = styled.section`
  text-align: center;
  padding: 20px 0;
  background: #F1F1F1;
  h2, h3 {
    color: #3D3A4F;
  }
`;

const FeaturesDetails = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

const FeaturesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Feature = styled.div`
  max-width: 30%;
  padding: 30px 0;
  img {
    max-width: 100px;
    padding: 20px;
  }
  h3 {
    font-weight: bold;
  }
  p {
    color: #3D3A4F;
    text-align: left;
    padding-top: 15px;
  }
  @media(max-width: 500px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const AboutPageFeatures = () => (
  <Features>
    <h2>Awesome Features</h2>
    <h3>Some description to support the title</h3>
    <FeaturesDetails>
      <FeaturesRow>
        <Feature>
          <img src={SvgIconOne} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </Feature>

        <Feature>
          <img src={SvgIconTwo} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </Feature>

        <Feature>
          <img src={SvgIconThree} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </Feature>
      </FeaturesRow>

      <FeaturesRow>
        <Feature>
          <img src={SvgIconFour} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </Feature>

        <Feature>
          <img src={SvgIconFive} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </Feature>

        <Feature>
          <img src={SvgIconSix} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </Feature>
      </FeaturesRow>
    </FeaturesDetails>
  </Features>
);

export default AboutPageFeatures;
