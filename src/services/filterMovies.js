import movieData from "../assets/data.json";

export const trendingMovies = movieData.filter(movie => {
    return movie.isTrending;
});

export const recommendedMovies = movieData.filter(movie => {
    return movie.isTrending == false;
});

export const tvSeriesList = movieData.filter(movie => {
    return movie.category == "TV Series";
});

export const movieList = movieData.filter(movie => {
    return movie.category == "Movie";
});
