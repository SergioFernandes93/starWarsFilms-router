import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../SeeDetails/seeDetails.css"

const SeeDetails = () => {
    const params = useParams();
    const {id} = params;

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        
      fetch(`https://swapi.dev/api/films/${id}`)
        .then(response => response.json())
        .then(jsonData => jsonData.results)
        .then(setMovie)
        .catch(erro => console.log(erro))
  
    },[])

    return(
        <div className="detailsContainer">
                <span>Título:Id={id}  {movie}</span> 
                <span>Diretor:</span>
                <span>Sinopse:</span>
        </div>
    )
}
export default SeeDetails;