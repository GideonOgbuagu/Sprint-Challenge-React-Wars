import React, { useState } from "react";
import "./StarWars.css"
import StarWarsCard from "./StarWarsCard";

const StarWars = props => {
  console.log(props.parentStarWarsData);
//   const [charactersData] = useState(
//     props.parentStarWarsData);
  return (
    <div className="container">
      {props.parentStarWarsData.map(data => (
       
            <StarWarsCard 
            key={data.height} 
            character={data}/>
        
  ))}
    </div>
      
  );
};

export default StarWars;
