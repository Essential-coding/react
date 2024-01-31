import React from 'react';
import Person_1 from "../assets/person-1.png";
import Person_2 from "../assets/person-2.png";
import Person_3 from "../assets/person-3.png";
import Person_4 from "../assets/person-4.png";

import testimonial_1 from "../assets/testimonial-1.png";
import testimonial_2 from "../assets/testimonial-2.png";
import testimonial_3 from "../assets/testimonial-3.png";
import Black_button from './Black_button';
import Dots_button from './Dots_button';
import Stars from './Stars';
import Yellow_button from "./Yellow_button";





const TeamMembersTestimonials = () => {
  return (
    <section className="meet-our-team">
      <div className="container">
        <div className="mobile-container">
          <header className="section-title title-team mobile-header">
            <p>Meet Our Team</p>
            <h2>Experience Team Members</h2>
            <a className="btn-yellow btn-yellow-edited" href="#">Browse Team <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </header>
        </div>

        <div className="tablet-container">
          <header className="section-title title-team tablet-header">
            <div className="wrapping-text">
              <p>Meet Our Team</p>
              <h2>Experience Team Members</h2>
            </div>
            <div className="wrapping-button">
              <a className="btn-yellow center-content btn-yellow-edited" href="#">Browse Team <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </header>
        </div>

        <div className="laptop-container">
          <header className="section-title title-team laptop-header">
            <div className="wrapping-text">
              <p>Meet Our Team</p>
              <h2>Experience Team Members</h2>
            </div>
            <div className="wrapping-button">

              <Yellow_button type="btn-yellow center-content btn-yellow-edited" url="/" icon="fa-solid fa-arrow-up-right-from-square" text="Browse Team"></Yellow_button>
            </div>
          </header>
        </div>

        <div className="container">
          <div className="image-persons">
            <div className="wrap-img-content">
              <figure>
                <img src={Person_1} className="img-fluid" alt="A woman with curly hair smiling" />
                <figcaption>
                  <h4>Kristine Palmer</h4>
                  <p>Chef Operation Officer</p>
                </figcaption>
              </figure>
              <figure>
                <img src={Person_2} className="img-fluid" alt="A man wearing a suit and smiling" />
                <figcaption>
                  <h4>Mark Aubri</h4>
                  <p>Senior Consultant</p>
                </figcaption>
              </figure>
              <figure>
                <img src={Person_3} className="img-fluid" alt="A woman sitting next to a window and smiling while holding a book" />
                <figcaption>
                  <h4>Kimberly Hansen</h4>
                  <p>Senior Consultant</p>
                </figcaption>
              </figure>
              <figure>
                <img src={Person_4} className="img-fluid" alt="A man smiling wearing black jacket" />
                <figcaption>
                  <h4>Justin Willoman</h4>
                  <p>Senior Tech Consultant</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="button-container center-content">
            <Dots_button></Dots_button>
          </div>
        </div>
      </div>

      <main className="testimonial">
        <div className="container-1520px-testimonial">
          <header className="section-title text-center">
            <p>Testimonial</p>
            <h2>What Our Client Says</h2>
          </header>

          <div className="container">
            <article className="wrapping-content">
              <Stars></Stars>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                voluptate"</p>
              <footer className="footer-testimonial">
                <figure className="image-footer">
                  <img src={testimonial_1} alt="Woman smilining in a forest" />
                </figure>
                <figcaption className="section-title">
                  <h3>Cassandra Warren</h3>
                  <p>Business Manager, Dorfus</p>
                </figcaption>
              </footer>
            </article>

            <article className="wrapping-content">
              <Stars></Stars>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                voluptate"</p>
              <footer className="footer-testimonial">
                <figure className="image-footer">
                  <img src={testimonial_2} alt="a Woman smiling" />
                </figure>
                <figcaption className="section-title">
                  <h3>Amanda Tulling</h3>
                  <p>Senior Developer, Square</p>
                </figcaption>
              </footer>
            </article>

            <article className="wrapping-content">
              <Stars></Stars>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                voluptate"</p>
              <footer className="footer-testimonial tablet-img-center">
                <figure className="image-footer">
                  <img src={testimonial_3} alt="a man smiling" />
                </figure>
                <figcaption className="section-title">
                  <h3>Jack McDogglas</h3>
                  <p>Key Account Manager, Gobona</p>
                </figcaption>
              </footer>
            </article>

            <div className="container-btn-testimonial">

              <Black_button type="btn-black btn-login center-content" url="/" text="All Reviews" icon="fa-solid fa-arrow-up-right-from-square"></Black_button>

            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TeamMembersTestimonials;
