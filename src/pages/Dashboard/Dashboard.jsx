import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Movies from "../Movies/Movies";
import TVSeries from "../TVSeries/TVSeries";
import Favourites from "../Favourites/Favourites";

const Dashboard = () => {
    return (
        <div className="container">
            <Navbar />
            <main className="dashboard">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tv-series" element={<TVSeries />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;
