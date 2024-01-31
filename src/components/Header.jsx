import React from 'react'
import { Link } from 'react-router-dom';  
import logo from "../assets/logotype.svg"
import Social from './Social';
import Yellow_button from "./Yellow_button";




const Header = () => {
  return (

    <header className="header-bg-color">
    <div className="container">
      <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
      <div className="logotype">
        <Link href="home"><img src={logo} alt="Logo for a company called Crito" /></Link>
      </div>
      <div className="contactinformation-bar">
        <div className="content-box">
          <i className="fa-solid fa-phone-volume"></i>
          +46 (8) 121 470 50
        </div>
        <div className="content-box">
          <i className="fa-regular fa-envelope"></i>
          info@crito.com
        </div>
        <div className="content-box last">
          <i className="fa-solid fa-location-dot"></i>
          Sveavägen 31, 111 34 STOCKHOLM
        </div>
      </div>
      <div className="socialmedia-bar">
        <Social>
        </Social>
      </div>
      <div className="menu">
      <nav>
            <Link to="/home" >Home</Link>
            <Link to="/services" >Service</Link>
            <Link to="/news" >News</Link>
            <Link to="/contact" >Contact</Link>
          </nav>
       <Yellow_button text="Login" type="btn-yellow btn-login" icon="fa-solid fa-arrow-up-right-from-square" url="/home"></Yellow_button>
      </div>
    </div>
  </header>
  
  )
}

export default Header 










