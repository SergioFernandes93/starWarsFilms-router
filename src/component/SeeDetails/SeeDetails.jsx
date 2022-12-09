import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../SeeDetails/seeDetails.css"

const SeeDetails = () => {
    
    const [movie, setMovie] = useState([]);

    const params = useParams();
    const {id} = params;

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${id + 1}`)
          .then(response => response.json())
          .then(setMovie)
          .catch(erro => console.log(erro))
    
      },[])

console.log(movie)
    
    return(
        <div className="detailsContainer">
                <span>Título:{movie.title}</span> 
                <span>Diretor:{movie.director}</span>
                <span>Data de lançamento:{movie.release_date}</span>
                <span>Sinopse: {movie.opening_crawl}</span>
        </div>
    )
}
export default SeeDetails;