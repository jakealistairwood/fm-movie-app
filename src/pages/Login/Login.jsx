import "./Login.scss";
import Logo from "../../assets/logo.svg";

const Login = () => {
    return (
        <main className="login">
            <img src={Logo} alt="app-logo" />
            <form className="login-form">
                <h2>Login</h2>
                <label htmlFor="userEmail"></label>
                <input
                    id="userEmail"
                    className="login-form__email md-text"
                    type="email"
                    placeholder="Email address"
                />
                <label htmlFor="userPassword"></label>
                <input
                    id="userPassword"
                    className="login-form__password md-text"
                    type="password"
                    placeholder="Password"
                />
                <button className="login-form__btn primary-btn md-text">
                    Login to your account
                </button>
            </form>
        </main>
    );
};

export default Login;
