import React from 'react';
import choose1 from "../assets/choose-1.svg";
import choose2 from "../assets/choose-2.svg";
import choose3 from "../assets/choose-3.svg";
import choose4 from "../assets/choose-4.svg";
import choose5 from "../assets/choose-5.png"; 


const ChooseUs = () => {
  const contentData = [
    {
      imgSrc: choose1,
      imgAlt: 'Thumb symbolizing Process Excellence',
      title: 'Process Excellence',
      description: 'Lorem, ipsum dolor sit amet consectetur.',
    },
    {
      imgSrc: choose2,
      imgAlt: 'Ruby symbolizing strategic planning.',
      title: 'Strategic Planning',
      description: 'Lorem, ipsum dolor sit amet consectetur.',
    },
    {
      imgSrc: choose3,
      imgAlt: 'image that describes Experience Design',
      title: 'Experience Design',
      description: 'Lorem, ipsum dolor sit amet consectetur.',
    },
    {
      imgSrc: choose4,
      imgAlt: 'a cog inside a human head that symbolizes Artificial Intelligence',
      title: 'Artificial Intelligence',
      description: 'Lorem, ipsum dolor sit amet consectetur.',
    },
  ];

  return (
    <section className="choose-us">
      <div className="custom-container">
        <div className="container">
          <header>
            <div className="section-title">
              <p>Why Choose Us</p>
              <h2>Why We Are The Best Business Consulting Agency</h2>
            </div>
          </header>
          <main>
            {contentData.map((content, index) => (
              <Article
                key={index}
                imgSrc={content.imgSrc}
                imgAlt={content.imgAlt}
                title={content.title}
                description={content.description}
              />
            ))}
          </main>
          <figure className="wrap-image">
            <img
              src={choose5}
              className="img-fluid image-choose-us"
              alt="Two women sitting in the office and talking while one of them is holding a tablet"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

const Article = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <article className="content">
      <aside className="side-assets center-content">
        <img src={imgSrc} alt={imgAlt} />
      </aside>
      <header className="side-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </header>
    </article>
  );
};

export default ChooseUs;
