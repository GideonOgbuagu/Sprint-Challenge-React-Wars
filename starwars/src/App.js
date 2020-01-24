import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWars from "./components/StarWars";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
        .then(response => {
      // console.log(response.data.results);
      setData(response.data.results);
    });
  }, []);

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <StarWars parentStarWarsData={data} />
    </div>
  );
};

export default App;
