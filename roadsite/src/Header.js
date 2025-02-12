import React from 'react';
import './header.css';


function Header() {
    return (
        <header>
            <div className="footer-left">
                <p>atlas59@inbox.ru</p>
                <p>+7(992) 227-82-04</p>
            </div>
            <div className="footer-center">
                <nav>
                    <a href="#">Главная</a>
                    <a href="#">Услуги</a>
                    <a href="#">Контакты</a>
                    <a href="#">Вакансии</a>
                </nav>
            </div>
            <div className="footer-right">
                <img src="/logo/logo192.png" alt="Логотип"/>
            </div>
        </header>
    );
}

export default Header;
