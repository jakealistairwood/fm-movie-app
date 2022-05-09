import React from "react";
import "./Home.scss";
import movieData from "../../assets/data.json";
import Trending from "../../components/Trending/Trending";
import MovieCard from "../../components/MovieCard/MovieCard";
import uuid from "react-uuid";
import { trendingMovies, recommendedMovies } from "../../services/filterMovies";

const Home = () => {
    const renderTrendingMovies = trendingMovies.map(movie => {
        return <Trending key={uuid()} movie={movie} />;
    });

    const renderRecommendedMovies = recommendedMovies.map(movie => {
        return <MovieCard key={uuid()} movie={movie} />;
    });

    return (
        <section className="home">
            <h2 className="home__heading">Trending</h2>
            <div className="home__trending-movies">{renderTrendingMovies}</div>
            <h2 className="home__heading">Recommended for you</h2>
            <div className="home__recommended-movies movies-container">
                {renderRecommendedMovies}
            </div>
        </section>
    );
};

export default Home;
