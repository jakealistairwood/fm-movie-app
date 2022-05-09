import React from "react";
import "./MovieCard.scss";
import TVSeriesIcon from "../../assets/icon-category-tv.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";

const MovieCard = ({ movie }) => {
    const renderCategoryIcon =
        movie.category == "TV Series" ? TVSeriesIcon : MovieIcon;

    return (
        <div className="movie-card">
            <img
                className="movie-card__img"
                src={movie.thumbnail.regular.large}
                alt="movie-thumbnail"
            />
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
            <h4 className="movie-card__title">{movie.title}</h4>
        </div>
    );
};

export default MovieCard;
