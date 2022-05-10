import "./Search.scss";
import SearchIcon from "../../assets/icon-search.svg";

const Search = ({ handleSearchInput, placeholderText, handleSearch }) => {
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
                placeholder={placeholderText}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
