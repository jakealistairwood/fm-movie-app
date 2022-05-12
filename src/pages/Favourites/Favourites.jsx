import { useState } from "react";
import "./Favourites.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import uuid from "react-uuid";

const Favourites = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <Search
                handleSearch={handleSearch}
                placeholderText={"Search for bookmarked shows"}
            />
            <div className="bookmarked"></div>
        </>
    );
};

export default Favourites;
