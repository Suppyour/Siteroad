import React from 'react';
import './Diagnostic.css';

const DiagnosticItem = ({
                            title,
                            imageSrc,
                            imageAlt,
                            description,
                            actionsTitle,
                            items
                        }) => {
    return (
        <section className="diagnostic">
            <div className="white">{title}</div>
            <figure className="photo">
                <img src={imageSrc} alt={imageAlt} />
            </figure>
            <article className="cursive">
                <p>{description}</p>
            </article>
            <section className="black-text">
                <p>{actionsTitle}</p>
            </section>
            <ol className="li">
                {items && items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </section>
    );
};

export default DiagnosticItem;
