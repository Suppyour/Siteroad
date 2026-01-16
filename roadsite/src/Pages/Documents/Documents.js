import React from 'react';
import './Documents.css';
import samplePDF1 from './PODD.pdf';
import samplePDF2 from './Passport.pdf';
import samplePDF3 from './Technical_otchet.pdf';

const Documents = () => {
    const documents = [
        { name: 'Проект организации дорожного движения', file: samplePDF1, type: 'PDF' },
        { name: 'Технический паспорт', file: samplePDF2, type: 'PDF' },
        { name: 'Технический отчет', file: samplePDF3, type: 'PDF' },
    ];

    return (
        <div className="documents-wrapper">
            <h1 className="main-title-glass">ДОКУМЕНТЫ</h1>

            <div className="documents-grid">
                {documents.map((doc, index) => (
                    <a
                        key={index}
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card document-card"
                    >
                        <div className="doc-icon">📄</div>
                        <h3 className="doc-name">{doc.name}</h3>
                        <div className="doc-action">
                            <span>Скачать / Просмотреть</span>
                            <span className="arrow">→</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Documents;
