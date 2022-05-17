import React from "react";
import "./Trending.scss";
import BookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../assets/icon-bookmark-full.svg";
import TVSeriesIcon from "../../assets/icon-category-tv.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";

const Trending = ({ movie }) => {
    const { title, rating, year, category, thumbnail, isBookmarked } = movie;

    const renderCategoryIcon =
        category == "TV Series" ? TVSeriesIcon : MovieIcon;

    return (
        <div
            className="trending-movie"
            style={{
                backgroundImage: `url(${thumbnail.trending.large})`,
            }}
        >
            <div className="trending-movie__bookmark">
                {isBookmarked ? (
                    <img src={BookmarkFull} alt="add-to-favorites" />
                ) : (
                    <img src={BookmarkEmpty} alt="add-to-favorites" />
                )}
            </div>
            <div className="trending-movie__overview">
                <div className="movie-card__info">
                    <p className="sm-text">{year}</p>
                    <div className="circle-detail"></div>
                    <div className="movie-card__category">
                        <img src={renderCategoryIcon} alt={category} />
                        <p className="sm-text">{category}</p>
                    </div>
                    <div className="circle-detail"></div>
                    <p className="sm-text">{rating}</p>
                </div>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Trending;
