import React from 'react';
import date_1 from "../assets/date-1.svg";
import date_2 from "../assets/date-2.svg";
import date_3 from "../assets/date-3.svg";
import news_1 from "../assets/news-1.png";
import news_2 from "../assets/news-2.png";
import news_3 from "../assets/news-3.png";
import Dots_button from "./Dots_button"

const ArticlesNews = () => {
  return (
    <section className="articles-news">
      <div className="container">
        <header className="title">
          <div className="text-center title-text section-title">
            <p className="center-content title-text">Article & News</p>
            <h2 className="center-content title-text">Get Every Single Articles & News</h2>
          </div>

          <div className="browse-articles-btn">
            <a className="btn-transparent center-content" href="news.html">Browse Articles <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </header>

        <div className="box">
          <div className="child-box">
            <figure>
              <img src={news_1} alt="A woman sitting inside an office and smiling" />
              <img src={date_1} className="overlay" alt="March 25th" />

              <figcaption>Business</figcaption>
              <div className="unique-spacing-h3">
                <h3>How To Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </figure>
          </div>

          <div className="child-box">
            <figure>
              <img src={news_2} alt="limitations, capabillities and examples" />
              <img src={date_2} className="overlay" alt="March 17th" />
              <figcaption>Business</figcaption>
              <div className="content-section">
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </figure>
          </div>

          <div className="child-box">
            <figure>
              <img src={news_3} alt="Phone resting on book on table." />
              <img src={date_3} className="overlay" alt="March 13th" />
              <figcaption>Business</figcaption>
              <div className="content-section">
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </figure>
          </div>
        </div>

        <div className="wrapping-circles">
          <div className="button-container center-content">
            <Dots_button></Dots_button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesNews;
