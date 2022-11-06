import React from 'react';


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
           <button Link to={''}>
            {nameButton}
           </button>
        </div>
    );
};

export default card;