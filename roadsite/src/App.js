import { useRef, useEffect } from 'react';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = true;
      const playPromise = videoElement.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Autoplay prevented:', error);
        });
      }
    }
  }, []);

  return (
      <div>
        <img src="/logo192.png" alt="Logo" className="logo" />
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
        <div className="video">
            <video autoPlay muted loop>
                <source src="/media1.mp4" type="video/mp4"/>
                Ваш браузер не поддерживает тег video.
            </video>
        </div>
          <div>

          </div>
      </div>
  );
}

export default App;
