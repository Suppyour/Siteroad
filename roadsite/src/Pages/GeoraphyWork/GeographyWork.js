import React from 'react';
import './geo.css';
import { SITE_URL } from '../../constants';

const regionsData = [
    { name: "Ростовская область", emblem: `${SITE_URL}/emblem/rostov.png`, alt: "Эмблема Ростовской области" },
    { name: "Белгородская область", emblem: `${SITE_URL}/emblem/belgorod.png`, alt: "Эмблема Белгородской области" },
    { name: "Ульяновская область", emblem: `${SITE_URL}/emblem/ulyanovsk.png`, alt: "Эмблема Ульяновской области" },
    { name: "Самарская область", emblem: `${SITE_URL}/emblem/samara.png`, alt: "Эмблема Самарской области" },
];

function GeographyWork() {
    return (
        <main>
            <section className="section">
                <article>
                    <div className="regions-container">
                        <ul className="cards-regions">
                            {regionsData.map((region, index) => (
                                <li className="card-region" key={index}>
                                    <div className="card-content">
                                        <h3 className="card-title">{region.name.replace(' область', '')}</h3>
                                        <img
                                            src={region.emblem}
                                            alt={region.alt}
                                            className="card-image"
                                        />
                                        <h3 className="card-title">Область</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default GeographyWork;
