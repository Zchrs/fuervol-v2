import { HashRouter, Routes, Route } from 'react-router-dom';
// import { animateScroll as scroll } from "react-scroll";

import {useEffect, useState} from 'react';
import ReactLoading from 'react-loading';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Home from './components/Home';

// import Articlehome from './components/Articlehome';

// import logo from './logo.svg';

import Donations from './components/Donations';
import Contact from './components/Contact';
import Notfound404 from './components/Notfound404';

import { 
  Paymentbtc, 
  Paymenteth, 
  Paymentusdt, 
  Paymentqrusdt, 
  Paymentqrusdtbsc, 
  Paymentqrusdterc, 
  Paymentpaypal
} from './components/Payments';

import {
  Projects, 
  Abouts, 
  Mision, 
  Vision,
  Program, 
  Volunteers, 
  Faq, 
  Legal,
  Privacy
} from './components/Sections';
// import Loader from './components/Loader';

import './components/css/loader.css';
import './App.css';


function App({tittleP, tittleS, qrImg, text}) {


    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    useEffect (() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((json) => {
            setLoading(true);
            setCompleted(true)

            setTimeout(() => {
                setCompleted(true);
            }, 4000)

        }, 6000);

    }, []);

  return (
    <>
    {
      !completed ? (
        <>
        { 
          !loading ? (
                      <div className='preloader' id='preloader'>
                            <div className='img'>
                            </div>
                            <ReactLoading type={'balls'} color={'#ADD639'} height={30} width={30} className='bars' />
                      </div>
          ) : (   <>Hecho!</> 
        )}
        </>
      ) : (
              <HashRouter>
                {/* <Loader /> */}
                  <Navbar />

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Volunteers" element={<Volunteers />} />
                    <Route path="/Faq" element={<Faq />} />
                    <Route path="/Legal-docs" element={<Legal />} />
                    <Route path="/Privacy-policy" element={<Privacy />} />

                    <Route path="/About-us" element={<Abouts />} />
                    <Route path="/Mision" element={<Mision />} />
                    <Route path="/Vision" element={<Vision />} />
                    <Route path="/Program" element={<Program />} />
                    <Route path="/Projects" element={<Projects />} />

                    <Route path="/Donations" element={<Donations />} >
                      <Route path=":Payments/btc" element={<Paymentbtc />} />
                      <Route path=":Payments/Eth" element={<Paymenteth />} />

                        <Route path=":Payments/Usdt" element={<Paymentusdt />} >
                          <Route path=":Send-Usdt-network-TRX" element={<Paymentqrusdt />} />
                          <Route path=":Send-Usdt-network-BSC"  element={<Paymentqrusdtbsc />} /> 
                          <Route path=":Send-Usdt-network-ETH"  element={<Paymentqrusdterc />} />
                        </Route>

                      <Route path=":Payments/Pay-to-paypal" element={<Paymentpaypal />} />

                    </Route>

                    <Route path="*" element={<Notfound404 />} />
                  </Routes>
                  <Contact />
                  <Sponsors />
                  <Footer />
              </HashRouter>
            )}
    </>

  );
}

export default App;
