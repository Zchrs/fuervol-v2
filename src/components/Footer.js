import React from 'react';
import {Link} from 'react-router-dom'

// import imgFB from '../img/facebook_logo.svg';
// import imgLi from '/src/img/linkedin-logo.svg';
// import imgIns from '/src/img/instagram_logo.svg';
// import imgYt from '/src/img/youtube-logo.svg';
// import imgFoo from '/src/img/logo-fundacion.svg';
import './css/footer.css';

  const top = () => {
    window.scrollTo(0, 0);
};

const footer = () => {
    return (
      
        <footer className='footer'>
        <hr className='top' />
        <div className='footer_logo'>
          
        </div>
        <hr className='vertical' />
        <div className='footer-link'>
          <h1>Más de nosotros</h1>
          <ul>
            <li onClick={top} ><Link className='footer-link' to="/About-us">Quiénes somos</Link></li>
            <li onClick={top} ><Link className='footer-link' to="/Mision">Misión</Link></li>
            <li onClick={top} ><Link className='footer-link' to="/Vision">Visión</Link></li>
            <li onClick={top} ><Link className='footer-link' to="/Donations">Donar</Link></li>
            <li onClick={top} ><Link className='footer-link' to="/Legal-docs">Documentación legal</Link></li>
            <li onClick={top} ><Link className='footer-link' to="/">Fuervol Shop (Pronto)</Link></li>
            <li onClick={top} ><Link className='footer-link' to="/Faq">Preguntas frecuentes</Link></li>
            <li onClick={top} ><Link className='footer-link' to="/Privacy-policy">Política de privacidad</Link></li>
          </ul>
        </div>
        <hr className='vertical' />
        <div  className='socialNetworks'>
          <h1>Síguenos</h1>
          <ul>
            <li>
              <Link className='linkFooter' to={"https://www.facebook.com/fuervolfundacion/"}>
                <i></i>
                </Link>
            </li>
            <li>
              <Link className='linkFooter' to={"https://www.linkedin.com/company/fuervolfundacion"}>
              <i></i>
                </Link>
            </li>
            <li>
              <Link className='linkFooter' to={"https://www.instagram.com/fuervolfundacion/"}>
                <i></i>
                </Link>
            </li>
            <li>
              <Link className='linkFooter' to={"/"}><i></i>
              </Link>
            </li>
          </ul>
        </div>
        <hr className='under' />
        <p className='copy'>
        <b>&copy;</b> Fundación comunidad terapéutica fuerza y voluntad 2002 -
          2022
        </p>
      </footer>
    );
};

export default footer;