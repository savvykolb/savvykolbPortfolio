import React, { useState } from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import resume from "./skolb_Resume_08-2022.pdf"

const links = [
    {
        title: "Home",
        path: "/intro",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Resume",
        path: "/resume",
    },
    // {
    //     title: "Service",
    //     path: "/service",
    // },
    {
        title: "Portfolio",
        path: "/portfolio",
    },
    // {
    //     title: "Blog",
    //     path: "/blog",
    // },
    {
        title: "Testimonial",
        path: "/testimonial",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

function Header() {
    let { url } = useRouteMatch();

    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplaySidenav(!displaySidenav);
    };

    return (
        <>
            <header className="app-header app-header-1">
                {/* <div className="header-logo">
                    <Link to={`url`.replace(/([^:])(\/\/+)/g, "$1/")}>savvykolb.</Link>
                </div> */}
                <button className="button button-menu" onClick={(e) => handleClick(e)}>
                    <span></span>
                </button>
                <ul className="header-dots">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="circle"></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="header-menu">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="anchor">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="header-follow">
                    <ul>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/savvykolb/">
                                <FaLinkedin className="side-icon" />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/snk923">
                                <FaGithub className="side-icon" />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href={resume} download="skolb_Resume_08-2022.pdf">
                                <FaFile className="side-icon" />
                            </a>
                        </li>
                    </ul>
                    <p>More Info</p>
                </div>
            </header>
            <div className={`app-sidenav ${displaySidenav && "active"}`}>
                <div className="sidenav-menu">
                    {/* <div className="logo">
                        <Link to={`url`.replace(/([^:])(\/\/+)/g, "$1/")}>Miro</Link>
                    </div> */}
                    <button className="button" onClick={(e) => handleClick(e)}></button>
                    <ul className="sidenav-nav">
                        {links.map((item, index) => (
                            <li key={index} onClick={(e) => handleClick(e)}>
                                <NavLink to={`${url}${item.path}`.replace(/([^:])(\/\/+)/g, "$1/")} activeClassName="active">
                                    <span className="anchor">{item.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="sidenav-links">
                        <ul>
                            <li>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/savvykolb/">
                                    <FaLinkedin className="icon" />
                                </a>
                            </li>
                            <li>
                                <a target='_blank' rel="noopener noreferrer" href="https://github.com/snk923">
                                    <FaGithub className="icon" />
                                </a>
                            </li>
                            <li>
                                <a target='_blank' rel="noopener noreferrer" href={resume} download="skolb_Resume_08-2022.pdf">
                                    <FaFile className="icon" />
                                </a>
                            </li>
                        </ul>
                        <p>More Info</p>
                    </div>
                </div>
                <span className="sidenav-close" />
            </div>
        </>
    );
}

export default Header;
