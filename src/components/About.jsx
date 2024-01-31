import React from 'react';
import aboutCompanyLines from '../assets/about-company-lines.svg';
import aboutCompany from '../assets/about-company.png';
import aboutCompanyQuotes from '../assets/about-company-quotes.png';
import Black_button from './Black_button';

const AboutCompanySection = () => {
  return (
    <section className="about-company">
      <div className="container">

        <header>
          <div className="about-title section-title">
            <p>About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
          </div>
          <div className="about-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda
              esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt
              adipisci accusantium libero provident voluptate amet.</p>
          </div>

          <div>
            
                <Black_button type="btn-black center-content" url="/" icon="fa-solid fa-arrow-up-right-from-square" text="Learn More"></Black_button>
                <Black_button type="btn-video center-content" url="/" icon="fa-regular fa-circle-play" text="Intro Video"></Black_button>
          </div>
        </header>

        <aside>
          <div className="about-image">
            <img src={aboutCompanyLines} className="about-lines-img" alt="" />
            <img src={aboutCompany} alt="Woman walking inside office while holding a tablet" />
            <div className="about-quote">
              <img src={aboutCompanyQuotes} alt="A quote that says Samantha Brown, Founder" />
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default AboutCompanySection;
