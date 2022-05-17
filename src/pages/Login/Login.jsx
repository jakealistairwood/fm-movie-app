import { useState } from "react";
import "./Login.scss";
import Logo from "../../assets/logo.svg";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ isAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        if (email.includes("@") && password.length > 7) {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    const user = userCredential.user;
                    isAuthenticated(user);
                    // setUser(user);
                    navigate("/dashboard/");
                })
                .catch(err => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    console.log(`${errorCode}: ${errorMessage}`);
                });
        } else {
            console.log("Invalid Credentials. Please Try Again!");
        }
    };

    return (
        <main className="login">
            <img src={Logo} alt="app-logo" />
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <label htmlFor="userEmail"></label>
                <input
                    id="userEmail"
                    className="login-form__email md-text"
                    type="email"
                    placeholder="Email address"
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="userPassword"></label>
                <input
                    id="userPassword"
                    className="login-form__password md-text"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="login-form__btn primary-btn md-text">
                    Login to your account
                </button>
                <p className="login-form__message md-text">
                    Don't have an account? <Link to="/">Sign Up</Link>
                </p>
            </form>
        </main>
    );
};

export default Login;
