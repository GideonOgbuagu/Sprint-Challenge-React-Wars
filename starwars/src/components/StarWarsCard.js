import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const StarWarsCard = (props) => {
    console.log(props);
  return (
    <div>
    <Card>
    <CardBody>
      <CardTitle><h3>name:</h3>{props.character.name}</CardTitle>
      <CardSubtitle><p>height:</p>{props.character.height}</CardSubtitle>
      <CardSubtitle><p>mass:</p>{props.character.mass}</CardSubtitle>
      
    </CardBody>
  </Card>
    </div>
  );
};

export default StarWarsCard;
