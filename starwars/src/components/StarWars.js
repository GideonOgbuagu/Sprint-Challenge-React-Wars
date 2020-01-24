import React, { useState } from "react";
import StarWarsCard from "./StarWarsCard";

const StarWars = props => {
  console.log(props.parentStarWarsData);
  const [charactersData] = useState(
    props.parentStarWarsData);
  return (
    <div>
      {charactersData.map(data => {
        return (
            <StarWarsCard 
            key={data.height} 
            character={data}/>
        )
      })}
    </div>
  );
};

export default StarWars;
