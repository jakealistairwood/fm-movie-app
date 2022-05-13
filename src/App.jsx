import "./App.scss";
import PageRoutes from "./pageRoutes/PageRoutes";
import { useState } from "react";

const App = () => {
    const [user, setUser] = useState(false);

    const isAuthenticated = response => {
        setUser(response);
    };

    return <PageRoutes user={user} isAuthenticated={isAuthenticated} />;
};

export default App;
