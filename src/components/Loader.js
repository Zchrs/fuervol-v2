import React from 'react';
import {useEffect, useState} from 'react';
import ReactLoading from 'react-loading';


import './css/loader.css'

// const preloader = document.getElementById('preloader');
// console.log(preloader);

const Loader = () => {

   

    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    useEffect (() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((json) => {
            setLoading(true);
            setCompleted(true)

            setTimeout(() => {
                setCompleted(true);
            }, 1000)

        }, 2000);

    }, []);

    return (
        <div className='preloader' id='preloader'>
            <div className='img'>
            </div>
            <ReactLoading type={'blank'} color={'#ADD639'} height={30} width={30} className='bars'/>
        </div>
    );

};



export default Loader;