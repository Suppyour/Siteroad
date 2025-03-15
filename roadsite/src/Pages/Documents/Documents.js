import React from 'react';
import './Documents.css';
import samplePDF1 from './PODD.pdf';
import samplePDF2 from './Passport.pdf';
import samplePDF3 from './Technical_otchet.pdf';

function Documents() {
    const documents = [
        { name: 'Проект организации дорожного движения', file: samplePDF1 },
        { name: 'Технический паспорт', file: samplePDF2 },
        { name: 'Технический отчет', file: samplePDF3 },
    ];

    return (
        <div className="document-container">
            {documents.map((doc, index) => (
                <a
                    key={index}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                >
                    <div className="card">
                        <span>{doc.name}</span>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Documents;
