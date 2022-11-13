import React from "react";
import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";
// import Slider from "./components/Slider";
// import { useRef } from 'react';
import "./css/Navbar.css";

// const scroll = window.scrollX;
// if(scroll >= 0){
//     Navbar.className('shadow-navbar');
// }

const Navbar = () => {
  window.addEventListener("scroll", function () {
    let headers = document.getElementById("headers");
    // console.log('headers');

    if (window.scrollY > 0) {
      headers.style.cssText =
        "box-shadow: #acd63967 1px 2px 5px; backdrop-filter: blur(20px); background: #3b3d3493; transition: ease .8s;";
    } else {
      headers.style.cssText =
        "box-shadow: #acd63967 0px 0px 0px; backdrop-filter: blur(20px); background: #3b3d3493; transition: ease .8s;";
    }
  });

  

 function contact(){
    if(window.scrollY === 0){
       window.scrollTo(0, 750);
    }else{
      window.scrollTo(0, 750)
    }
 }

 function sponsor(){
  if(window.scrollY === 0){
     window.scrollTo(0, 2000);
  }else{
    window.scrollTo(0, 2000)
  }
}


  const top = () => {
    window.scrollTo(0, 0);
};
  return (
    <header className="header" id="headers">
      <Link className="logo" onClick={top} to="/">
      
      </Link>
      <nav>
        <ul>
          <li onClick={top}>
            
            <Link className="linkNavbar" to="/" >
              Inicio
            </Link>
          </li>
          <li>
            <Link className="linkNavbar">Nosotros</Link>
            <div className="submenu">
              <ul>
                <li onClick={top}>
                  <Link className="linkSubmenu" to="/Program">
                    Nuestro programa
                  </Link>
                </li>
                <li onClick={top}>
                  <Link
                    className="linkSubmenu" to="/About-us">
                    Quienes somos
                  </Link>
                </li>
                <li onClick={top}>
                  <Link
                    className="linkSubmenu" to="/Mision">
                    Misión
                  </Link>
                </li>
                <li onClick={top}>
                  <Link
                    className="linkSubmenu" to="/Vision">
                    Visión
                  </Link>
                </li>
                <li onClick={top}>
                  <Link
                    className="linkSubmenu" to="/">
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
          <li>
            <Link className="linkNavbar" onClick={sponsor}>
              Colaboradores
            </Link>
          </li>
          <li onClick={top}>
            <Link className="linkNavbar">
              Tienda
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
