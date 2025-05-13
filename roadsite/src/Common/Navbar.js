import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="navbar">
            <div className="navbar-nav">
                <div className="navbar-logo">
                    <Link to="/" onClick={toggleMenu}><img src="/logo/logo192_negate.png" alt="Logo" /></Link>
                </div>

                <button className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="burger-line" />
                    <span className="burger-line" />
                    <span className="burger-line" />
                </button>

                <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
                    <li className="mobile-only"><Link to="/" onClick={toggleMenu} className="navbar-button">Главная</Link></li>
                    <li><Link to="/services" onClick={toggleMenu} className="navbar-button">Услуги</Link></li>
                    <li><Link to="/documents" onClick={toggleMenu} className="navbar-button">Документы</Link></li>
                    <li><Link to="/regions" onClick={toggleMenu} className="navbar-button">География работ</Link></li>
                    <li><Link to="/contacts" onClick={toggleMenu} className="navbar-button">Контакты</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;

