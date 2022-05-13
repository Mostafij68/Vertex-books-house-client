import React from 'react';
import './Header.css';
import logo from './../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="vc-container">
                    <a className="navbar-brand d-flex align-items-center vc-navbar-brand" href="/">
                        <img width={30} src={logo} alt="" />
                        <span className='fs-2 vc-text2 vc-bold500'>Vertex Books House</span>
                    </a>
                    <button className="navbar-toggler vc-nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link vc-nav-link' to='/'>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;