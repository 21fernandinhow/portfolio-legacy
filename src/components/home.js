import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div data-aos="flip-down" data-aos-duration="2000" className="home">
        <h1>Hi, I am Fernando Carvalho!</h1>
        <h2>Front-end Developer</h2>
        <div className="skills">
          <img className="skill-icon" alt="html" src="../images/html.webp" width={'30px'} height={'30px'}/>
          <img className="skill-icon" alt="css" src="../images/css.webp" width={'30px'} height={'30px'}/>
          <img className="skill-icon" alt="javascript" src="../images/js.webp" width={'30px'} height={'30px'}/>
          <img className="skill-icon" alt="bootstrap" src="../images/bootstrap.webp" width={'30px'} height={'30px'}/>
          <img className="skill-icon" alt="sass/scss" src="../images/sass.webp" width={'30px'} height={'30px'}/>
          <img className="skill-icon" alt="reactjs" src="../images/react.webp" width={'30px'} height={'30px'}/>
        </div>
        <div className="menu">
          <Link to="/about" className="btn">About</Link>
          <Link to="/portfolio" className="btn">Portfolio</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </div>
    </div>
  );
};

export default Home;
