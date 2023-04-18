import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
import LogoA from "../../assets/images/logo-no-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faEnvelope, faFolderOpen, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);


    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoA} alt="logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    icon={faClose}
                    color='#07bcf9'
                    size="3x"
                    className="close-icon"
                    onClick={() => setShowNav(false)}
                />
            </nav>
            <ul className={showNav ? 'mobile-show' : ''}>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/alejandro-almaguer-socarr%C3%A1s-29860b25a/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/alexsoul99"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://t.me/AlexSoul99">
                        <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                icon={faBars}
                color='#07bcf9'
                size="3x"
                className="hamburguer-icon"
                onClick={() => setShowNav(true)}
            />
        </div>
    )
};

export default Sidebar;
