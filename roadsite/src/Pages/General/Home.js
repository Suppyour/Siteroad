import React, {useEffect, useRef, useState} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
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
        <div className="content-container">
            <Modal active={modalActive} setActive={setModalActive}/>
            <div className="video">
                <video ref={videoRef} autoPlay muted loop>
                    <source src="/background.mp4" type="video/mp4"/>
                </video>
            </div>
            <p className="main-title">
                ДИАГНОСТИКА <span className="highlight">АВТОМОБИЛЬНЫХ</span>
            </p>
            <p className="main-title">
                ДОРОГ
            </p>
            <p className="text">Ваш надежный партнер в дорожном строительстве</p>
            <p className="text">Диагностика, контроль, безопасность</p>

            <div className="buttons-row">
                <button className="button" onClick={() => setModalActive(true)}>Заказать услугу</button>
                <Link to="/services" className="button">Наши услуги</Link>
            </div>
        </div>
    );
}

export default Home;
