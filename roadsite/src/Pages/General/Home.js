import React, {useEffect, useRef} from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {

    const videoRef = useRef(null);

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
                <Link to="/services" className="button">заказать услугу</Link>
                <Link to="" className="button">наши услуги</Link>
            </div>
        </div>
    );
}

export default Home;
