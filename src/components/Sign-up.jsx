import React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Yellow_button from "./Yellow_button";
import Sign_up_lines from "../assets/sign-up-lines.svg";

const SignUpSection = () => {
  return (
    <section className="sign-up section-title">
      <div className="container">
        <div className="wrapper center-content">
          <div className="sign-up-title">
            <h2>Get News Updates By Signup</h2>
          </div>
          <div className="mail-box">
            <input type="email" className="email" id="email" placeholder="username@domain.com" />
          </div>
          <div className="laptop-desktop-btn">
            <Yellow_button text="subscribe" url="/" type="btn-yellow subscribe-btn">
            subscribe <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Yellow_button>
            
            
            
          </div>
        </div>
        <div className="wrapper">
          <div className="mobile-tablet-btn">
          <Yellow_button text="subscribe" url="/" type="btn-yellow subscribe-btn">
            subscribe <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Yellow_button>
            
          </div>
        </div>
      </div>
      <img src={Sign_up_lines} className="sign-up-lines" alt="" />
    </section>
  );
};

export default SignUpSection;