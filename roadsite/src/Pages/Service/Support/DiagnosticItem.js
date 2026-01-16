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
        <div className="diagnostic-wrapper">
            <h1 className="main-title-glass">{title}</h1>

            <div className="diagnostic-grid">
                {/* Left Column: Overview (Image + Description) */}
                <div className="glass-panel overview-panel">
                    <div className="image-container">
                        <img src={imageSrc} alt={imageAlt} className="diagnostic-image" />
                    </div>
                    <div className="description-text">
                        <p>{description}</p>
                    </div>
                </div>

                {/* Right Column: Work List */}
                <div className="glass-panel details-panel">
                    <h2 className="details-title">{actionsTitle}</h2>
                    <ul className="work-list">
                        {items && items.map((item, index) => (
                            <li key={index} className="work-item">
                                <span className="check-icon">✓</span>
                                <span className="item-text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DiagnosticItem;
