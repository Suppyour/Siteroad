import React from 'react';
import './geo.css';
import { SITE_URL } from '../../constants';

const regionsData = [
    { name: "Ростовская область", emblem: `${SITE_URL}/emblem/rostov.png`, alt: "Эмблема Ростовской области" },
    { name: "Белгородская область", emblem: `${SITE_URL}/emblem/belgorod.png`, alt: "Эмблема Белгородской области" },
    { name: "Ульяновская область", emblem: `${SITE_URL}/emblem/ulyanovsk.png`, alt: "Эмблема Ульяновской области" },
    { name: "Самарская область", emblem: `${SITE_URL}/emblem/samara.png`, alt: "Эмблема Самарской области" },
];

const GeographyWork = () => {
    return (
        <div className="geo-wrapper">
            <h1 className="main-title-glass">ГЕОГРАФИЯ РАБОТ</h1>

            <ul className="geo-grid">
                {regionsData.map((region, index) => (
                    <li className="glass-card geo-card" key={index}>
                        <div className="card-content">
                            <div className="emblem-wrapper">
                                <img
                                    src={region.emblem}
                                    alt={region.alt}
                                    className="card-image"
                                />
                            </div>
                            <h3 className="card-title">
                                {region.name.replace(' область', '')}
                                <span className="region-suffix">Область</span>
                            </h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GeographyWork;
