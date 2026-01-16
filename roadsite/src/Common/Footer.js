import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../constants';
import './footer.css';

const Footer = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <footer className="footer">
            <nav className="footer-nav">
                <a href="/">Главная</a>
                <a href="/vacancies">Вакансии</a>
                <a href="/equipment">Оборудование</a>
                <div className="social-icons">
                    <a href="https://t.me/siteroad_bot" target="_blank" rel="noopener noreferrer">
                        <img src={`${SITE_URL}/logo/telegram.png`} alt="Telegram" />
                    </a>
                    <a href="https://wa.me/79051833919" target="_blank" rel="noopener noreferrer">
                        <img src={`${SITE_URL}/logo/whatsapp.png`} alt="WhatsApp" />
                    </a>
                </div>
                <ul className="contact-list">
                    <li><a href="https://web.telegram.org/k/">+7 (123) 456-78-90</a></li>
                    <li><a href="mailto:example@example.com">example@example.com</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
