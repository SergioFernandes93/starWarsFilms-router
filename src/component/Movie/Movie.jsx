import { Link, useParams } from "react-router-dom";

function Movie(props) {

        return(
            <>
            {props.movie.map((movie,index) => {
                return (
                    <>
                <li className="movie" key={index} > 
                    <Link to={`/${movie.title}/${index}`} >{movie.title}</Link>  
                </li> 
                    </>
                )
            })}
            
            </>
        )
    }
export default Movie;