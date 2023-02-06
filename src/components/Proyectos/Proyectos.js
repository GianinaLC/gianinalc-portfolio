import React from 'react';
import './Proyectos.css';
import Container from 'react-bootstrap/Container';
import ProyectosCards from '../ProyectosCards/ProyectosCards';
import ProyectosRealizados from '../../data/datos-proyectos'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Proyectos = () => {
    AOS.init();

    return (
        <section className='firstBgColor sectionPj' id='Proyectos'>
            <Container fluid className='containerProjects' data-aos="zoom-in-up">
                <h2> Proyectos</h2 >
                <div className='containerProjectsCards'>
                    {ProyectosRealizados.map(card => <ProyectosCards key={card.id}{...card} />)}
                </div>
            </Container>
        </section>
    )
}

export default Proyectos;