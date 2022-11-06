import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';


    // const scroll = window.scrollX;
    // if(scroll >= 0){
    //     Navbar.className('shadow-navbar');
    // }

const Navbar = () => {

    window.addEventListener('scroll', function(){

        let headers = document.getElementById('headers');
        // console.log('headers');
       

    if(window.scrollY > 0){
        headers.style.cssText = 'box-shadow: #acd63967 1px 2px 5px; backdrop-filter: blur(20px); background: #3b3d3493; transition: ease .8s;';
    }
    else{
        headers.style.cssText = 'box-shadow: #acd63967 0px 0px 0px; backdrop-filter: blur(20px); background: #3b3d3493; transition: ease .8s;';
    }
});
    return (
            <header id='headers'>
                <div className="logo">
                   
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li>Nosotros
                        <div className='submenu'>
                        <ul>
                            <li><Link to="/Program">Nuestro programa</Link></li>
                            <li><Link to="/About-us">Quienes somos</Link></li>
                            <li><Link to="/Mision">Misión</Link></li>
                            <li><Link to="/Vision">Visión</Link></li>
                            <li><Link to="/">Proyectos</Link></li>
                        </ul>
                        </div>
                        </li>
                        <li><Link to="/">Contáctenos</Link></li>
                        <li><Link to="/">Colaboradores</Link></li>
                        <li><Link to="/">Tienda</Link></li>
                        
                    </ul>
                </nav>
            </header>
    );
};

export default Navbar;