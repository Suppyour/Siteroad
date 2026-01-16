import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-wrapper">
            <h1 className="main-title-glass">КОНТАКТЫ</h1>

            <div className="contacts-grid">
                {/* Left Column: Contact Info */}
                <div className="glass-panel contact-info-panel">
                    <h2>Свяжитесь с нами</h2>

                    <div className="contact-item">
                        <span className="icon">📞</span>
                        <div className="details">
                            <span className="label">Телефон</span>
                            <a href="tel:89655696998" className="value">8 (965) 569-69-98</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="icon">✉️</span>
                        <div className="details">
                            <span className="label">Email</span>
                            <a href="mailto:reznikovm@inbox.ru" className="value">reznikovm@inbox.ru</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="icon">📍</span>
                        <div className="details">
                            <span className="label">Юридический адрес</span>
                            <span className="value">614109, Пермский край, г. Пермь,<br /> ул. Кировоградская д.180 кв 17</span>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=56.004421%2C58.017838&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM1MzYwORJO0KDQvtGB0YHQuNGPLCDQn9C10YDQvNGMLCDQmtC40YDQvtCy0L7Qs9GA0LDQtNGB0LrQsNGPINGD0LvQuNGG0LAsIDE4MCIKDS0gXEIV9OZbQg%2C%2C&z=17"
                            width="100%"
                            height="240"
                            frameBorder="0"
                            allowFullScreen={true}
                            title="Yandex Map"
                        ></iframe>
                    </div>
                </div>

                {/* Right Column: Requisites */}
                <div className="glass-panel requisites-panel">
                    <h2>Реквизиты</h2>
                    <ul className="requisites-list">
                        <li>
                            <span className="key">ИНН</span>
                            <span className="val">590401911668</span>
                        </li>
                        <li>
                            <span className="key">ОГНИП</span>
                            <span className="val">322595800055404</span>
                        </li>
                        <li>
                            <span className="key">Расчетный счет</span>
                            <span className="val">40802810420000458490</span>
                        </li>
                        <li>
                            <span className="key">Банк</span>
                            <span className="val">ООО "Банк Точка"</span>
                        </li>
                        <li>
                            <span className="key">БИК</span>
                            <span className="val">044525104</span>
                        </li>
                        <li>
                            <span className="key">Корр. счет</span>
                            <span className="val">30101810745374525104</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
