import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Логотип слева */}
                <div className="footer-logo">
                    <img src="/logo/logo192.png" alt="Logo" className="logo" />
                </div>
                {/* Меню ссылок */}
                <nav className="footer-menu">
                    <a>Главная</a>
                    <a>Услуги</a>
                    <a>Контакты</a>
                    <a>Вакансии</a>
                </nav>
                {/* Контактная информация */}
                <div className="footer-contacts">
                    <p>atlas59@inbox.ru</p>
                    <p>+7 (123) 456-78-90</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
