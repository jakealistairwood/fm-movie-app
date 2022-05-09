import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/icon-nav-home.svg";
import MoviesIcon from "../../assets/icon-nav-movies.svg";
import TVSeriesIcon from "../../assets/icon-nav-tv-series.svg";
import BookmarkIcon from "../../assets/icon-nav-bookmark.svg";
import AvatarImg from "../../assets/image-avatar.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={Logo} alt="app-logo" />
            <ul className="navbar__nav-links">
                <li className="navbar__nav-link">
                    <NavLink to="/dashboard">
                        <img src={HomeIcon} alt="link-homepage" />
                    </NavLink>
                </li>
                <li className="navbar__nav-link">
                    <NavLink to="/dashboard/movies">
                        <img src={MoviesIcon} alt="link-homepage" />
                    </NavLink>
                </li>
                <li className="navbar__nav-link">
                    <NavLink to="/dashboard/tv-series">
                        <img src={TVSeriesIcon} alt="link-homepage" />
                    </NavLink>
                </li>
                <li className="navbar__nav-link">
                    <NavLink to="/dashboard/favourites">
                        <img src={BookmarkIcon} alt="link-homepage" />
                    </NavLink>
                </li>
            </ul>
            <img
                className="navbar__user-avatar"
                src={AvatarImg}
                alt="user-avatar"
            />
        </nav>
    );
};

export default Navbar;
