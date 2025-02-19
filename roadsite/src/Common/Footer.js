import React from 'react';
import './footer.css';


function Footer() {
    return (
        <footer>
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
        </footer>
    );
}

export default Footer;
