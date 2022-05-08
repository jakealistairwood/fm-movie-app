import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const PageRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route default path="/register" element={<Register />} />
                    <Route default path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
};

export default PageRoutes;
