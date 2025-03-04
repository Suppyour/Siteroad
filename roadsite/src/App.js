import './Common/video.css';
import './Common/footer.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Common/Footer';
import Header from './Common/Header';
import Home from './Pages/General/Home';
import Services from './Pages/Service/Service';
import Portfolio from './Pages/Portfolio/Portfolio';
import Documents from './Pages/Documents/Documents';
import Contacts from './Pages/Contacts/Contacts';
import Equipment from './Pages/Equipment/Equipment';
import Vacancies from './Pages/Vacancies/Vacancies';
import Diagnostic from "./Pages/Service/Support/diagnostic";
import Passport from "./Pages/Service/Support/passport";
import Georadar from "./Pages/Service/Support/georadar";
import Monitoring from "./Pages/Service/Support/monitoring";
import Axial from "./Pages/Service/Support/axial";
import Ksodd from "./Pages/Service/Support/ksodd";


function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/documents" element={<Documents/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/equipment" element={<Equipment/>}/>
                <Route path="/vacancies" element={<Vacancies/>}/>
                <Route path="/diagnostic" element={<Diagnostic/>}/>
                <Route path="/passport" element={<Passport/>}/>
                <Route path="/georadar" element={<Georadar/>}/>
                <Route path="/monitoring" element={<Monitoring/>}/>
                <Route path="/axial_loads" element={<Axial/>}/>
                <Route path="/ksodd" element={<Ksodd/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
