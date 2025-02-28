import React from 'react';
import './Diagnostic.css';

function Diagnostic() {
    return (
        <section className="diagnostic">
            <div className= "white">ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ</div>
            <figure className="photo">
                <img src="photo/ServicePhoto/diagnos.jpg" alt="Фото" />
            </figure>
            <article className="cursive">
                <p>Диагностика автомобильных дорог включает в себя комплекс мероприятий по обследованию, оценке
                    состояния дорожного полотна.
                    Это позволяет определить текущее состояние дорог, выявить дефекты, а также разработать рекомендации
                    по ремонту.</p>
            </article>
            <section className="black-text">
                <h2>В зависимости от технического задания выполняются следующие мероприятия:</h2>
            </section>
            <ol className="li">
                <li>Измерение и оценка ровности по IRI.</li>
                <li>Измерение геометрических параметров.</li>
                <li>Определение дефектов дорожного полотна.</li>
                <li>Измерение и оценка колейности.</li>
                <li>Измерение коэффициент сцепления.</li>
                <li>Определение упругого прогиба дорожной одежды.</li>
                <li>Видеофиксация с привязкой к GPS координатам.</li>
            </ol>
        </section>
    )
}

export default Diagnostic;
