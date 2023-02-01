import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./portfolio-item";

function Portfolio() {

  let [project, setProject] = useState(0);

  const projects = [
    {name: "1. ClassPlay Landing Page",
    image: "../images/site1.webp",
    link: "https://rococo-treacle-97e956.netlify.app/"},
    {name: "2. Kathellyn Lima Website",
    image: "../images/site2.webp",
    link: "http://kathellynlima.com.br/"},
    {name: "3. Chill Drinks Website",
    image: "../images/site3.webp",
    link: "https://chilldrinks.com.br/"},
    {name: "4. Wheater Application with API",
    image: "../images/site4.webp",
    link: "https://symphonious-mousse-89fa53.netlify.app/"},
    {name: "5. Tic Tac Toe with Themes",
    image: "../images/site4.webp",
    link: "https://quiet-lebkuchen-7bce28.netlify.app/"},
    {name: "6. Memory Game on ReactJs",
    image: "../images/site5.webp",
    link: "https://starlit-peony-8c02ec.netlify.app/"}
  ]

  const changeProject = () => {
    if(project < projects.length-1 ){
      setProject(project=project+1);
    } else {
      setProject(0);
    };
  }

  return (
    <div data-aos="fade-in" data-aos-duration="2000" className="portfolio">
        <h2>Portfolio</h2>

        <Item name={projects[project].name} image={projects[project].image} link={projects[project].link}/>

        <div className="menu">
          <span className="btn" onClick={changeProject}>Show another project</span>
          <Link to="/" className="btn">Back to Home</Link>
        </div>

    </div>
  );
};

export default Portfolio;