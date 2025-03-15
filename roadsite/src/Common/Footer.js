import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <a href="/">Главная</a>
                <a href="/vacancies">Вакансии</a>
                <a href="/gallery">Галерея</a>
                <a href="/equipment">Оборудование</a>
                <div className="social-icons">
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                        <img src="/logo/telegram.png" alt="Telegram" />
                    </a>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <img src="/logo/whatsapp.png" alt="WhatsApp" />
                    </a>
                </div>
                <ul className="contact-list">
                    <li><a href="https://web.telegram.org/k/">7 (123) 456-78-90</a></li>
                    <li><a href="mailto:example@example.com">example@example.com</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
