import React, {useRef, useEffect} from 'react';
// import styled from 'styled-components';

import img1 from '../img/fund1.jpg';
import img2 from '../img/fund6.jpg';
import img3 from '../img/fund5.jpg';
import img4 from '../img/fund3.jpg';

import imgL from '../img/arrow-left.svg';
import imgR from '../img/arrow-right.svg';

import './css/slider.css';



const Slider = () => {

    const slider = useRef(null);
    const intervalSlide = useRef(null);

    const next = () =>{
         // comprobamos que el slider tenga elementos
        if(slider.current.children.length > 0){
        
           //obtenemos el primer elemento del slider
            const firstElement = slider.current.children[0];
           

            slider.current.style.transition = 'ease-out 1s all';

            slider.current.style.transform = 'translateX(-100%)';

            const transition = () =>{
                slider.current.style.transition = 'none';
                slider.current.style.transform = 'translateX(0%)';

                slider.current.appendChild(firstElement);

                slider.current.removeEventListener('transitionend', transition);
            }

            slider.current.addEventListener('transitionend', transition);
        }
    }
    const back = () =>{
        if(slider.current.children.length > 0){
            
            const index = slider.current.children.length -1;
            const lastElement = slider.current.children[index];
            slider.current.insertBefore(lastElement, slider.current.firstChild);

            slider.current.style.transition = 'none';

            slider.current.style.transform = 'translateX(-100%)'

            setTimeout(() => {
                slider.current.style.transition = 'ease-out 1s all';
                slider.current.style.transform = 'translateX(0%)';
            }, 30);

        }
    }

useEffect(() => {
    intervalSlide.current = setInterval(() => {
        next();
    }, 7000);

    // slider.current.addEventListener('mouseenter', () => {
    //     console.log('sobre slider')
    //     clearInterval(intervalSlide.current);
    // })

    // slider.current.addEventListener('mouseleave', () => {
    //     intervalSlide.current = setInterval(() => {
    //         console.log('fuera del slider');
    //         next();
    //     }, 7000);
    // });
}, []);

    return (
        <div className='main-content-slider'>
            <div className='content-slider' ref={slider}>
                <div className='slide'>
                    <img src={img1} alt="" />
                </div>
                <div className='slide'>
                    <img src={img2} alt="" />
                </div>
                <div className='slide'>
                    <img src={img3} alt="" />
                </div>
                <div className='slide'>
                    <img src={img4} alt="" />
                </div>
                
            </div>
            <button onClick={back} ><img src={imgL} alt="" /></button>
            <button onClick={next} ><img src={imgR} alt="" /></button>
        </div>
    );
};



export default Slider;