import { useState } from "react";
import "./Favourites.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import {
    filterByBookmarked,
    filterByCategory,
    filterBySearchTerm,
    getUpdatedSearchLength,
} from "../../services/filterMovies";
import uuid from "react-uuid";

const Favourites = ({ toggleBookmark, movieList }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    const filteredSeries = filterByCategory(movieList, "TV Series");
    const filteredMovies = filterByCategory(movieList, "Movie");

    const getBookmarkedMovies = filterByBookmarked(filteredMovies);
    const getBookmarkedTVSeries = filterByBookmarked(filteredSeries);
    const getBookmarkedShows = filterByBookmarked(movieList);

    const filteredShows = filterBySearchTerm(getBookmarkedShows, searchTerm);

    const updatedSearchLength = getUpdatedSearchLength(filteredShows);

    const renderMovieCards = getBookmarkedMovies.map(movie => {
        return <MovieCard key={uuid()} movie={movie} />;
    });

    const renderTVSeriesCards = getBookmarkedTVSeries.map(series => {
        return <MovieCard key={uuid()} movie={series} />;
    });

    const renderSearchedShows = filteredShows.map(show => {
        return <MovieCard key={uuid()} movie={show} />;
    });

    return (
        <>
            <Search
                handleSearch={handleSearch}
                placeholderText={"Search for bookmarked shows"}
            />
            <div className="bookmarked">
                {searchTerm ? (
                    <>
                        <h2 className="bookmarked__heading">
                            {searchTerm &&
                                `Found ${updatedSearchLength} result(s) for '${searchTerm}'`}
                        </h2>
                        <div className="bookmarked__shows movies-container">
                            {renderSearchedShows}
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="bookmarked__heading">
                            Bookmarked movies
                        </h2>
                        <div className="bookmarked__movies movies-container">
                            {renderMovieCards}
                        </div>
                        <h2 className="bookmarked__heading">
                            Bookmarked TV series
                        </h2>
                        <div className="bookmarked__tv-series movies-container">
                            {renderTVSeriesCards}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Favourites;
