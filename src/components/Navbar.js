import React from "react";
import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";
// import Slider from "./components/Slider";
// import { useRef } from 'react';
import "./css/Navbar.css";



let contadorMenu = 0;
const showHideMenu = () =>{
  

  let headers = document.getElementById("headers");

  if(contadorMenu === 0 && window.innerWidth < 980){
    headers.style.cssText = 'height: 100%;';
    document.body.style.overflow = 'hidden';
    contadorMenu = 1;
  }
  else{
    headers.style.cssText = 'height: 100px;';
    document.body.style.overflow = 'visible';
    contadorMenu = 0;
  }

}
if (window.innerWidth >= 1024) {
  showHideMenu.disabled = true;
  // console.log('menu deshabilitado')
}
const Navbar = () => {
  window.addEventListener("scroll", function () {
    let headers = document.getElementById("headers");

    if (window.scrollY > 0) {
      headers.style.cssText =
        "box-shadow: #acd63967 1px 2px 5px; backdrop-filter: blur(20px); background: #3b3d3493; transition: ease .8s;";
        contadorMenu = 0;
    } else {
      headers.style.cssText =
        "box-shadow: #acd63967 0px 0px 0px; backdrop-filter: blur(0px); background: #3b3d34; transition: ease .8s;";
        contadorMenu = 0;
    }
  });


  let contadorC = 0;
  const contact = () =>{

    if(window.innerWidth > 980 && window.scrollY === 0){
      document.body.style.overflow = 'visible';
       window.scrollTo(0, 750);
       contadorMenu = 0;
    }else{
      document.body.style.overflow = 'visible';
      window.scrollTo(0, 750);
      contadorMenu = 0;
    }
  
  
    if(window.innerWidth < 999 && contadorC === 0){
      window.scrollTo(0, 1000);
      contadorC = 1;
      document.body.style.overflow = 'visible';
      contadorMenu = 0;
    }
    if(window.innerWidth < 999 && contadorC === 1){
      document.body.style.overflow = 'visible';
      window.scrollTo(0, 1000);
      contadorMenu = 0;
      contadorC = 0;
    }


    if(window.innerWidth === 980 && window.innerHeight === 1974 && contadorC === 0){
      window.scrollTo(0, 700);
      contadorC = 1;
      document.body.style.overflow = 'visible';
    }
    if(window.innerWidth === 980 && window.innerHeight === 1974 && contadorC === 1){
      document.body.style.overflow = 'visible';
      window.scrollTo(0, 700);
      contadorC = 0;
    }
  }

  let contadorS = 0;
 const sponsor = () =>{

  if(window.innerWidth > 999){
    document.body.style.overflow = 'visible';
     window.scrollTo(0, 2000);
  }else{
    document.body.style.overflow = 'visible';
    window.scrollTo(0, 2000);
  }


  if(window.innerWidth < 999 && contadorS === 0){
    window.scrollTo(0, 2220);
    contadorS = 1;
    document.body.style.overflow = 'visible';
  }
  if(window.innerWidth < 999 && contadorS === 1){
    document.body.style.overflow = 'visible';
    window.scrollTo(0, 2220);
    contadorS = 0;
  }

  if(window.innerWidth === 980 && window.innerHeight === 1974 && contadorS === 0){
    window.scrollTo(0, 2170);
    contadorS = 1;
    document.body.style.overflow = 'visible';
    console.log('escritorio s21')
  }
  if(window.innerWidth === 980 && window.innerHeight === 1974 && contadorS === 1){
    document.body.style.overflow = 'visible';
    window.scrollTo(0, 2170);
    contadorS = 0;
  }
}



  const top = () => {
    window.scrollTo(0, 0);
};
  return (
    <header className="header" id="headers">
     
      <Link className="logo" onClick={top} to="/">
      
      </Link>
      <Link onClick={showHideMenu} className="btn_menu"></Link>
      <nav>
        <ul>
          <li onClick={top}>
            
            <Link onClick={showHideMenu} className="linkNavbar" to="/" >
              Inicio
            </Link>
          </li>
          <li>
            <Link className="linkNavbar">Nosotros</Link>
            <div className="submenu">
              <ul>
                <li onClick={top}>
                  <Link className="linkSubmenu" to="/Program" onClick={showHideMenu}>
                    Nuestro programa
                  </Link>
                </li>
                <li onClick={top}>
                  <Link
                    className="linkSubmenu" to="/About-us" onClick={showHideMenu}>
                    Quienes somos
                  </Link>
                </li>
                <li onClick={top}>
                  <Link
                    className="linkSubmenu" to="/Mision" onClick={showHideMenu}>
                    Misión
                  </Link>
                </li>
                <li onClick={top}>
                  <Link
                    className="linkSubmenu" to="/Vision" onClick={showHideMenu}>
                    Visión
                  </Link>
                </li>
                <li onClick={top}>
                  <Link
                    className="linkSubmenu" to="/Projects" onClick={showHideMenu}>
                    Proyectos
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="linkNavbar" onClick={contact}>
              Contáctenos
            </Link>
          </li>
          <li >
            <Link className="linkNavbar" onClick={sponsor}>
              Colaboradores
            </Link>
          </li>
          <li onClick={top}>
            <Link className="linkNavbar" onClick={showHideMenu}>
              Tienda
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
