import React from "react";
import "./Trending.scss";
import BookmarkIcon from "../../assets/icon-bookmark-empty.svg";

const Trending = ({ movie }) => {
    console.log(movie);

    return (
        <div
            className="trending-movie"
            style={{
                backgroundImage: `url(${movie.thumbnail.trending.large})`,
            }}
        >
            <div className="trending-movie__bookmark">
                <img src={BookmarkIcon} alt="add-to-favorites" />
            </div>
            <div className="trending-movie__overview">
                <div></div>
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
};

export default Trending;
