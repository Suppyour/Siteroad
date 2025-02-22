import './Common/video.css';
import './Common/footer.css';
import { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Common/Footer';
import Header from './Common/Header';
import Home from './Pages/General/Home';
import Services from './Pages/Service/Service';
import Portfolio from './Pages/Portfolio/Portfolio';
import Documents from './Pages/Documents/Documents';
import Contacts from './Pages/Contacts/Contacts';
import Equipment from './Pages/Equipment/Equipment';
import Vacancies from './Pages/Vacancies/Vacancies';
import NextBlock from './Pages/General/NextBlock';
import nextBlock from "./Pages/General/NextBlock";

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
        <Router>
            <div>
                <div className="video">
                    <video ref={videoRef} autoPlay muted loop>
                        <source src="/background.mp4" type="video/mp4" />
                    </video>
                </div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/equipment" element={<Equipment />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
