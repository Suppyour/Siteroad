import React from 'react';
import './Diagnostic.css';

function Diagnostic() {
    return (
        <section className="diagnostic">
            <div className="photo">
                <img src="photo/ServicePhoto/diagnos.jpg" alt="Фото"></img>
            </div>
            <div className="cursive">
                Диагностика автомобильных дорог включает в себя комплекс мероприятий по обследованию, оценке
                состояния дорожного полотна.
                Это позволяет определить текущее состояние дорог, выявить дефекты, а также разработать рекомендации
                по ремонту.
            </div>
            <div className="black-text">
                В ЗАВИСИМОСТИ ОТ ТЕХНИЧЕСКОГО ЗАДАНИЯ ВЫПОЛНЯЮТСЯ СЛЕДУЮЩИЕ МЕРОПРИЯТИЯ:
            </div>
            <div className="li">
                <li>Измерение и оценка ровности по IRI.</li>
                <li>Измерение геометрических параметров.</li>
                <li>Определение дефектов дорожного полотна.</li>
                <li>Измерение и оценка колейности.</li>
                <li>Измерение коэффициент сцепления.</li>
                <li> Определение упругого прогиба дорожной одежды</li>
                <li> Видеофиксация с привязкой к GPS координатам.</li>
            </div>
        </section>
    )
}

export default Diagnostic;