import React from "react";
import "./MovieCard.scss";
import TVSeriesIcon from "../../assets/icon-category-tv.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";
import BookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../assets/icon-bookmark-full.svg";

const MovieCard = ({ movie }) => {
    const { title, rating, year, category, thumbnail, isBookmarked } = movie;

    const renderCategoryIcon =
        category == "TV Series" ? TVSeriesIcon : MovieIcon;

    return (
        <div className="movie-card">
            <div
                className="movie-card__img"
                style={{
                    backgroundImage: `url(${thumbnail.regular.large})`,
                }}
            >
                <div className="trending-movie__bookmark">
                    {isBookmarked ? (
                        <img src={BookmarkFull} alt="add-to-favorites" />
                    ) : (
                        <img src={BookmarkEmpty} alt="add-to-favorites" />
                    )}
                </div>
            </div>
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
            <h5 className="movie-card__title">{title}</h5>
        </div>
    );
};

export default MovieCard;
