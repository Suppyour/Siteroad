    import React from 'react';
    import './Contacts.css';

    function Contacts() {
        return (
            <section className="contacts">
                <h1>КОНТАКТЫ</h1>
                <p className = "cur">РЕКВИЗИТЫ</p>
                <ul className= "list">
                    <li>ИНН 590401911668</li>
                    <li>ОГНИП 322595800055404</li>
                    <li>р/с 40802810420000458490   ООО "Банк Точка"</li>
                    <li>БИК 044525104</li>
                    <li>к/с 30101810745374525104</li>
                    <li>тел. 89655696998</li>
                    <li>reznikovm@inbox.ru</li>
                </ul>
                <p className = "cur">ЮРИДИЧЕСКИЙ АДРЕС</p>
                <ul className= "list">
                <li>Адрес : 614109, Пермский край , г. Пермь</li>
                <li>
                    <a href="https://yandex.ru/maps/-/CHBZjCYI" target="_blank" style={{color: "grey"}} >Кировоградская д.180 кв 17</a>
                </li>
                </ul>
            </section>
        );
    }

    export default Contacts;
