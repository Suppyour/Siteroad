import React from 'react';
import './footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-left">
                {/* Контактная информация */}
                <p>atlas59@inbox.ru</p>
                <p>+7(992) 227-82-04</p>
            </div>
            <div className="footer-center">
                {/* Навигационные ссылки */}
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/">Главная</Link>
                    <Link to="/">Главная</Link>
                    <Link to="/">Главная</Link>
                </nav>
            </div>
            <div className="footer-right">
                <img src="/logo/logo192.png" alt="Логотип"/>
            </div>
        </footer>
    );
}

export default Footer;
