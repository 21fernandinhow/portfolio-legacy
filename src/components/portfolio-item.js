import React from "react";

function Item(props) {
  return (
    <div className="portfolio-div">

        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img className="portfolio-img" alt="website" src={props.image}/>
        </a>
        
        <p className="portfolio-name"> {props.name} - {props.id}/{props.total} </p>
    </div>
  );
};

export default Item;