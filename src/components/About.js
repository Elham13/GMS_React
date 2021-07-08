import React from "react";
import "../styles/About.css";
import elham from "../assets/img/elham.png";
import chary from "../assets/img/chary.png";
import dummy from "../assets/img/dummy-profile.png";

function About() {
  return (
    <div className='about' id='about'>
      <div className='titleWrapper'>
        <h1 className='title1'>About us</h1>
        <span className='line1'></span>
        <span className='line2'></span>
      </div>

      <div className='aboutInner'>
        <h3>
          GMS Ads in Hyderabad has been giving multiple Print/Digital marketing
          services to several Brands & Organizations and have created a
          reputation for being a pioneer for print & media agency with our high
          quality service. We expect to establish our reach to other regions
          also. We have worked with our clients from various sectors including
          FMCG/Agricultural, Health, Technology, Education, Insurance, Banking,
          Events, Movies, OOH and MSME’S. Our highly skilled work force offers
          the best service as per our clients requirements.
        </h3>
        <h3>
          Our vast experience in serving diversified and variety of sectors
          helps different organizations release and boost their development
          potential by creating new business opportunities. We have faith in
          continued business growth and reputation which is created out by
          experts and consistent efforts by building robust client relationship
          and optimizing the business performance across multiple processes and
          services there by you can create potential opportunities.
        </h3>
        <h3>
          We now offer services in Social Media
          marketing/Print/Content/Design/Digital marketing, Open Source
          Technology, e-Commerce, Project management Brand Enhancement, Out
          sourcing etc., Once we get to know our client’s requirements, we
          analyze, design, implement and ensure that we complete the task in
          lowest time frame and cost, as we move on, we don’t forget to include
          many other things for the benefit of our clients.
        </h3>
        <h3>
          GMS Ads is committed to serving our clients for a long time. We have a
          mission to serve the customer to the maximum and keep them secure and
          give the best service in all terms. we need to assist our esteemed
          clients with promoting their organizations services and products
          through the excellent mediums to enable them to get maximum exposure,
          results and benefits. Our teams of developers are highly skilled and
          experienced who can provide the right solutions and ideas. So we can
          help you in attaining wide and broader reach and create positive
          change.
        </h3>
        <h3>
          GMS Ads is an elite marketing and advertising company in Hyderabad,
          which develops attractive designs and developments to increase your
          business by marketing strategies in their way, we help in establishing
          brand awareness thus, sustaining business growth. It will not be a
          hypothesis to say that once you are with us, you wouldn’t have to
          search further any more for your needs. Lets join together for a
          better tomorrows.
        </h3>
        <h1>Our team</h1>

        <div className='team'>
          <div className='our-team'>
            <div className='pic'>
              <img src={chary} alt='profile' loading='lazy' />
            </div>

            <div className='team-content'>
              <h3 className='title'>Chary</h3>
              <span className='post'>Chaireman</span>
            </div>

            <ul className='social'>
              <li>
                <a
                  href='https://www.facebook.com/balabrahma.chary.376'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/bala-brahma-chary-64ba0713b/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='our-team'>
            <div className='pic'>
              <img src={dummy} alt='profile' loading='lazy' />
            </div>

            <div className='team-content'>
              <h3 className='title'>Keerthana</h3>
              <span className='post'>Manager</span>
            </div>

            <ul className='social'>
              <li>
                <a href='/'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='our-team'>
            <div className='pic'>
              <img src={elham} alt='profile' loading='lazy' />
            </div>

            <div className='team-content'>
              <h3 className='title'>Elhamuddin</h3>
              <span className='post'>Software developer</span>
            </div>

            <ul className='social'>
              <li>
                <a
                  href='https://www.facebook.com/elhamuddin.mahmoodi'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/Elham1305140'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/elhamuddin_mahmoodi'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/elhamuddin-mahmoodi-6b9875123'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='our-team'>
            <div className='pic'>
              <img src={dummy} alt='profile' loading='lazy' />
            </div>

            <div className='team-content'>
              <h3 className='title'>Padma</h3>
              <span className='post'>Telecaller</span>
            </div>

            <ul className='social'>
              <li>
                <a href='/#' target='_blank' rel='noreferrer'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
