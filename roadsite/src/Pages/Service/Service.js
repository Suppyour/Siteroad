import React from 'react';
import Block from './Block';
import './Service.css';

function Service() {
    return (
        <div className="background-service">
            <h1>УСЛУГИ</h1>
                <div className="service">
                    <Block title="ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ" buttonText="ПОДРОБНЕЕ" />
                    <Block title="ПАСПОРТИЗАЦИЯ АВТОМОБИЛЬНЫХ ДОРОГ" buttonText="ПОДРОБНЕЕ" />
                    <Block title="ГЕОДАРНОЕ ОБСЛЕДОВАНИЕ" buttonText="ПОДРОБНЕЕ" />
                    <Block title="МОНИТОРИНГ ДОРОЖНОГО ДВИЖЕНИЯ" buttonText="ПОДРОБНЕЕ" />
                    <Block title="ОПРЕДЕЛЕНИЕ ДОПУСТИМЫХ ОСЕВЫХ НАГРУЗОК АВТОТРАНСПОРТНЫХ СРЕДСТВ" buttonText="ПОДРОБНЕЕ" />
                    <Block title="РАЗРАБОТКА КСОДД" buttonText="ПОДРОБНЕЕ" />
                    <Block title="ГЕОДЕЗИЧЕСКИЕ УСЛУГИ" buttonText="ПОДРОБНЕЕ" />
                    <Block title="ОБСЛЕДОВАНИЕ И ПАСПОРТИЗАЦИЯ МОСТОВ" buttonText="ПОДРОБНЕЕ" />
                    <Block title="ТРАНСПОРТНАЯ БЕЗОПАСНОСТЬ" buttonText="ПОДРОБНЕЕ" />
                    <Block title="ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ" buttonText="ПОДРОБНЕЕ" />
                </div>
        </div>
    );
}

export default Service;
