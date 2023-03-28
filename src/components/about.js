import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div data-aos="fade-in" data-aos-duration="2000" className="about">
        <h2>About Me</h2>
        <p>I'm a very creative Front End Developer from Brazil with a long 
          enterpreunership story: I already made business websites, landing pages 
          and even an startup. So, I'm used to solving problems, and ready to solve yours.
        </p>
        
        <div className="menu">
          <Link to="/contact" className="btn">Get in touch</Link>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
    </div>
  );
};

export default About;