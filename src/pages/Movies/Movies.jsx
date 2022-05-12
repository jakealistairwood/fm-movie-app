import { useState, useEffect } from "react";
import "./Movies.scss";
import { movieList } from "../../services/filterMovies";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import uuid from "react-uuid";

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    let filteredMovieCards = movieList.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const renderMovieCards = filteredMovieCards.map(movie => {
        return <MovieCard movie={movie} key={uuid()} />;
    });

    return (
        <>
            <Search
                placeholderText={"Search for movies"}
                handleSearch={handleSearch}
            />
            <section className="movies">
                <h2 className="movies__heading">
                    {searchTerm
                        ? `Found ${filteredMovieCards.length} result(s) for '${searchTerm}'`
                        : `Movies`}
                </h2>
                <div className="movies-container">{renderMovieCards}</div>
            </section>
        </>
    );
};

export default Movies;
