import { useState } from "react";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import movieData from "../../assets/data.json";
import Home from "../Home/Home";
import Movies from "../Movies/Movies";
import TVSeries from "../TVSeries/TVSeries";
import Favourites from "../Favourites/Favourites";

const Dashboard = ({ user }) => {
    const [bookmarked, setBookmarked] = useState(false);
    const [movieList, setMovieList] = useState(movieData);

    const toggleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    return (
        <div className="container">
            <Navbar user={user} />
            <main className="dashboard">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                toggleBookmark={toggleBookmark}
                                movieList={movieList}
                            />
                        }
                    />
                    <Route
                        path="/movies"
                        element={
                            <Movies
                                toggleBookmark={toggleBookmark}
                                movieList={movieList}
                            />
                        }
                    />
                    <Route
                        path="/tv-series"
                        element={
                            <TVSeries
                                toggleBookmark={toggleBookmark}
                                movieList={movieList}
                            />
                        }
                    />
                    <Route
                        path="/favourites"
                        element={
                            <Favourites
                                toggleBookmark={toggleBookmark}
                                movieList={movieList}
                            />
                        }
                    />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;
