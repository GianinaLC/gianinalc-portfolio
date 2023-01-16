import React from 'react';
import './SobreMi.css';
import Container from "react-bootstrap/Container";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SobreMi = () => {
    AOS.init();
    return (
        <section className='containerGeneral firstBgColor container1SM' id='Sobre mí'>
            <Container fluid className='contenedorSM' data-aos="zoom-in-up">
                <h2>Sobre mí</h2>

                <div>
                    <p>Soy desarrolladora web frontend, en constante crecimiento.</p>
                    <p>Aspiro conseguir empleo en el mundo del Desarrollo Web, adquirir experiencia y nuevos conocimientos.</p>
                    <p>Soy una persona empática y entusiasta, resolutiva, responsable y proactiva, me gusta aprender de los demás y superarme continuamente.</p>
                </div>
            </Container>
        </section>
    )
}

export default SobreMi;