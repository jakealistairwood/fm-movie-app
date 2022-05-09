import "./Search.scss";
import SearchIcon from "../../assets/icon-search.svg";

const Search = ({ handleSearchInput }) => {
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
                onChange={handleSearchInput}
            />
        </div>
    );
};

export default Search;
