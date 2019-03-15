import React from 'react';
import styled from 'styled-components';
import FeatureOne from '../assets/about-page/landing-page1.png';

const ServicesBreakdown = styled.div`
  max-width: 800px;
  margin: 20px auto;
  @media (max-width: 500px) {
    padding: 20px;
  }
  h2 {
    text-align: center;
  }
`;

const DetailedServices = styled.div`
  display: flex;
  flex-direction: column;
`;

const Service = styled.div`
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  .service-image {
    width: 50%;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  .service-details {
    width: 50%;
    @media (max-width: 500px) {
      width: 100%;
    }
    h2 {
      text-align: left;
      padding: 20px 0;
    }
    button {
      height: 40px;
      width: 150px;
      border-radius: 3px;
      margin: 15px 0;
      font-size: 1.6rem;
      color: #BEBEBE;
      background: none;
      border: 1px solid #E19870;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`;

const AboutPageServices = () => (
  <section className="services-wrapper">
    <ServicesBreakdown>
      <h2>Imagine reading a very exciting promise right about now.</h2>
      <DetailedServices>
        <Service>
          <div className="service-image">
            <img src={FeatureOne} alt="service" />
          </div>
          <div className="service-details">
            <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
            <p>
              Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin
              coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore
              skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.
            </p>
            <button type="button">LEARN MORE→</button>
          </div>
        </Service>

        <Service>
          <div className="service-details">
            <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
            <p>
              Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin
              coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore
              skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.
            </p>
            <button type="button">LEARN MORE→</button>
          </div>
          <img src={FeatureOne} alt="service" />
        </Service>

        <Service>
          <img src={FeatureOne} alt="service" />
          <div className="service-details">
            <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
            <p>
              Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin
              coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore
              skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.
            </p>
            <button type="button">LEARN MORE→</button>
          </div>
        </Service>

        <Service>
          <div className="service-details">
            <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
            <p>
              Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin
              coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore
              skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.
            </p>
            <button type="button">LEARN MORE→</button>
          </div>
          <img src={FeatureOne} alt="service" />
        </Service>
      </DetailedServices>
    </ServicesBreakdown>
  </section>
);

export default AboutPageServices;
