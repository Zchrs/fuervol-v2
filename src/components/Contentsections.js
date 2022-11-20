import React from 'react';



const Contentsections = ({tittleA, tittleB, imgS, text, fileDocs}) => {

    return (
        <div>
              <div className='sectionIndex'>
                <div className='img-sections'>
                 <div className='p-sections'></div>
                 <h1>{tittleA}</h1>
                 <h2>{tittleB}</h2>
                 <div>{imgS}</div>
                 </div>
                
                 <p>{text}</p>
                 <div>{fileDocs}</div>
        </div>
        </div>
    );
};

export default Contentsections;