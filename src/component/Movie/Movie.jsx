import { Link, useParams } from "react-router-dom";

function Movie(props) {

    const params = useParams();
    const {id} = params;
    
        return(
            <>
            {props.movie.map((movie,index) => {
                return (
                    <>
                <li className="movie" key={index} onClick = {props.openModal} > 
                    <Link to={} >{movie.title}</Link>   
                </li>
               
                    </>
                )
            })}
            
            </>
        )
    }
export default Movie;