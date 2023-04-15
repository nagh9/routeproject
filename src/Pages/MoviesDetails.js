import { useParams } from "react-router-dom";
import { movies } from "../Datta/movies";
import {Link} from 'react-router-dom'


const MoviesDetails = () => {
    const { id } = useParams();
    const findMovie = movies.find((movie) => movie.id === parseInt(id));
    return (
        <>
        <div>
            <h1>{findMovie.name}</h1>
            <p>{findMovie.description}</p>
            <p>{findMovie.price}</p>
        
        </div>
        
        </>
    );
}

export default MoviesDetails;