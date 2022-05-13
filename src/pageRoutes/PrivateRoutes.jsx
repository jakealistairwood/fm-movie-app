import { Outlet } from "react-router-dom";
import Register from "../pages/Register/Register";

const PrivateRoutes = ({ user }) => {
    return user ? <Outlet /> : <Register />;
};

export default PrivateRoutes;
