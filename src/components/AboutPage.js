import React from 'react';
import Footer from './Footer';
import DownloadApp from '../assets/about-page/download-app.svg';
import FeatureOne from '../assets/about-page/landing-page1.png';
// import FeatureTwo from '../assets/about-page/landing-page1.png';
// import FeatureThree from '../assets/about-page/landing-page1.png';
// import FeatureFour from '../assets/about-page/landing-page1.png.png';
import SvgIcon from '../assets/about-page/photo.svg';
import SvgIconOne from '../assets/about-page/seo-icons/seo-1.png';
import SvgIconTwo from '../assets/about-page/seo-icons/seo-2.png';
import SvgIconThree from '../assets/about-page/seo-icons/seo-3.png';
import SvgIconFour from '../assets/about-page/seo-icons/seo-4.png';
import SvgIconFive from '../assets/about-page/seo-icons/seo-5.png';
import SvgIconSix from '../assets/about-page/seo-icons/seo-6.png';
import MemberOne from '../assets/about-page/member1.png';
import MemberFour from '../assets/about-page/member4.jpg';
import MemberTwo from '../assets/about-page/member2.jpg';
import MemberThree from '../assets/about-page/member3.jpg';
import Inc500 from '../assets/about-page/inc-500.svg';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <section className="about-header">
        <div className="abot-header-left">
          <h1>We are Art Portolio</h1>
          <p>Microdosing distillery meggings roof party, tumblr wolf cronut drinking vinegar tousled yuccie fixie raclette fanny pack. Sustainable four dollar toast austin, scenester bushwick ramps listicle hashtag DIY kinfolk pug.</p>
          <div className="cta-buttons">
            <button className="purple">Expore our Features</button>
            <button className="orange">Download the app</button>
          </div>
        </div>
        <div className="about-header-right">
          <img src={DownloadApp} />
        </div>
      </section>

      <hr></hr>
      
      <section className="services-wrapper">
        <div className="services-breakdown">
        <h2>Imagine reading a very exciting promise right about now.</h2>
        <div className="detailed-services">
          <div className="service">
            <img src={FeatureOne} />
            <div className="service-details">
              <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
              <p>Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.</p>
              <a href="#">LEARN MORE→</a>
            </div>
          </div>

          <div className="service">
            <div className="service-details">
              <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
              <p>Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.</p>
              <a href="#">LEARN MORE→</a>
            </div>
            <img src={FeatureOne} />
            
          </div>

          <div className="service">
            <img src={FeatureOne} />
            <div className="service-details">
              <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
              <p>Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.</p>
              <a href="#">LEARN MORE→</a>
            </div>
          </div>

          <div className="service">
            <div className="service-details">
              <h2>Twee pabst gentrify literally squid pop-up woke kale chips.</h2>
              <p>Craft beer gluten-free you probably haven't heard of them keffiyeh single-origin coffee green juice hashtag blue bottle. Swag pok pok lyft, gochujang normcore skateboard subway tile man bun freegan venmo mumblecore portland crucifix franzen.</p>
              <a href="#">LEARN MORE→</a>
            </div>
            <img src={FeatureOne} />
          </div>
        </div>
        </div>
        
      </section>

      <section className="features">
        <h2>Awesome Features</h2>
        <h3>Some description to support the title</h3>
        <div className="features-details">

          <div className="features-row">
            <div className="feature">
              <img src={SvgIconOne} alt="" />
              <h3>Take pictures</h3>
              <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical leggings vegan roof party sustainable.</p>
            </div>

            <div className="feature">
              <img src={SvgIconTwo} alt="" />
              <h3>Take pictures</h3>
              <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical leggings vegan roof party sustainable.</p>
            </div>

            <div className="feature">
              <img src={SvgIconThree} alt="" />
              <h3>Take pictures</h3>
              <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical leggings vegan roof party sustainable.</p>
            </div>
          </div>
          

          <div className="features-row">
            <div className="feature">
              <img src={SvgIconFour} alt="" />
              <h3>Take pictures</h3>
              <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical leggings vegan roof party sustainable.</p>
            </div>

            <div className="feature">
              <img src={SvgIconFive} alt="" />
              <h3>Take pictures</h3>
              <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical leggings vegan roof party sustainable.</p>
            </div>

            <div className="feature">
              <img src={SvgIconSix} alt="" />
              <h3>Take pictures</h3>
              <p>Lorem ipsum dolor amet cliche actually twee four loko tattooed, gastropub asymmetrical leggings vegan roof party sustainable.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-bottom-wrapper">
      <section className="team">
        <h2>Get to know us</h2>
        <p>Paleo authentic mlkshk, marfa keytar quinoa lyft lo-fi locavore helvetica poke hell of taxidermy. Whatever four loko affogato dreamcatcher cred banjo sartorial irony thundercats banh mi. Chartreuse single-origin coffee tumblr, kickstarter activated charcoal banh mi austin palo santo bitters waistcoat blue bottle. Glossier kitsch unicorn, VHS shabby chic microdosing man braid truffaut. Paleo fashion axe cray kale chips street art wolf, drinking vinegar quinoa tote bag taxidermy ethical.</p>
        <div className="team-members">
          <div className="member">
          <img src={MemberOne} />
          <h4>Name of team member</h4>
          </div>

          <div className="member">
          <img src={MemberTwo} />
          <h4>Name of team member</h4>
          </div>

          <div className="member">
          <img src={MemberThree} />
          <h4>Name of team member</h4>
          </div>

          <div className="member">
          <img src={MemberFour} />
          <h4>Name of team member</h4>
          </div>
        </div>
        <div className="join-team">
          <p>
            Jean shorts authentic vexillologist crucifix keytar fam slow-carb. Portland wayfarers etsy, kickstarter raw denim art party la croix af. Brunch mlkshk semiotics keffiyeh kombucha venmo flannel franzen chicharrones irony ramps cornhole vexillologist PBR&B. Subway tile wayfarers health goth ennui.
          </p>
          <button className="orange careers">See Our Listings</button>
        </div>
      </section>

      <section className="testimonials">
        <img src="" alt="happy user" />
        <p>"Tumblr ennui lyft readymade leggings, polaroid seitan bushwick. Coloring book air plant pok pok live-edge lyft bicycle rights PBR&B four dollar toast yr. Meh locavore kombucha 90's listicle PBR&B schlitz hammock. Skateboard chicharrones chillwave YOLO shoreditch hoodie meh wolf bespoke. Cronut migas four loko whatever sriracha slow-carb mlkshk etsy art party photo booth."</p>
        <p>Simon Snow, photographer</p>
        <a href="#">More testimonials</a>
      </section>

      <section className="company">
        <img src={Inc500} alt="inc-500 image" />
        <div>
          <h2>One of the 5,000 fastest-growing private companies in Europe</h2>
          <p>Shoreditch ugh lo-fi unicorn gastropub food truck jianbing trust fund cray williamsburg bushwick poke. Slow-carb street art humblebrag copper mug hoodie, 90's coloring book kickstarter distillery taxidermy enamel pin pabst seitan. Williamsburg yr distillery, pork belly locavore stumptown squid next level intelligentsia readymade pickled shoreditch. Brooklyn slow-carb asymmetrical vape crucifix bicycle rights fingerstache truffaut la croix synth.</p>
        </div>
        
      </section>
      </section>
      
    </div>

  );
};

export default AboutPage;
