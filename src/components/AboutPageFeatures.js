import React from 'react';
import SvgIconOne from '../assets/about-page/seo-icons/seo-1.png';
import SvgIconTwo from '../assets/about-page/seo-icons/seo-2.png';
import SvgIconThree from '../assets/about-page/seo-icons/seo-3.png';
import SvgIconFour from '../assets/about-page/seo-icons/seo-4.png';
import SvgIconFive from '../assets/about-page/seo-icons/seo-5.png';
import SvgIconSix from '../assets/about-page/seo-icons/seo-6.png';

const AboutPageFeatures = () => (
  <section className="features">
    <h2>Awesome Features</h2>
    <h3>Some description to support the title</h3>
    <div className="features-details">

      <div className="features-row">
        <div className="feature">
          <img src={SvgIconOne} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </div>

        <div className="feature">
          <img src={SvgIconTwo} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </div>

        <div className="feature">
          <img src={SvgIconThree} alt="features" />
          <h3>Take pictures</h3>
          <p>
            Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </div>
      </div>


      <div className="features-row">
        <div className="feature">
          <img src={SvgIconFour} alt="features" />
          <h3>Take pictures</h3>
          <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </div>

        <div className="feature">
          <img src={SvgIconFive} alt="features" />
          <h3>Take pictures</h3>
          <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </div>

        <div className="feature">
          <img src={SvgIconSix} alt="features" />
          <h3>Take pictures</h3>
          <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical
            leggings vegan roof party sustainable.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPageFeatures;
