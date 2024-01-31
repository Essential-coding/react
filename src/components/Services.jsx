import React from 'react';
import ServiceLines from "../assets/services-lines.svg"
import Transparent_button from './Transparent_button';

const ServicesSection = () => {
  const servicesData = [
    { title: 'Business Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' },
    { title: 'Startup Business', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' },
    { title: 'Financial Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' },
    { title: 'Risk Management', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' },
  ];

  return (
    <section className="services">
      <div className="title-container container">
        <header className="section-title">
          <p>Our Services</p>
          <h2>We Provide The Best Service For Consulting</h2>
        </header>
      </div>

      <main>
        <div className="card-container container">
          {servicesData.map((service, index) => (
            <article key={index} className="business-cards">
              <header>
                <div className="customized-border"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </header>
              <footer><i className="fa-solid fa-arrow-right"></i></footer>
            </article>
          ))}
        </div>
      </main>

      <footer className="btn-services container">

        <Transparent_button type="btn-transparent center-content" url="/" icon="fa-solid fa-arrow-up-right-from-square" text="Browse Services"></Transparent_button>
        
      </footer>

      <img src={ServiceLines} className="services-lines" alt="" />
    </section>
  );
};

export default ServicesSection;
