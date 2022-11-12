import { HashRouter, Routes, Route } from 'react-router-dom';
// import { animateScroll as scroll } from "react-scroll";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Home from './components/Home';
// import Articlehome from './components/Articlehome';

// import logo from './logo.svg';

import Aboutus from './components/Aboutus';
import Mision from './components/Mision';
import Program from './components/Program';
import Vision from './components/Vision';
import Donations from './components/Donations';
import Contact from './components/Contact';

import './App.css';



function App() {
  
  return (

    <HashRouter>
 
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-us" element={<Aboutus />} />
          <Route path="/Mision" element={<Mision />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/Program" element={<Program />} />
          <Route path="/Donations" element={<Donations />} />
          <Route path="*" element={<Notfound404 />} />
        </Routes>
        <Contact />
        <Sponsors />
        <Footer />
    </HashRouter>

  );
}

export default App;
