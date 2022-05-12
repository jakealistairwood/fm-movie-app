import { useState } from "react";
import "./TVSeries.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import movieData from "../../assets/data.json";
import {
    filterByCategory,
    filterBySearchTerm,
    getUpdatedSearchLength,
} from "../../services/filterMovies";
import uuid from "react-uuid";

const TVSeries = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    let filteredTVSeries = filterByCategory(movieData, "TV Series");
    let updatedTVSeriesList = filterBySearchTerm(filteredTVSeries, searchTerm);

    const renderTVSeriesCards = updatedTVSeriesList.map(series => {
        return <MovieCard movie={series} key={uuid()} />;
    });

    let updatedSearchLength = getUpdatedSearchLength(updatedTVSeriesList);

    return (
        <>
            <Search
                placeholderText={"Search for TV series"}
                handleSearch={handleSearch}
            />
            <section className="tv-series">
                <h2 className="tv-series__heading">
                    {searchTerm
                        ? `Found ${updatedSearchLength} result(s) for '${searchTerm}'`
                        : "TV Series"}
                </h2>
                <div className="movies-container">{renderTVSeriesCards}</div>
            </section>
        </>
    );
};

export default TVSeries;
