import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Modal from "../../Common/Modal/Modal";

function Home() {

    const videoRef = useRef(null);
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.muted = true;
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.error('Autoplay prevented:', error);
                });
            }
        }
    }, []);

    return (
        <main className="home-container">
            <Modal active={modalActive} setActive={setModalActive} />
            <div className="video-background">
                <video ref={videoRef} autoPlay muted loop playsInline>
                    <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="home-content">
                <h1 className="main-title">
                    ДИАГНОСТИКА <span className="highlight">АВТОМОБИЛЬНЫХ</span>
                    <br />
                    ДОРОГ
                </h1>
                <div className="text-block">
                    <p>Ваш надежный партнер в дорожном строительстве</p>
                    <p>Диагностика, контроль, безопасность</p>
                </div>

                <div className="buttons-row">
                    <button className="button primary" onClick={() => setModalActive(true)}>Заказать услугу</button>
                    <Link to="/services" className="button secondary">Наши услуги</Link>
                </div>
            </div>
        </main>
    );
}

export default Home;
