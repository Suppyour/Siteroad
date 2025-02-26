import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header>
            <div className="header-center">
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/services">Услуги</Link>
                    <Link to="/portfolio">Портфолио</Link>
                    <Link to="/documents">Документы</Link>
                    <Link to="/contacts">Контакты</Link>
                    <Link to="/equipment">Оборудование</Link>
                    <Link to="/vacancies">Вакансии</Link>
                </nav>
            </div>
            <div className="logo-header">
                <img src="/logo/logo192.png" alt="Логотип" />
            </div>
        </header>
    );
}

export default Header;
