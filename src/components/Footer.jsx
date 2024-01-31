import React from 'react';
import logo from "../assets/logotype-white.svg";
import footerLines from "../assets/background-lines-white-right.svg";

const Footer = () => {
  return (
    <div className='bg-color'>
      <div className='bg-image'>
        <img src={footerLines} alt="" />
      </div>
      <footer className='container'>
        <div className='link-container'>

          <div className='links logo-content'>
            
              <a href="/home">
                <img src={logo} alt="logo representing the company called Crito" />
              </a>
       
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
            </p>
          </div>

          <div className='links all-links-not-logo'>
            <h2 className='links-headline'>
              <a href="/home">Company</a>
            </h2>
            <ul>
              <a href="#">Free Ebooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How-to Blog</a>
              <a href="#">Youtube Playlist</a>
            </ul>
          </div>

          <div className='links all-links-not-logo'>
            <h2 className='links-headline'>
              <a href="/home">Help</a>
            </h2>
            <ul>
              <a href="#">Free Ebooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How-to Blog</a>
              <a href="#">Youtube Playlist</a>
            </ul>
          </div>

          <div className='links all-links-not-logo'>
            <h2 className='links-headline'>
              <a href="/home">Resources</a>
            </h2>
            <ul>
              <a href="#">Free Ebooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How-to Blog</a>
              <a href="#">Youtube Playlist</a>
            </ul>
          </div>

          <div className='links all-links-not-logo'>
            <h2 className='links-headline'>
              <a href="/home">Link</a>
            </h2>
            <ul>
              <a href="#">Free Ebooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How-to Blog</a>
              <a href="#">Youtube Playlist</a>
            </ul>
          </div>

        </div>
      </footer>

      <div className="wrapper-follow-us container">
              <div className="copyright">
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
              </div>
              <div className="socialmedia-bar">
                <nav>
                  <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://twitter.com/?lang=en"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
                </nav>
              </div>
            </div>
    </div>
  );
}

export default Footer;
