import React from 'react';
import Lines from "../assets/lines-showcase.svg"
import Man from "../assets/showcase-image.svg";
import Yellow_button from "./Yellow_button";
import Transparent_button from './Transparent_button';

const Showcase = () => {
  return (
    <section className="showcase">
      <img src={Lines} className="bg-lines" alt="" />
      <div className="container">
        <div className="content">
          <h1>We Provide The Best Business Solution</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>


          <Yellow_button text="Get consulting" type="btn-yellow btn-login" icon="fa-solid fa-arrow-up-right-from-square" url="/"></Yellow_button>

          <Transparent_button text="Learn more" type="btn-transparent btn-login" url="/"></Transparent_button>
          
        
        </div>
        <img src={Man} alt="Image of a man in a suit holding a tablet" />
      </div>
    </section>
  );
}

export default Showcase;

