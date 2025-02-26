import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="content-container">
            <p className="main-title">
                ДИАГНОСТИКА <span className="highlight">АВТОМОБИЛЬНЫХ</span>
            </p>
            <p className="main-title">
                ДОРОГ
            </p>
            <p className="text">Ваш надежный партнер в дорожном строительстве</p>
            <p className="text">Диагностика, контроль, безопасность</p>

            <div className="buttons-row">
                <Link to="/services" className="button">заказать услугу</Link>
                <Link to="" className="button">наши услуги</Link>
            </div>
        </div>
    );
}

export default Home;
