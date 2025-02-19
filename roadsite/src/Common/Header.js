import React from 'react';
import './header.css';

function Header() {
    return (
        <header>

            <div className="header-center">
                <nav>
                    <a href="#">Главная</a>
                    <a href="#">Услуги</a>
                    <a href="#">Портфолио</a>
                    <a href="#">Документы</a>
                    <a href="#">Контакты</a>
                    <a href="#">Оборудование</a>
                    <a href="#">Вакансии</a>
                </nav>
            </div>
            <div className="logoheader">
                <img src="/logo/logo192.png" alt="Логотип"/>
            </div>
        </header>
    );
}

export default Header;
