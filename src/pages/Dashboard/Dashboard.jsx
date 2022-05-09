import { useState } from "react";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Movies from "../Movies/Movies";

const Dashboard = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput = e => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="container">
            <Search handleSearchInput={handleSearchInput} />
            <Navbar />
            <main className="dashboard">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;
