import React from 'react';
import {Cardpayments, Usdtnetworksoptions} from './Cardpayments';
import Paypalbutton from './Paypalbutton';

import qrUsdtTrx from '../../src/img/qr-usdt-trx.png';
import qrUsdtBsc from '../../src/img/qr-usdt-bep20.png';
import qrUsdtERC from '../../src/img/qr-usdt-erc20.png';

import qrBtc from '../../src/img/qr-btc.jpg';
import qrEth from '../../src/img/qr-eth.jpg';
import qrPaypal from '../../src/img/qr-paypal.png';



import './css/payments.css';


// const initialOptions = {
//     "client-id": "test",
//     currency: "USD",
//     intent: "capture",
//     "data-client-token": "abc123xyz==",
// };

    var dinamyc = {
        h1_pse: 'Donar con PSE',
        h1_btc: 'Donar con BTC',
        h1_eth: 'Donar con ETH',
        h1_usdt: 'Donar con USDT',
        h1_paypal: 'Donar con Paypal',
    
        h2_qr_btc: 'Scan QR BTC',
        h2_qr_eth: 'Scan QR ETH',
        h2_qr_usdt: 'Scan QR USDT',
        h2_qr_paypal: 'Scan QR Paypal',
    
        qr_btc: <img src={qrBtc} alt="" />,
        qr_eth: <img src={qrEth} alt="" />,
        qr_Paypal: <img src={qrPaypal} alt="" />,
    
        p_Btc: '1LfaUeMG2UoUHyhdovmbAWRE52oSG33mSz',
        p_Eth: '0x5A9f14DAe809DD8f84cb822700F788d966961097 ',
        p_Paypal: <Paypalbutton />,
     
        p_wallet: 'Wallet address',

        p_usdt_trx: 'TRyFLPPSNuoqz1oVZ8Vwy1iHHw2oj7i9J5',
        p_usdt_bep: '0x5A9f14DAe809DD8f84cb822700F788d966961097',
        p_usdt_erc: 'x519C3051E7Bd336176E056cD60114e8113D03920'
    }


const Payments = ({tittleP, tittleS, qrImg, text}) => {

    return (
        <div className='modal-payments'>
            <Cardpayments />
        </div>
    );
};

const Paymentpaypal = ({tittleP, tittleS, qrImg, text, subTittle}) => {

    return (
        <div className='modal-payments'>
            <Cardpayments 
            tittleP={dinamyc.h1_paypal} 
            tittleS={dinamyc.h2_qr_paypal} 
            qrImg={dinamyc.qr_Paypal} 
            subTittle={dinamyc.p_Paypal}/>
        </div>
    );
};

const Paymenteth = ({tittleP, tittleS, qrImg, text}) => {

    return (
        <div className='modal-payments'>
            <Cardpayments 
            tittleP={dinamyc.h1_eth} 
            tittleS={dinamyc.h2_qr_eth} 
            qrImg={dinamyc.qr_eth} 
            text={dinamyc.p_Eth} 
            subTittle={dinamyc.p_wallet}/>
        </div>
    );
};

const Paymentbtc = ({tittleP, tittleS, qrImg, text}) => {

    return (
        <div className='modal-payments'>
            <Cardpayments 
            tittleP={dinamyc.h1_btc} 
            tittleS={dinamyc.h2_qr_btc} 
            qrImg={dinamyc.qr_btc} 
            text={dinamyc.p_Btc} 
            subTittle={dinamyc.p_wallet} />
        </div>
    );
};

const Paymentusdt = () => {

    return (
        <div className='modal-payments'>
            <Usdtnetworksoptions />
        </div>
    );
};

const Paymentqrusdt = () => {

    return (
        <div className='payment-qr'>
            <h1>Scan QR TRX</h1>
         
            <div className='img-qr' >
                <img src={qrUsdtTrx} alt="" />
            </div>
            <h3>Or</h3>
            <strong>Wallet address:</strong>
            <p>TRyFLPPSNuoqz1oVZ8Vwy1iHHw2oj7i9J5</p>
        </div>
    );
};
const Paymentqrusdtbsc = () => {

    return (
        <div className='payment-qr'>
            <h1>Scan QR BSC</h1>
         
            <div className='img-qr' >
                <img src={qrUsdtBsc} alt="" />
            </div>
            <h3>Or</h3>
            <strong>Wallet address:</strong>
            <p>0x5A9f14DAe809DD8f84cb822700F788d966961097</p>
        </div>
    );
};

const Paymentqrusdterc = () => {

    return (
        <div className='payment-qr'>
            <h1>Scan QR ERC/20</h1>
         
            <div className='img-qr' >
                <img src={qrUsdtERC} alt="" />
            </div>
            <h3>Or</h3>
            <strong>Wallet address:</strong>
            <p>0x519C3051E7Bd336176E056cD60114e8113D03920</p>
        </div>
    );
};
export {Payments, Paymentbtc, Paymenteth, Paymentusdt, Paymentqrusdt, Paymentqrusdtbsc, Paymentqrusdterc, Paymentpaypal } ;