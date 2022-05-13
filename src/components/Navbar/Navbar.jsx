import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TVSeriesIcon } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/icon-nav-bookmark.svg";
import AvatarImg from "../../assets/image-avatar.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={Logo} alt="app-logo" />
            <ul className="navbar__nav-links">
                <li className="navbar__nav-link">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                        end
                        // activeClassName="active"
                    >
                        {/* <img src={HomeIcon} alt="link-homepage" /> */}
                        <HomeIcon />
                    </NavLink>
                </li>
                <li className="navbar__nav-link">
                    <NavLink
                        to="/dashboard/movies"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        <MoviesIcon />
                    </NavLink>
                </li>
                <li className="navbar__nav-link">
                    <NavLink
                        to="/dashboard/tv-series"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        <TVSeriesIcon />
                    </NavLink>
                </li>
                <li className="navbar__nav-link">
                    <NavLink
                        to="/dashboard/favourites"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        <BookmarkIcon />
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
