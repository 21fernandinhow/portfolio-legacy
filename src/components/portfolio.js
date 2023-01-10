import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./portfolio-item";

function Portfolio() {

  let [project, setProject] = useState(0);

  const projects = [
    {name: "1. Kathellyn Lima Website",
    image: "../images/site1.webp",
    link: "http://kathellynlima.com.br/"},
    {name: "2. Chill Drinks Website",
    image: "../images/site2.webp",
    link: "https://chilldrinks.com.br/"},
    {name: "3. Tic Tac Toe with Themes",
    image: "../images/site3.webp",
    link: "https://quiet-lebkuchen-7bce28.netlify.app/"},
    {name: "4. Memory Game on ReactJs",
    image: "../images/site4.webp",
    link: "https://starlit-peony-8c02ec.netlify.app/"}
  ]

  const changeProject = () => {
    if(project < 3 ){
      setProject(project=project+1);
    } else if (project === 3){
      setProject(0);
    };
  }

  return (
    <div data-aos="fade-in" data-aos-duration="2000">
        <h2>Portfolio</h2>

        <Item name={projects[project].name} image={projects[project].image} link={projects[project].link}/>

        <div className="menu">
          <span className="btn-menu" onClick={changeProject}>Show another project</span>
          <Link to="/" className="btn-menu">Back to Home</Link>
        </div>       

        <br/><br/><br/>

    </div>
  );
};

export default Portfolio;