import React from 'react';
import './InicioBotones.css';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const BotonesInicio = () => {
    const botones = [
        { id: 1, title: 'Descargar cv', icon: <FaDownload />, url: './assets/docs/CV-CarranzaniGianina-Frontend.pdf' },
        { id: 2, title: 'Github', icon: <FaGithub />, url: 'https://github.com/GianinaLC' },
        { id: 3, title: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/gianina-carranzani/' }
    ]

    return (
        <>
            {botones.map(btn =>
                <button key={btn.id} className='btnInicio'><a href={btn.url} download='CV-CarranzaniGianina' ><span>{btn.icon}</span>{btn.title}</a> </button>
            )}
        </>

    )

}

export default BotonesInicio;