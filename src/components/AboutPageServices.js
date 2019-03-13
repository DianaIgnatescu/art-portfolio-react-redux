import React from 'react';
import FeatureOne from '../assets/about-page/landing-page1.png';

const AboutPageServices = () => (
  <section className="services-wrapper">
    <div className="services-breakdown">
      <h2>Imagine reading a very exciting promise right about now.</h2>
      <div className="detailed-services">
        <div className="service">
          <img src={FeatureOne} alt="service" />
          <div className="service-details">
            <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
            <p>Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.</p>
            <button>LEARN MORE→</button>
          </div>
        </div>

        <div className="service">
          <div className="service-details">
            <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
            <p>Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.</p>
            <button>LEARN MORE→</button>
          </div>
          <img src={FeatureOne} alt="service" />

        </div>

        <div className="service">
          <img src={FeatureOne} alt="service" />
          <div className="service-details">
            <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
            <p>Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.</p>
            <button>LEARN MORE→</button>
          </div>
        </div>

        <div className="service">
          <div className="service-details">
            <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
            <p>Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.</p>
            <button>LEARN MORE→</button>
          </div>
          <img src={FeatureOne} alt="service" />
        </div>
      </div>
    </div>

  </section>
);

export default AboutPageServices;
