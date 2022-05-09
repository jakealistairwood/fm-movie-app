import "./Movies.scss";
import { movieList } from "../../services/filterMovies";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import uuid from "react-uuid";

const Movies = () => {
    const renderMovieCards = movieList.map(movie => {
        return <MovieCard movie={movie} key={uuid()} />;
    });

    return (
        <>
            <div className="movies">
                <h2 className="movies__heading">Movies</h2>
                <div className="movies-container">{renderMovieCards}</div>
            </div>
        </>
    );
};

export default Movies;
