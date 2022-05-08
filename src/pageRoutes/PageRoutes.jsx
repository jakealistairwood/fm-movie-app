import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const PageRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route default path="/register" element={<Register />} />
                    <Route default path="/login" element={<Login />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                </Routes>
            </Router>
        </>
    );
};

export default PageRoutes;
