import './Common/video.css';
import './Common/footer.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Common/Footer';
import Home from './Pages/General/Home';
import Services from './Pages/Service/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import Documents from './Pages/Documents/Documents';
import Contacts from './Pages/Contacts/Contacts';
import Vacancies from './Pages/Vacancies/Vacancies';
import Diagnostic from "./Pages/Service/Support/diagnostic";
import Passport from "./Pages/Service/Support/passport";
import Georadar from "./Pages/Service/Support/georadar";
import Monitoring from "./Pages/Service/Support/monitoring";
import Axial from "./Pages/Service/Support/axial";
import Ksodd from "./Pages/Service/Support/ksodd";
import Navbar from "./Common/Navbar";
import GeographyWork from "./Pages/GeoraphyWork/GeographyWork";
import React from "react";
import './App.css';
import { SITE_URL } from './constants';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './Common/PageTransition';

function MainLayout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Inline style with dynamic path to background image
    const bgStyle = !isHome
        ? { backgroundImage: `url(${SITE_URL}/photo/backgroundPhoto.png)` }
        : {};

    return (
        <div className={`page-container ${!isHome ? 'global-bg' : ''}`} style={bgStyle}>
            <main className="content">
                <AnimatePresence mode="wait">
                    <PageTransition key={location.pathname}>
                        <Navbar />
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/documents" element={<Documents />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/vacancies" element={<Vacancies />} />
                            <Route path="/diagnostic" element={<Diagnostic />} />
                            <Route path="/passport" element={<Passport />} />
                            <Route path="/georadar" element={<Georadar />} />
                            <Route path="/monitoring" element={<Monitoring />} />
                            <Route path="/axial_loads" element={<Axial />} />
                            <Route path="/ksodd" element={<Ksodd />} />
                            <Route path="/regions" element={<GeographyWork />} />
                        </Routes>
                    </PageTransition>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        // Set basename from constants
        <Router basename={SITE_URL}>
            <MainLayout />
        </Router>
    );
}

export default App;
