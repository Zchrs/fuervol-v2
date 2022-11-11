import { Link } from 'react-router-dom';
import React from 'react';
import Card from './Card';
import Slider from './Slider';

import './css/articlehome.css';



const Articlehome = ({title, text, nameButton}) => {

    const tittles = {
        solution: 'Una solución a la adicción',
        donations: 'Donaciones',
        volunteers: 'Voluntarios',

        pSolution: 'Tratamiento interno, tratamiento ambulatorio, operador terapéutico, operador psicológico, desintoxicación y reinserción a la vida profesional.',
        pDonations: 'Gracias a tu apoyo, miles de jóvenes y adultos pueden y podrán recuperar sus vidas, haz clic en el botón "ayúdanos" para donar',
        pVolunteers: 'Conviértete en uno de nuestros voluntarios y ayúdanos a ayudar a quienes más lo necesitan y a construír un mundo mejor.',

        btn_Solution: <Link className='link' to={'/Program'}>Saber más</Link>,
        btn_Donations: <Link className='link' to={'/Donations'}>Ayúdanos</Link>,
        btn_Volunteers: 'Voluntarios',
    }

    return (
        <article>
            <h1 className='h1-article'>
                Fuerza y voluntad: La solución definitiva para los problemas de adicción.
            </h1>
            <h2 className="h2-article">
                Trabajamos para el mejoramiento de la calidad de vida del ser humano y
                sus familias, como una forma de contribuir en el desarrollo de la
                sociedad para asegurar una juventud sana.
            </h2>
            <Card title={tittles.solution} text={tittles.pSolution} nameButton={tittles.btn_Solution} />
            <Card className='cardup' title={tittles.donations} text={tittles.pDonations} nameButton={tittles.btn_Donations} />
            <Card title={tittles.volunteers} text={tittles.pVolunteers} nameButton={tittles.btn_Volunteers} />
            <Slider />
        </article>
    );
};

export default Articlehome;