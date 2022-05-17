import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";

const PageRoutes = ({ user, isAuthenticated }) => {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Register isAuthenticated={isAuthenticated} />}
                    />
                    <Route
                        path="/login"
                        element={<Login isAuthenticated={isAuthenticated} />}
                    />
                    <Route element={<PrivateRoutes user={user} />}>
                        <Route
                            path="/dashboard/*"
                            element={<Dashboard user={user} />}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default PageRoutes;
