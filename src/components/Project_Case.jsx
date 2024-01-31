import React from 'react';
import project1 from "../assets/article-image-1.png";
import project2 from "../assets/article-image-2.png";
import project3 from "../assets/article-image-3.png";
import project4 from "../assets/article-image-4.png";
import Black_button from "../components/Black_button";

const ProjectAndCase = () => {
  const projects = [
    {
      imgSrc: project1,
      alt: 'A man reading a business newspaper',
      title: 'Grow Your Business',
    },
    {
      imgSrc: project2,
      alt: 'Apple pink products on a desk',
      title: 'Why your client needs a responsive website',
    },
    {
      imgSrc: project3,
      alt: 'Desk with office supplies',
      title: 'Educate your employees to get better results',
    },
    {
      imgSrc: project4,
      alt: 'Laptop with Business Intelligence Insights',
      title: 'Business Insights is an important piece of your business',
    },
  ];

  return (
    <section className="project-and-case">
      <div className="container">
        <div className="section-title">
          <p>Project & Case-Studies</p>
          <h2>Let's Look at Our Global Projects</h2>
        </div>
        <div className="project-and-cases">
          {projects.map((project, index) => (
            <a key={index} className="project" href="#">
              <img src={project.imgSrc} alt={project.alt} />
              <h3>{project.title}</h3>
              <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></div>
            </a>
          ))}
        </div>
        <div className="center-content">

            <Black_button text="All Recent Projects" url="/" type="btn-black btn-login" icon="fa-solid fa-arrow-up-right-from-square"></Black_button>

        </div>
      </div>
    </section>
  );
};

export default ProjectAndCase;
