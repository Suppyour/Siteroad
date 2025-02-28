import React from 'react';
import Block from './Block';
import './Service.css';

function Service() {
    return (
        <div className="background-service">
            <div className="main">УСЛУГИ</div>
            <div className="service">
                <Block
                    title="ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/diagnos.jpg"
                    linkTo="/Diagnostic"
                />
                <Block
                    title="ПАСПОРТИЗАЦИЯ АВТОМОБИЛЬНЫХ ДОРОГ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/pasport.jpeg"
                />
                <Block
                    title="ГЕОРАДАРНОЕ ОБСЛЕДОВАНИЕ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/geodar.webp"
                />
                <Block
                    title="МОНИТОРИНГ ДОРОЖНОГО ДВИЖЕНИЯ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/monitor.png"
                />
                <Block
                    title="ОПРЕДЕЛЕНИЕ ДОПУСТИМЫХ ОСЕВЫХ НАГРУЗОК АВТОТРАНСПОРТНЫХ СРЕДСТВ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/osevoe.jpg"
                />
                <Block
                    title="РАЗРАБОТКА КСОДД"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/ksodd.jpg"
                />
                <Block
                    title="ГЕОДЕЗИЧЕСКИЕ УСЛУГИ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/geodesy.jpg"
                />
                <Block
                    title="ОБСЛЕДОВАНИЕ И ПАСПОРТИЗАЦИЯ МОСТОВ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/most.jpg"
                />
                <Block
                    title="ТРАНСПОРТНАЯ БЕЗОПАСНОСТЬ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage="photo/ServicePhoto/defence.jpg"
                />
            </div>
        </div>
    );
}

export default Service;
