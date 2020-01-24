import React from "react";
import "./StarWars.css"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const StarWarsCard = props => {
  console.log(props);
  return (
   
     
       
          <Card id="card">
            <CardBody id="height">
              <CardTitle>
                <h4>{props.character.name}</h4>
              </CardTitle>
              <CardSubtitle>
                <p>height:</p>
                {props.character.height}
              </CardSubtitle>
              <br></br>
              <CardSubtitle>
                <p>mass:</p>
                {props.character.mass}
              </CardSubtitle>
            </CardBody>
          </Card>
        
     
    
  );
};

export default StarWarsCard;
