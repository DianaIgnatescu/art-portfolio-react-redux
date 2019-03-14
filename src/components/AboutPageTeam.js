import React from 'react';
import MemberOne from '../assets/about-page/member1.png';
import MemberTwo from '../assets/about-page/member2.jpg';
import MemberThree from '../assets/about-page/member3.jpg';
import MemberFour from '../assets/about-page/member4.jpg';
import Inc500 from '../assets/about-page/inc-500.svg';

const AboutPageTeam = () => (
  <section className="about-bottom-wrapper">
    <section className="team">
      <h2>Get to know us</h2>
      <p>Paleo authentic mlkshk, marfa keytar quinoa lyft lo-fi locavore helvetica poke hell of taxidermy. Whatever four loko affogato dreamcatcher cred banjo sartorial irony thundercats banh mi. Chartreuse single-origin coffee tumblr, kickstarter activated charcoal banh mi austin palo santo bitters waistcoat blue bottle. Glossier kitsch unicorn, VHS shabby chic microdosing man braid truffaut. Paleo fashion axe cray kale chips street art wolf, drinking vinegar quinoa tote bag taxidermy ethical.</p>
      <div className="team-members">
        <div className="member">
          <img src={MemberOne} alt="team-member" />
          <h4>Name of team member</h4>
        </div>

        <div className="member">
          <img src={MemberTwo} alt="team-member" />
          <h4>Name of team member</h4>
        </div>

        <div className="member">
          <img src={MemberThree} alt="team-member" />
          <h4>Name of team member</h4>
        </div>

        <div className="member">
          <img src={MemberFour} alt="team-member" />
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
      <button type="button">More testimonials</button>
    </section>

    <section className="company">
      <img src={Inc500} alt="inc-500-company" />
      <div>
        <h2>One of the 5,000 fastest-growing private companies in Europe</h2>
        <p>Shoreditch ugh lo-fi unicorn gastropub food truck jianbing trust fund cray williamsburg bushwick poke. Slow-carb street art humblebrag copper mug hoodie, 90's coloring book kickstarter distillery taxidermy enamel pin pabst seitan. Williamsburg yr distillery, pork belly locavore stumptown squid next level intelligentsia readymade pickled shoreditch. Brooklyn slow-carb asymmetrical vape crucifix bicycle rights fingerstache truffaut la croix synth.</p>
      </div>

    </section>
  </section>
);

export default AboutPageTeam;
