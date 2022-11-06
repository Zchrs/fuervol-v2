import React from 'react';
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
      <div>
        {/* <img className='footer_logo' src={imgFoo} alt="" /> */}
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
      <div>
        <h1>Síguenos</h1>
        <ul className='socialNetworks'>
          <li>
            <a href="https://www.facebook.com/fuervolfundacion/">
            {/* <i><img src={imgFB} alt="" /></i> */}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/fuervolfundacion">
            {/* <i><img src={imgLi} alt="" /></i> */}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/fuervolfundacion/">
            {/* <i><img src={imgIns} alt="" /></i> */}
            </a>
          </li>
          <li>
            <a href="/">
            {/* <i><img src={imgYt} alt="" /></i> */}
            </a>
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