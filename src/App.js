import React,{Component} from "react";
import { useEffect, useState } from "react";
import Movie from "./component/Movie/Movie";
import style from "./App.css";
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";

function App() {

   
  const [movies, setMovies] = useState([]);
  const [ativar,setAtivar] = useState(false)
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(jsonData => jsonData.results)
      .then(setMovies)
      .catch(erro => console.log(erro))

  },[])
  
  return (
    <div className="App">
      <ul className="moviesList">
        <Movie ativar={setAtivar}  movie={movies} />
      </ul>
    </div>
  );
}

export default App;
