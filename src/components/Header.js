import React from 'react';
import {Link} from "react-router-dom";

const Header = ({user}) => {
    return (

        <>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid bg-secondary bg-opacity-50">
                    <Link className={`navbar-brand ${user ? "bg-success" : "bg-secondary"} rounded p-2 m-2 text-light`}
                          to="/">
                        <i className="bi bi-door-open"></i>
                        Auth-app
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/free">Free Page</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${user ? "active" : "disabled"}`} aria-current="page"
                                      to="/protected">Protected Page</Link>
                            </li>
                            {user ?
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/logout">Log Out</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/login">Login</Link>
                                </li>
                            }
                            <li className="nav-item">
                                <Link className="nav-link active" to="/registration">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${user ? "active" : "disabled"}`} to="/admin">Admin Panel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${user ? "active" : "disabled"}`} to="/account">Your
                                    Account</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>

)
    ;
}

export default Header;