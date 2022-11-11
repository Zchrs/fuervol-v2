import React from 'react';
import {Link} from 'react-router-dom'
// import imgFB from '../img/facebook_logo.svg';
// import imgLi from '/src/img/linkedin-logo.svg';
// import imgIns from '/src/img/instagram_logo.svg';
// import imgYt from '/src/img/youtube-logo.svg';
// import imgFoo from '/src/img/logo-fundacion.svg';
import './css/footer.css';


const footer = () => {
    return (
      
        <footer className='footer'>
        <hr className='top' />
        <div className='footer_logo'>
          {/* <img class="footer_logo" src="./assets/img/logo-fundacion.svg" alt="" /> */}
        </div>
        <hr className='vertical' />
        <div>
          <h1>Más de nosotros</h1>
          <ul>
            <li><a href="/">Quiénes somos</a></li>
            <li><a href="/">Misión</a></li>
            <li><a href="/">Visión</a></li>
            <li><a href="/">Donar</a></li>
            <li><a href="/">Documentación legal (Pronto)</a></li>
            <li><a href="/">Fuervol Shop (Pronto)</a></li>
            <li><a href="/">Preguntas frecuentes</a></li>
            <li><a href="/" className='privacy_btn'>Política de privacidad</a></li>
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