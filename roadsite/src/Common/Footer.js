import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-center">
                <nav>
                    <a href="/">Главная</a>
                    <a href="/vacancies">Вакансии</a>
                    <a href="/gallery">Галерея</a>
                    <a href="/equipment">Оборудование</a>
                </nav>
            </div>
            <div className="contact-info">
                <div className="social-icons">
                    <img src="/icons/telegram.png" alt="Telegram" />
                    <img src="/icons/whatsapp.png" alt="WhatsApp" />
                    <span>+7 (123) 456-78-90</span>
                </div>
                <p>example@example.com</p>
            </div>
        </footer>
    );
}

export default Footer;
