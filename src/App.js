import React,{Component} from "react";
import { useEffect, useState } from "react";
import Movie from "./component/Movie/Movie";
import  "./App.css";
import SeeDetails from "./component/SeeDetails/SeeDetails";

function App() {

   
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(jsonData => jsonData.results)
      .then(setMovies)
      .catch(erro => console.log(erro))

  },[])
  console.log(movies)
  return (
    <div className="App">
      <ul className="moviesList">
        <Movie movie={movies} />
      </ul>
    </div>
  );
}

export default App;
