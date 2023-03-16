import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div data-aos="fade-in" data-aos-duration="2000" className="about">
        <h2>About Me</h2>
        <p>I'm a brazilian Front End Developer that creates awesome experiences, using 
          my main tool: criativity. With a long enterpreunership story, I already made 
          business websites, landing pages and even an startup.
        </p>
        
        <div className="menu">
          <Link to="/contact" className="btn">Get in touch</Link>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
    </div>
  );
};

export default About;