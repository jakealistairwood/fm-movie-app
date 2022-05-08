import "./Search.scss";
import SearchIcon from "../../assets/icon-search.svg";

const Search = () => {
    return (
        <div className="searchbar">
            <img
                className="searchbar__img"
                src={SearchIcon}
                alt="search-icon"
            />
            <input
                className="searchbar__input"
                type="text"
                placeholder="Search for movies or TV series"
            />
        </div>
    );
};

export default Search;
