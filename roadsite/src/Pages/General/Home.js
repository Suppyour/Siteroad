import React from 'react';
import './Home.css';

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
                <button className="button">заказать услугу</button>
                <button className="button">наши услуги</button>
            </div>
        </div>
    );
}

export default Home;
