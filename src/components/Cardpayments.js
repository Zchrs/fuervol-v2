import React from 'react';
import { Link, Outlet , useNavigate} from 'react-router-dom';


import './css/cardpayments.css';


const Cardpayments = ({tittleP, tittleS, qrImg, text, subTittle}) => {
    const navigate = useNavigate();
    const returnToBack = () =>{
        navigate(-1);
    }

    return (
        <div className='card-payments'>
            <h1>{tittleP}</h1>
            <h2>{tittleS}</h2>
            <div className='div'>{qrImg}</div>
            <h3>Or</h3>
            <strong>{subTittle}</strong>
            <p>{text}</p>
            <button onClick={returnToBack}></button>
            <Link to="/"><button></button></Link>
        </div>
    );
};
const Usdtnetworksoptions = () =>{
    const navigate = useNavigate();
    const returnToBack = () =>{
        navigate('/Donations');
    }
    return(
    <div className='usdt-network-options'>
        <h1>Selecciona tu red de envío Usdt.</h1>
        <ul>
            <li>
                <Link className='link-usdt' to="/Donations/Payments/Usdt/Send-Usdt-network-TRX">Enviar usdt con red TRX (TRC-20)</Link>
            </li>
            <li>
                <Link className='link-usdt-y' to="/Donations/Payments/Usdt/Send-Usdt-network-BSC">Enviar usdt con red BSC (BEP-20)</Link>
            </li>
            <li>
                <Link className='link-usdt-g' to="/Donations/Payments/Usdt/Send-Usdt-network-ETH">Enviar usdt con red ETH (ERC-20)</Link>
            </li>
        </ul>
        <Outlet />
        <button onClick={returnToBack}></button>
        <Link to="/"><button></button></Link>
    </div>
    );
};

export {Cardpayments, Usdtnetworksoptions};