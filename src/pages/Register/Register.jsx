import { useState } from "react";
import "./Register.scss";
import Logo from "../../assets/logo.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Register = ({ isAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    let navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();

        if (
            email &&
            password &&
            passwordConfirmation &&
            passwordConfirmation === password
        ) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    const user = userCredential.user;
                    console.log(user);
                    isAuthenticated(user);
                    navigate("/dashboard/");
                })
                .catch(err => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    console.log(`${errorCode}: ${errorMessage}`);
                });
        } else {
            console.log("All fields required");
        }
    };

    return (
        <main className="register">
            <img src={Logo} alt="app-logo" />
            <form className="register-form" onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                <label htmlFor="userEmail"></label>
                <input
                    id="userEmail"
                    className="register-form__email md-text"
                    type="email"
                    placeholder="Email address"
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="userPassword"></label>
                <input
                    id="userPassword"
                    className="register-form__password md-text"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="userPasswordConfirm"></label>
                <input
                    id="userPasswordConfirm"
                    className="register-form__password-confirm md-text"
                    type="password"
                    placeholder="Repeat password"
                    onChange={e => setPasswordConfirmation(e.target.value)}
                />
                <button className="register-form__btn primary-btn md-text">
                    Create an account
                </button>
            </form>
        </main>
    );
};

export default Register;
