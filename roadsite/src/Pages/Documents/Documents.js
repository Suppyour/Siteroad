import React from 'react';
import samplePDF1 from './PODD.pdf';
import samplePDF2 from './Passport.pdf';
import samplePDF3 from './Technical_otchet.pdf';

function Documents() {
    return (
        <div>
            <ul>
                <li>
                    <a href={samplePDF1} target="_blank" rel="noopener noreferrer">
                        Проект организации дорожного движения
                    </a>
                </li>
                <li>
                    <a href={samplePDF2} target="_blank" rel="noopener noreferrer">
                        Технический паспорт
                    </a>
                </li>
                <li>
                    <a href={samplePDF3} target="_blank" rel="noopener noreferrer">
                        Технический отчет
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Documents;
