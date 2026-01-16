import React from 'react';
import Block from './Block';
import './Services.css';
import { SITE_URL } from '../../constants';

const Services = () => {
    return (
        <div className="background-service">
            <h1 className="main">УСЛУГИ</h1>
            <div className="service">
                <Block
                    title="ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/diagnos.png`}
                    linkTo="/diagnostic"
                />
                <Block
                    title="ПАСПОРТИЗАЦИЯ АВТОМОБИЛЬНЫХ ДОРОГ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/pasport.png`}
                    linkTo="/passport"
                />
                <Block
                    title="ГЕОРАДАРНОЕ ОБСЛЕДОВАНИЕ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/geodar.png`}
                    linkTo="/georadar"
                />
                <Block
                    title="МОНИТОРИНГ ДОРОЖНОГО ДВИЖЕНИЯ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/monitor.png`}
                    linkTo="/monitoring"
                />
                <Block
                    title="ОПРЕДЕЛЕНИЕ ДОПУСТИМЫХ ОСЕВЫХ НАГРУЗОК АВТОТРАНСПОРТНЫХ СРЕДСТВ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/osevoe.png`}
                    linkTo="/axial_loads"
                />
                <Block
                    title="РАЗРАБОТКА КСОДД"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/ksodd.png`}
                    linkTo="/ksodd"
                />
                <Block
                    title="ГЕОДЕЗИЧЕСКИЕ УСЛУГИ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/geodesy.png`}
                    linkTo="/geodesy"
                />
                <Block
                    title="ОБСЛЕДОВАНИЕ И ПАСПОРТИЗАЦИЯ МОСТОВ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/most.png`}
                    linkTo="/bridge"
                />
                <Block
                    title="ТРАНСПОРТНАЯ БЕЗОПАСНОСТЬ"
                    buttonText="ПОДРОБНЕЕ"
                    backgroundImage={`${SITE_URL}/photo/ServicePhoto/defence.png`}
                    linkTo="/safety"
                />
            </div>
        </div>
    );
}

export default Services;
