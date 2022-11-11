import React from 'react';
// import { Link } from 'react-router-dom';


import './css/Card.css'

const card = ({title, text, nameButton}) => {



    return (
        <div className='card'>
           <h1>
            {title}
           </h1>
           <p>
           {text}
           </p>
           <button>
            {nameButton}
           </button>
        </div>
    );
};

export default card;