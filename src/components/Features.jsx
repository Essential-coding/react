import React from 'react';
import feature1Image from "../assets/feature_1.png";
import feature2Image from "../assets/feature_2.png";
import feature3Image from "../assets/feature_3.png";
import feature4Image from "../assets/feature_4.png";
import Yellow_button from "../components/Yellow_button";

const FeaturesSection = () => {
  const features = [
    { imageSrc: feature1Image, alt: 'two hands shaking symbolizes agreement', title: 'Business Advice', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { imageSrc: feature2Image, alt: 'Man\'s head inside a glowing lamp symbolizes great advices and ideas', title: 'Startup Business', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { imageSrc: feature3Image, alt: 'A diagram that symbolizes economic growth', title: 'Financial Advice', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { imageSrc: feature4Image, alt: 'Box with cog outside that symbolizes management', title: 'Risk Management', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  ];

  return (
    <section className="container">
      <div className="container">

        <header className="section-title">
          <p>Features</p>
          <h2>Our Accounting is trusted by thousand of companies</h2>
          <div className="feature-btn">
            
            <a className="btn-yellow btn-login center-content" href="#">Learn More <i
              className="fa-solid fa-arrow-up-right-from-square"></i></a>


     


          </div>
        </header>

        <article>
          {features.map((feature, index) => (
            <section key={index} className={feature.title === 'Risk Management' ? 'risk-management' : ''}>

              <img src={feature.imageSrc} alt={feature.alt} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

            </section>
          ))}
        </article>

      </div>
    </section>
  );
};

export default FeaturesSection;
