import React from 'react';
import { Link, Outlet } from 'react-router-dom';


import './css/cardpayments.css';


const Cardpayments = ({tittleP, tittleS, qrImg, text}) => {

    return (
        <div className='card-payments'>
            <h1>{tittleP}</h1>
            <h2>{tittleS}</h2>
            <div>{qrImg}</div>
            <h3>Or</h3>
            <strong>Wallet address</strong>
            <p>{text}</p>
        </div>
    );
};
const Usdtnetworksoptions = () =>{
    return(
    <div className='usdt-network-options'>
        <h1>Selecciona tu red de envío Usdt.</h1>
        <ul>
            <li>
                <Link className='link-usdt' to="/Donations/Payments/Usdt/Send-network-trx">Enviar usdt con red TRX (TRC-20)</Link>
            </li>
            <li>
                <Link className='link-usdt-y' to="/">Enviar usdt con red BSC (BEP-20)</Link>
            </li>
            <li>
                <Link className='link-usdt-g' to="/">Enviar usdt con red ETH (ERC-20)</Link>
            </li>
        </ul>
        <Outlet />

    </div>
    );
};

export {Cardpayments, Usdtnetworksoptions};