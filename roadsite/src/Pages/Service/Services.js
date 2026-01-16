import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { SITE_URL } from '../../constants';

const servicesData = [
    { title: "Диагностика автомобильных дорог", link: "/diagnostic", img: "diagnos.png" },
    { title: "Паспортизация автомобильных дорог", link: "/passport", img: "pasport.png" },
    { title: "Георадарное обследование", link: "/georadar", img: "geodar.png" },
    { title: "Мониторинг дорожного движения", link: "/monitoring", img: "monitor.png" },
    { title: "Определение допустимых осевых нагрузок", link: "/axial_loads", img: "osevoe.png" },
    { title: "Разработка КСОДД", link: "/ksodd", img: "ksodd.png" },
    { title: "Геодезические услуги", link: "/geodesy", img: "geodesy.png" },
    { title: "Обследование мостов", link: "/bridge", img: "most.png" },
    { title: "Транспортная безопасность", link: "/safety", img: "defence.png" },
];

const Services = () => {
    return (
        <div className="services-wrapper">
            <h1 className="main-title-glass">УСЛУГИ</h1>

            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <Link to={service.link} className="service-card" key={index}>
                        <div
                            className="service-bg"
                            style={{ backgroundImage: `url(${SITE_URL}/photo/ServicePhoto/${service.img})` }}
                        />
                        <div className="service-overlay">
                            <h2 className="service-title">{service.title}</h2>
                            <div className="service-cta">
                                <span>Подробнее</span>
                                <span className="arrow">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Services;
