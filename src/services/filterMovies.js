import movieData from "../assets/data.json";

export const trendingMovies = movieData.filter(movie => {
    return movie.isTrending;
});

export const recommendedMovies = movieData.filter(movie => {
    return movie.isTrending === false;
});

export const tvSeriesList = movieData.filter(movie => {
    return movie.category === "TV Series";
});

export const movieList = movieData.filter(movie => {
    return movie.category === "Movie";
});

export const filterByCategory = (movieArr, categoryType) => {
    return movieArr.filter(movie => {
        return movie.category === categoryType;
    });
};

export const filterBySearchTerm = (movieArr, searchInput) => {
    return movieArr.filter(movie =>
        movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
};

export const getUpdatedSearchLength = filteredList => {
    return filteredList.length;
};
