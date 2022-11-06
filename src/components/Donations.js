import React from 'react';
import './css/donations.css';

const Donations = () => {
    return (
        <div className='sectionIndexDonations'>
            <div className='img-Donations'>
                         <div className='DonationsImg'></div>
                         <h1>Donaciones</h1>
                         <h2>
                            FUNDACIÓN COMUNIDAD TERAPEUTICA FUERZA Y VOLUNTAD
                         </h2>
                        
                         </div>
                        
                         <p>
                            <strong>
                                 Elige un método de pago y ayúdanos a transformar la vida de muchas personas más.
                            </strong>
                             
                         </p>
                        <div className='payment-methods'>
                             <ul>
                                 <li><a className='pse_button' href="/"><i className='logo-Pse'></i>Donar con PSE</a></li>
                                 <li><a className='btc_button' href="/"><i className='logo-Btc'></i>Donar con Bitcoin</a></li>
                                 <li><a className='eth_button' href="/"><i className='logo-Eth'></i>Donar con Eth</a></li>
                                 <li><a className='usdt_button' href="/"><i className='logo-Usdt'></i>Donar con Usdt</a></li>
                                 <li><a className='paypal_button' href="/"><i className='logo-Paypal'></i>Donar con Paypal</a></li>
                             </ul>
                        </div>
        </div>
    );
};

export default Donations;