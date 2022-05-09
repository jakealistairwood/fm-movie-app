import React from "react";
import "./MovieCard.scss";
import TVSeriesIcon from "../../assets/icon-category-tv.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";
import BookmarkIcon from "../../assets/icon-bookmark-empty.svg";

const MovieCard = ({ movie }) => {
    const renderCategoryIcon =
        movie.category == "TV Series" ? TVSeriesIcon : MovieIcon;

    return (
        <div className="movie-card">
            <div
                className="movie-card__img"
                style={{
                    backgroundImage: `url(${movie.thumbnail.regular.large})`,
                }}
            >
                <div className="trending-movie__bookmark">
                    <img src={BookmarkIcon} alt="add-to-favorites" />
                </div>
            </div>
            <div className="movie-card__info">
                <p className="sm-text">{movie.year}</p>
                <div className="circle-detail"></div>
                <div className="movie-card__category">
                    <img src={renderCategoryIcon} alt={movie.category} />
                    <p className="sm-text">{movie.category}</p>
                </div>
                <div className="circle-detail"></div>
                <p className="sm-text">{movie.rating}</p>
            </div>
            <h5 className="movie-card__title">{movie.title}</h5>
        </div>
    );
};

export default MovieCard;
