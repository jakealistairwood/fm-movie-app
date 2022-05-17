import React, { useState } from "react";
import "./Home.scss";
import Trending from "../../components/Trending/Trending";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import uuid from "react-uuid";
import {
    trendingMovies,
    recommendedMovies,
    filterBySearchTerm,
    getUpdatedSearchLength,
} from "../../services/filterMovies";

const Home = ({ movieList }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    let filteredCards = filterBySearchTerm(movieList, searchTerm);

    let updatedSearchLength = getUpdatedSearchLength(filteredCards);

    const renderFilteredCards = filteredCards.map(movie => {
        return <MovieCard key={uuid()} movie={movie} />;
    });

    const renderTrendingMovies = trendingMovies.map(movie => {
        return <Trending key={uuid()} movie={movie} />;
    });

    const renderRecommendedMovies = recommendedMovies.map(movie => {
        return <MovieCard key={uuid()} movie={movie} />;
    });

    return (
        <>
            <Search
                placeholderText={"Search for movies or TV series"}
                handleSearch={handleSearch}
            />
            <section className="home">
                {!searchTerm ? (
                    <>
                        <h2 className="home__heading">Trending</h2>
                        <div className="home__trending-movies">
                            {renderTrendingMovies}
                        </div>
                        <h2 className="home__heading">Recommended for you</h2>
                        <div className="home__recommended-movies movies-container">
                            {renderRecommendedMovies}
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="home__heading">
                            Found {updatedSearchLength} result(s) for '
                            {searchTerm}'
                        </h2>
                        <div className="home__recommended-movies movies-container">
                            {renderFilteredCards}
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default Home;
