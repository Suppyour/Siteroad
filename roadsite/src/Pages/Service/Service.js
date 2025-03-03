import React from 'react';
import Block from './Block';
import './Service.css';

function Service() {
    return (
        <div className="background-service">
            <h1 className="main">УСЛУГИ</h1>
            <div className="service">
                <Block
                    title="ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/diagnos.jpg"
                    linkTo="/diagnostic"
                />
                <Block
                    title="ПАСПОРТИЗАЦИЯ АВТОМОБИЛЬНЫХ ДОРОГ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/pasport.jpeg"
                    linkTo="/passport"
                />
                <Block
                    title="ГЕОРАДАРНОЕ ОБСЛЕДОВАНИЕ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/geodar.webp"
                    linkTo="/georadar"
                />
                <Block
                    title="МОНИТОРИНГ ДОРОЖНОГО ДВИЖЕНИЯ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/monitor.png"
                    linkTo="/monitoring"
                />
                <Block
                    title="ОПРЕДЕЛЕНИЕ ДОПУСТИМЫХ ОСЕВЫХ НАГРУЗОК АВТОТРАНСПОРТНЫХ СРЕДСТВ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/osevoe.jpg"
                    linkTo="/axial_loads"
                />
                <Block
                    title="РАЗРАБОТКА КСОДД"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/ksodd.jpg"
                    linkTo="/ksodd"
                />
                <Block
                    title="ГЕОДЕЗИЧЕСКИЕ УСЛУГИ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/geodesy.jpg"
                    linkTo="/geodesy"
                />
                <Block
                    title="ОБСЛЕДОВАНИЕ И ПАСПОРТИЗАЦИЯ МОСТОВ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/most.jpg"
                    linkTo="/bridge"
                />
                <Block
                    title="ТРАНСПОРТНАЯ БЕЗОПАСНОСТЬ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/defence.jpg"
                    linkTo="/safety"
                />
            </div>
        </div>
    );
}

export default Service;
