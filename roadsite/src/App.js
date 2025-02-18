import './video.css';
import './footer.css';
import { useRef, useEffect } from 'react';
import Footer from './Footer';
import Header from "./Header";
import Logo from './Logo';
import Content from "./Content";
import NextBlock from "./NextBlock";

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
        <div className="video">
          <video ref={videoRef} autoPlay muted loop>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>
        <Logo/>
        <Header/>
        <Content/>
        <NextBlock/>
        <Footer/>
      </div>
  );
}

export default App;
