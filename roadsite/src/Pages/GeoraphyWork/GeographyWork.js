import React from 'react';
import './geo.css';

function GeographyWork() {
    return (
        <main>
            <section className="section">
                <article>
                    <div className="regions-container">
                        <ul className="cards-regions">
                            <li className="card-region">
                                <div className="card-content">
                                    <h3 className="card-title">Ростовская</h3>
                                    <img
                                         src="/emblem/rostov.png"
                                         alt="Эмблема Ростовской области"
                                         className="card-image"
                                    />
                                    <h3 className="card-title">Область</h3>
                                </div>
                            </li>
                            <li className="card-region">
                                <div className="card-content">
                                    <h3 className="card-title">Белгородская</h3>
                                    <img
                                        src="/emblem/belgorod.png"
                                        alt="Эмблема Белгородской области"
                                        className="card-image"
                                    />
                                    <h3 className="card-title">Область</h3>
                                </div>
                            </li>
                            <li className="card-region">
                                <div className="card-content">
                                    <h3 className="card-title">Ульяновская</h3>
                                    <img
                                        src="/emblem/ulyanovsk.png"
                                        alt="Эмблема Ульяновской области"
                                        className="card-image"
                                    />
                                    <h3 className="card-title">Область</h3>
                                </div>
                            </li>
                            <li className="card-region">
                                <div className="card-content">
                                    <h3 className="card-title">Самарская</h3>
                                    <img
                                        src="/emblem/samara.png"
                                        alt="Эмблема Удмуртской Республики"
                                        className="card-image"
                                    />
                                    <h3 className="card-title">Область</h3>
                                </div>
                            </li>

                        </ul>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default GeographyWork;
