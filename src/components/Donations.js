import React from 'react';
import {Link, Outlet} from 'react-router-dom';
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
                                 <li><Link className='pse_button' to="/"><i className='logo-Pse'></i>Donar con PSE</Link></li>
                                 <li><Link className='btc_button' to="/Donations/Payments/Btc"><i className='logo-Btc'></i>Donar con Bitcoin</Link></li>
                                 <li><Link className='eth_button' to="/Donations/Payments/Eth"><i className='logo-Eth'></i>Donar con Eth</Link></li>
                                 <li><Link className='usdt_button' to="/Donations/Payments/Usdt"><i className='logo-Usdt'></i>Donar con Usdt</Link></li>
                                 <li><Link className='paypal_button' to="/Donations/Payments/Paypal"><i className='logo-Paypal'></i>Donar con Paypal</Link></li>
                             </ul>
                        </div>
                    <Outlet />
        </div>
    );
};

export default Donations;