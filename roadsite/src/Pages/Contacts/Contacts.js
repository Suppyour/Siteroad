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
                    <a href="https://yandex.ru/maps/50/perm/house/kirovogradskaya_ulitsa_180/YU8YdgdkSUcOQFtifXxweX5qZw==/panorama/?l=stv%2Csta&ll=56.004421%2C58.017838&panorama%5Bdirection%5D=116.569737%2C5.407209&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=56.003678%2C58.018482&panorama%5Bspan%5D=98.926618%2C60.000000&tab=panorama&utm_source=share&z=17" target="_blank" style={{color: "grey"}} >Кировоградская д.180 кв 17</a>
                </li>
                </ul>
            </section>
        );
    }

    export default Contacts;
