import React from 'react';
import samplePDF1 from './PODD.pdf';
import samplePDF2 from './Passport.pdf';
import samplePDF3 from './Technical_otchet.pdf';

function Portfolio() {
    return (
        <div>
            <a href={samplePDF1} target="_blank" rel="noopener noreferrer">
                Проект организации дорожного движения
            </a>
            <a href={samplePDF2} target="_blank" rel="noopener noreferrer">
                Технический паспорт
            </a>
            <a   href={samplePDF3} target="_blank" rel="noopener noreferrer">
                Технический отчет
            </a>
        </div>
    );
}

export default Portfolio;
