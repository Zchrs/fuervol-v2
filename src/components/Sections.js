import React from 'react';
import Contentsections from './Contentsections';
import { Link } from "react-router-dom";

import imgMision from '../img/mision2.png';
import imgVision from '../img/vision.png';
import imgProg from '../img/programa.jpg';
import imgAbout from '../img/nuestro-equipo.png';
import imgProj from '../img/proyectos.jpg';
import imgVolun from '../img/voluntarios.jpg';
import imgFaq from '../img/faq.jpeg';
import imgDocs from '../img/docs.png';

import './css/sections.css';


const contentSections = {
    //--------------------------------- tittle pages --------------------------------------
    tittle_about: 'Quiénes somos',
    tittle_mision: 'Misión',
    tittle_vision: 'Visión',
    tittle_program: 'Nuestro programa',
    tittle_projects: 'Proyectos',
    tittle_donations: 'Donations',
    tittle_volunteers: 'Voluntarios',

    //--------------------------------- Subtittle pages ------------------------------------
    subs_abt: 'FUNDACIÓN COMUNIDAD TERAPEUTICA FUERZA Y VOLUNTAD. Nit: 811037049-2',
    subs: 'FUNDACIÓN COMUNIDAD TERAPEUTICA FUERZA Y VOLUNTAD.',

    //--------------------------------- text pages -----------------------------------------
    text_about: 
    `
        Somos una organización sin ánimo de lucro que cuenta con el manejo especializado 
        en problemas relacionados al consumo de sustancias psicoactivas y el juego patológico. 
        Nuestra experiencia en el abordaje de esta problemática, nos ha permitido desarrollar un 
        modelo de intervención propio, basado en lo más actual de la investigación en adicciones, 
        sin dejar de lado el principio de un buen trato y la humanización del servicio.
    `,
    text_mision: 
    `
        Nuestra misión consiste en reparar, recuperar y transformar la vida de la mayor 
        cantidad de personas con problemas de drogas, ludopatía etc, logrando para ellos 
        una segunda oportunidad como estudiantes, empleados, hijos e integrantes de una 
        nueva sociedad libre de adicciones.
    `,
    text_vision: 
    `
        Convertirnos en una fundación de alto reconocimiento en el ámbito nacional, líderes 
        en la formación del ser humano y fomentaremos en cada persona que atendamos el respeto, 
        dignidad, madurez y amor propio, para que de esta forma se conviertan en ciudadanos 
        de bien y contribuyan día a día a que tengamos una sociedad mas justa y equitativa.
    `,
    text_program: 
    `
        En esta modalidad el paciente reside en la fundación biomédica para la recuperaciíon 
        de la comunidad fuerza y voluntad de manera permanente, orientado por expertos y 
        profesionales de distintas especialidades, transitando por una serie de fases 
        donde se trabajan objetivos específicos. Todo el equipo multidisciplinario está
        capacitado para acompañar a los pacientes en el proceso de adaptación, facilitando 
        la asimilación de estrategias y adquisición de habilidades para la recuperación 
        integral que ofrece el programa; esta modalidad está enfocada en facilitar el 
        proceso de desimtoxicación, reestructuración de la personalidad, fortalecimiento 
        del carácter, desarrollo de una positiva escala de valores, mejoramiento de las 
        relaciones familiares e interpersonales y elaboración de un proyecto de vida. 
        Este proceso de rehabilitación tiene una duración de 7 meses intramural, 3 meses 
        ambulatorio y 2 meses post, Teniendo en cuenta que los problemas de adicción impactan 
        las diferentes áreas de la vida de un ser humano. La fundación biomédica para la 
        recuperación del ser, facilita un programa de atención en sitio, donde atiende de 
        manera profesional e integral, la salud física, mental y ambiental de cada residente.
    `,

    text_projects: `Estamos en construcción de esta sección, aún no está disponible `,
    text_volunteers: 'Estamos en construcción de esta sección, aún no está disponible',

    text_default: <strong>Estamos trabajando en esta sección, estará disponible pronto.</strong>,

    //----------------------------------- pages images0 ---------------------------------
    img_about: <img className='section-Img' src={imgAbout} alt='' />,
    img_projects: <img className='section-Img' src={imgProj} alt='' />,
    img_mision: <img className='section-Img' src={imgMision} alt='' />,
    img_vision: <img className='section-Img' src={imgVision} alt='' />,
    img_volunta: <img className='section-Img' src={imgVolun} alt='' />,
    img_prog: <img className='section-Img' src={imgProg} alt='' />,

    //-------------------- footer pages --------------------------------------------
    tittle_faq: 'Preguntas frecuentes',
    tittle_docs: 'Documentación legal',
    tittle_privacy: 'Política de privacidad',

    //------------------------------ img footer pages ---------------------------
    img_faq: <img className='section-Img' src={imgFaq} alt='' />,
    img_docs: <img className='section-Img' src={imgDocs} alt='' />,
    file_docs: 
    <div className='legal-docs'>
        <ul>
            <li>
                <Link className='legal-docs-link' >Cámara de comercio</Link>
            </li>
            <li>
                <Link className='legal-docs-link' >Certificado existencia</Link>
            </li>
            <li>
                <Link className='legal-docs-link' >Régimen especial</Link>
            </li>
            <li>
                <Link className='legal-docs-link' >Declaraciónes renta</Link>
            </li>
            <li>
                <Link className='legal-docs-link' >Rut</Link>
            </li>
       </ul>
    </div>,

    //---------------------------- text footer pages ------------------------------
    text_faq: 'Estamos en construcción de esta sección, pronto estará disponible',
    text_docs: <strong>Estamos actualizando nuestra documentación, estará disponible pronto.</strong>,
}



const Sections = ({tittleA, tittleB, imgS, text}) => {

   
    return (
        <div>
            <Contentsections 
            tittleA={contentSections.tittle_faq} 
            tittleB={contentSections.subs} 
            text={contentSections.text_projects}
            imgS={contentSections.img_projects}
        />
        </div>
    );
};

const Abouts = ({tittleA, tittleB, imgS, text}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_about} 
            tittleB={contentSections.subs} 
            text={contentSections.text_about} 
            imgS={contentSections.img_about} 
        />
    </div>
    );
};

const Mision = ({tittleA, tittleB, imgS, text}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_mision} 
            tittleB={contentSections.subs} 
            text={contentSections.text_mision} 
            imgS={contentSections.img_mision} 
        />
    </div>
    );
};

const Vision = ({tittleA, tittleB, imgS, text}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_vision} 
            tittleB={contentSections.subs} 
            text={contentSections.text_vision} 
            imgS={contentSections.img_vision} 
        />
    </div>
    );
};

const Program = ({tittleA, tittleB, imgS, text}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_program} 
            tittleB={contentSections.subs} 
            text={contentSections.text_program} 
            imgS={contentSections.img_prog} 
        />
    </div>
    );
};

const Projects = ({tittleA, tittleB, imgS, text}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_projects} 
            tittleB={contentSections.subs} 
            text={contentSections.text_default} 
            imgS={contentSections.img_projects} 
        />
    </div>
    );
};

const Volunteers = ({tittleA, tittleB, imgS, text}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_volunteers} 
            tittleB={contentSections.subs} 
            text={contentSections.text_default} 
            imgS={contentSections.img_volunta} 
        />
    </div>
    );
};

//------------------------ componentes secciones footer ------------------------
const Faq = ({tittleA, tittleB, imgS, text}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_faq} 
            tittleB={contentSections.subs} 
            text={contentSections.text_default} 
            imgS={contentSections.img_faq} 
        />
    </div>
    );
};

const Legal = ({tittleA, tittleB, imgS, text, fileDocs}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_docs} 
            tittleB={contentSections.subs} 
            text={contentSections.text_docs} 
            imgS={contentSections.img_docs} 
            fileDocs ={contentSections.file_docs} 
        />
    </div>
    );
};

const Privacy = ({tittleA, tittleB, imgS, text}) =>{

    return (
    <div>
        <Contentsections 
            tittleA={contentSections.tittle_privacy} 
            tittleB={contentSections.subs} 
            text={contentSections.text_default} 
            imgS={contentSections.img_privacy} 
        />
    </div>
    );
};

export {
    Sections, 
    Abouts, 
    Mision, 
    Vision, 
    Program, 
    Projects, 
    Volunteers, 
    Faq, 
    Legal, 
    Privacy
};