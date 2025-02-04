import './video.css';
import './footer.css';
import { useRef, useEffect } from 'react';
import Footer from './Footer';

function App() {
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
      <div>
        <header>
          <div className="menu">
            <a>Главная</a>
            <a>Услуги</a>
            <a>Портфолио</a>
            <a>Нормативные документы</a>
            <a>Контакты</a>
            <a>Оборудование</a>
            <a>Вакансии</a>
          </div>
          <button className="btn">Заказать звонок</button>
        </header>
        <div className="general">
          <div className="first">
            <h1>ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ
              ДИАГНОСТИКА АВТОМОБИЛЬНЫХ ДОРОГ

            </h1>
          </div>
        </div>
        <div className="video">
          <video ref={videoRef} autoPlay muted loop>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>
        <Footer />
      </div>
  );
}

export default App;
