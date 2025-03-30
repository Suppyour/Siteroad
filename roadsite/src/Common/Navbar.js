import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-nav">
                <ul className="navbar-list">
                    <li>
                        <Link to="/" className="navbar-button">Главная</Link>
                    </li>
                    <li>
                        <Link to="/services" className="navbar-button">Услуги</Link>
                    </li>
                    <li>
                        <Link to="/documents" className="navbar-button">Документы</Link>
                    </li>
                    <li>
                        <Link to="/regions" className="navbar-button" style={{ paddingTop: "0.3vh" }}>География работ</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="navbar-button">Контакты</Link>
                    </li>
                </ul>
                <div className="navbar-logo">
                    <img src="/logo/logo192_negate.png" alt="Logo" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
