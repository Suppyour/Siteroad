import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    // List of pages where navbar should be transparent to show the background image
    const transparentRoutes = ['/services', '/documents', '/regions', '/contacts', '/portfolio', '/vacancies',
        '/diagnostic', '/passport', '/georadar', '/monitoring', '/axial_loads', '/ksodd', '/bridge', '/safety', '/geodesy'];
    const isTransparentConfig = transparentRoutes.includes(location.pathname);

    // Determine class: 
    // - on Home: 'navbar-home' (absolute, top, overlay video)
    // - on Others: 'navbar-transparent' (relative/static, transparent bg, shows global-bg)
    let navClass = '';
    if (isHome) {
        navClass = 'navbar-home'; // Overlay video
    } else if (isTransparentConfig) {
        navClass = 'navbar-transparent'; // Show background image
    }

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`navbar ${navClass}`}>
            <div className="navbar-nav">
                <div className="navbar-logo">
                    <Link to="/" onClick={toggleMenu}><img src={`${process.env.PUBLIC_URL}/logo/logo192_negate.png`} alt="Logo" /></Link>
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

