import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./portfolio-item";

function Portfolio() {

  let [project, setProject] = useState(0);

  const projects = [
    {name: "ClassPlay Landing Page",
    image: "../images/site1.webp",
    link: "https://rococo-treacle-97e956.netlify.app/"},
    {name: "Kathellyn Lima Website",
    image: "../images/site2.webp",
    link: "http://kathellynlima.com.br/"},
    {name: "Chill Drinks Website",
    image: "../images/site3.webp",
    link: "https://chilldrinks.com.br/"},
    {name: "Wheater with API",
    image: "../images/site4.webp",
    link: "https://symphonious-mousse-89fa53.netlify.app/"},
    {name: "TicTacToe with Themes",
    image: "../images/site5.webp",
    link: "https://quiet-lebkuchen-7bce28.netlify.app/"},
    {name: "ReactJs MemoryGame",
    image: "../images/site6.webp",
    link: "https://starlit-peony-8c02ec.netlify.app/"}
  ]

  const nextProject = () => {
    if(project < projects.length-1 ){
      setProject(project=project+1);
    } else {
      setProject(0);
    };
  }

  const lastProject = () => {
    if(project !== 0 ){
      setProject(project=project-1);
    } else if (project === 0){
      setProject(project=projects.length-1);
    };
  }

  return (
    <div data-aos="fade-in" data-aos-duration="2000" className="portfolio">
        <h2>Portfolio</h2>

        <div className="carrousel">
          <div className="arrow-div arrow1" onClick={lastProject}>
            <span>{`<`}</span>
          </div>
          <Item name={projects[project].name} image={projects[project].image} link={projects[project].link} id={project+1} total={projects.length}/>
          <div className="arrow-div arrow2" onClick={nextProject}>
            <span>{`>`}</span>
          </div>
        </div>

        <div className="menu">
          <Link to="/" className="btn">Back to Home</Link>
        </div>

    </div>
  );
};

export default Portfolio;