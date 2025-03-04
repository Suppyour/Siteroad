import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-nav">
                <ul className="navbar-list">
                    <Link to="/" className= "navbar-button">Главная</Link>
                    <Link to="/services" className="navbar-button">Услуги</Link>
                    <Link to="/documents" className="navbar-button">Документы</Link>
                    <Link to="/equipment" className="navbar-button">Оборудование</Link>
                </ul>
                <div className="navbar-logo">Atlas</div>
            </nav>
        </header>
    );
};

export default Navbar;
