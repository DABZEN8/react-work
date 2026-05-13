import { useState } from "react"
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList"
import AlphaOrder from "./AlphaOrder"
import GradeOrder from "./GradeOrder"

function MovieApplication() {

    const [movies, SetMovies] = useState([])

    return (
        <div className="container mt-5">
            <h1>My Filmlist</h1>
            <AddMovieForm />
            <hr />
            <h2>Movies</h2>
            <AlphaOrder />
            <GradeOrder />
            <MovieList movies={movies} />
        </div>
    )
}

export default MovieApplication;