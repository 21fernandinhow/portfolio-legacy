import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./portfolio-item";

function Portfolio() {

  let [project, setProject] = useState(0);

  const projects = [
    {name: "Digital Marketing Agency",
    image: "../images/apo.webp",
    link: "https://agenciapresencaonline.com.br"},
    {name: "ONG Florescer",
    image: "../images/florescer.webp",
    link: "https://florescerjf.netlify.app/"},
    {name: "Weather with API",
    image: "../images/weather.webp",
    link: "https://checkingtheweather.netlify.app/"},
    {name: "ReactJs MemoryGame",
    image: "../images/memorygame.webp",
    link: "https://forestmemorygame.netlify.app/"},
    {name: "ClassPlay Landing Page",
    image: "../images/classplay.webp",
    link: "https://classplay.netlify.app/"},
    {name: "Bonus: Days to World Cup",
    image: "../images/worldcup.webp",
    link: "https://quantofaltapracopa.netlify.app/"},
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