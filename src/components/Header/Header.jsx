import React from "react";
import './Header.css';

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <div className="navbar">
                <p className="title">MedSync</p>
                <a className="login" href="#about">Login</a>
            </div>

            <h1 className={`head-text ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}>{headTitle}</h1>

        </div>
    )
}

export default Header;