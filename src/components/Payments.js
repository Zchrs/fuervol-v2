import React from 'react';
import {Cardpayments, Usdtnetworksoptions} from './Cardpayments';



import './css/payments.css';

import qrBtc from '../../src/img/qr-btc.jpg';
import qrEth from '../../src/img/qr-eth.jpg';



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
    
        qr_btc: [qrBtc],
        qr_eth: [qrEth],
    
        p_Btc: '1LfaUeMG2UoUHyhdovmbAWRE52oSG33mSz',
        p_Eth: '0x5A9f14DAe809DD8f84cb822700F788d966961097 ',

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

const Paymenteth = ({tittleP, tittleS, qrImg, text}) => {

    return (
        <div className='modal-payments'>
            <Cardpayments tittleP={dinamyc.h1_eth} tittleS={dinamyc.h2_qr_eth} qrImg={dinamyc.qr_eth} text={dinamyc.p_Eth}/>
        </div>
    );
};

const Paymentbtc = ({tittleP, tittleS, qrImg, text}) => {

    return (
        <div className='modal-payments'>
            <Cardpayments tittleP={dinamyc.h1_btc} tittleS={dinamyc.h2_qr_btc} qrImg={dinamyc.qr_btc} text={dinamyc.p_Btc} />
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

const Paymentqr = () => {

    return (
        <div className='payment-qr'>
            <h1>Scan QR TRX</h1>
         
            <h3>Or</h3>
            <strong>Wallet address</strong>
            <p>dsfgertw56ty45</p>
        </div>
    );
};
export {Payments, Paymentbtc, Paymenteth, Paymentusdt, Paymentqr } ;