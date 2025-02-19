import './Common/video.css';
import './Common/footer.css';
import { useRef, useEffect } from 'react';
import Footer from './Common/Footer';
import Header from "./Common/Header";
import Logo from './Logo';
import Content from "./General/Content";
import NextBlock from "./General/NextBlock";

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
        <Header/>
        <Content/>
        <NextBlock/>
        <Footer/>
      </div>
  );
}

export default App;
