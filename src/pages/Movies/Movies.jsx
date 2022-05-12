import { useState, useEffect } from "react";
import "./Movies.scss";
import movieData from "../../assets/data.json";
import {
    filterByCategory,
    filterBySearchTerm,
    getUpdatedSearchLength,
} from "../../services/filterMovies";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import uuid from "react-uuid";

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    let filteredMovies = filterByCategory(movieData, "Movie");
    let updatedMoviesList = filterBySearchTerm(filteredMovies, searchTerm);

    const renderMovieCards = updatedMoviesList.map(movie => {
        return <MovieCard movie={movie} key={uuid()} />;
    });

    let updatedSearchLength = getUpdatedSearchLength(updatedMoviesList);

    return (
        <>
            <Search
                placeholderText={"Search for movies"}
                handleSearch={handleSearch}
            />
            <section className="movies">
                <h2 className="movies__heading">
                    {searchTerm
                        ? `Found ${updatedSearchLength} result(s) for '${searchTerm}'`
                        : `Movies`}
                </h2>
                <div className="movies-container">{renderMovieCards}</div>
            </section>
        </>
    );
};

export default Movies;
