import { useState } from "react";
import "./TVSeries.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import { tvSeriesList } from "../../services/filterMovies";
import uuid from "react-uuid";

const TVSeries = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    let filteredTVSeriesCards = tvSeriesList.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const renderTVSeriesCards = filteredTVSeriesCards.map(series => {
        return <MovieCard movie={series} key={uuid()} />;
    });

    return (
        <>
            <Search
                placeholderText={"Search for TV series"}
                handleSearch={handleSearch}
            />
            <section className="tv-series">
                <h2 className="tv-series__heading">
                    {searchTerm
                        ? `Found ${filteredTVSeriesCards.length} result(s) for '${searchTerm}'`
                        : "TV Series"}
                </h2>
                <div className="movies-container">{renderTVSeriesCards}</div>
            </section>
        </>
    );
};

export default TVSeries;
