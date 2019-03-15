import React from 'react';
import styled from 'styled-components';
import MemberOne from '../assets/about-page/member1.png';
import MemberTwo from '../assets/about-page/member2.png';
import MemberThree from '../assets/about-page/member3.jpg';
import MemberFour from '../assets/about-page/member4.jpg';
import Inc500 from '../assets/about-page/inc-500.svg';

const Team = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex; 
  flex-direction: column;
  @media(max-width:500px) {
    padding: 20px;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 0;
  @media(max-width: 500px) {
    flex-direction: column;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width:100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px 0;
  }
`;

const JoinTeam = styled.div`
  text-align: center;
  padding: 30px 0;
`;

const Testimonials = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0;
  font-style: italic;
  @media(max-width: 500px) {
    padding: 20px;
  }
  button {
    height: 40px;
    border-radius: 3px;
    font-size: 1.6rem;
    margin-top: 20px;
    width: 210px;
    color: #BEBEBE;
    background: none;
    border: 1px solid #E19870;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

const Company = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  @media(max-width: 500px) {
    flex-direction: column;
    padding: 20px;
  }
  .company-recognition {
    max-width: 50%;
    padding-left: 10px;
    @media(max-width: 500px) {
      max-width: 100%;
      padding-top: 20px;
    }
  }
  img {
    width: 50%;
    @media(max-width: 500px) {
      width: 100%;
    }
  }
`;

const JobsButton = styled.button`
  height: 40px;
  border-radius: 3px;
  font-size: 1.6rem;
  margin: 20px;
  width: 210px;
  color: #3D3A4F;
  background: #E19870;
  border: none;
  text-transform: uppercase;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

const AboutPageTeam = () => (
  <section className="about-bottom-wrapper">
    <Team>
      <h2>Get to know us</h2>
      <p>
        Paleo authentic mlkshk, marfa keytar quinoa lyft lo-fi locavore helvetica poke hell of
        taxidermy. Whatever four loko affogato dreamcatcher cred banjo sartorial irony thundercats
        banh mi. Chartreuse single-origin coffee tumblr, kickstarter activated charcoal banh mi
        austin palo santo bitters waistcoat blue bottle. Glossier kitsch unicorn, VHS shabby chic
        microdosing man braid truffaut. Paleo fashion axe cray kale chips street art wolf, drinking
        vinegar quinoa tote bag taxidermy ethical.
      </p>
      <TeamMembers>
        <Member>
          <img src={MemberOne} alt="team-member" />
          <h4>Name of team member</h4>
        </Member>

        <Member>
          <img src={MemberTwo} alt="team-member" />
          <h4>Name of team member</h4>
        </Member>

        <Member>
          <img src={MemberThree} alt="team-member" />
          <h4>Name of team member</h4>
        </Member>

        <Member>
          <img src={MemberFour} alt="team-member" />
          <h4>Name of team member</h4>
        </Member>
      </TeamMembers>
      <JoinTeam>
        <p>
          Jean shorts authentic vexillologist crucifix keytar fam slow-carb. Portland wayfarers
          etsy, kickstarter raw denim art party la croix af. Brunch mlkshk semiotics keffiyeh
          kombucha venmo flannel franzen chicharrones irony ramps cornhole vexillologist PBR&B.
          Subway tile wayfarers health goth ennui.
        </p>
        <JobsButton type="button">See Our Listings</JobsButton>
      </JoinTeam>
    </Team>

    <Testimonials>
      <p>
        "Tumblr ennui lyft readymade leggings, polaroid seitan bushwick. Coloring book air plant
        pok pok live-edge lyft bicycle rights PBR&B four dollar toast yr. Meh locavore kombucha
        90's listicle PBR&B schlitz hammock. Skateboard chicharrones chillwave YOLO shoreditch
        hoodie meh wolf bespoke. Cronut migas four loko whatever sriracha slow-carb mlkshk etsy art
        party photo booth."
      </p>
      <p>Simon Snow, photographer</p>
      <button type="button">More testimonials</button>
    </Testimonials>

    <Company>
      <img src={Inc500} alt="inc-500-company" />
      <div className="company-recognition">
        <h2>One of the 5,000 fastest-growing private companies in Europe</h2>
        <p>
          Shoreditch ugh lo-fi unicorn gastropub food truck jianbing trust fund cray williamsburg
          bushwick poke. Slow-carb street art humblebrag copper mug hoodie, 90's coloring book
          kickstarter distillery taxidermy enamel pin pabst seitan. Williamsburg yr distillery,
          pork belly locavore stumptown squid next level intelligentsia readymade pickled
          shoreditch. Brooklyn slow-carb asymmetrical vape crucifix bicycle rights fingerstache
          truffaut la croix synth.
        </p>
      </div>

    </Company>
  </section>
);

export default AboutPageTeam;
