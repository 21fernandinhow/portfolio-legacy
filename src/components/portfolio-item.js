import React from "react";

function Item(props) {
  return (
    <div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img className="portfolio-img" alt="website" src={props.image}/>
        </a>
        <p className="portfolio-name">{props.name}</p>
    </div>
  );
};

export default Item;