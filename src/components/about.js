import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div data-aos="fade-in" data-aos-duration="2000" className="about">
        <h2>About Me</h2>
        <p>I'm a Front End Developer from Brazil with a long enterpreunership story. 
          I already created some e-commerces, landing pages and even a startup. 
          <br/><br/>Today, I'd like to make a website for you. Let's go?
        </p>
        
        <div className="about-options">
          <Link to="/contact" className="btn">Get in touch</Link>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
    </div>
  );
};

export default About;