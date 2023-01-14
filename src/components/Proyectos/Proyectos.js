import './Proyectos.css'
import Container from 'react-bootstrap/Container';
import ProyectosCards from '../ProyectosCards/ProyectosCards';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Proyectos = () => {
    const ProyectosRealizados = [
        { id: 1, title: 'AFK Tecnología', img: './assets/img/afk-tecnologia-project.png', description: 'Ecommerce de productos para PC', url: 'https://afktecnologia.vercel.app/', github: 'https://github.com/GianinaLC/afktecnologia' },
        { id: 2, title: 'Entre Copas', img: './assets/img/entre-copas-project.png', description: 'Diseño de página acerca del vino', url: 'https://gianinalc.github.io/DesarrolloWeb/Proyecto/', github: 'https://github.com/GianinaLC/DesarrolloWeb' },
        { id: 3, title: 'Todo list', img: './assets/img/todo-list-project.png', description: 'Lista de tareas', url: 'https://gianinalc.github.io/todo-list/', github: 'https://github.com/GianinaLC/todo-list' }
    ]

    AOS.init();

    return (
        <section className='firstBgColor' id='Proyectos'>
            <Container fluid className='containerProjects' data-aos="zoom-in-up">
                <h2 className='marginSecondary'> Proyectos</h2 >
                <div className='containerProjectsCards'>
                    {ProyectosRealizados.map(card => <ProyectosCards key={card.id}{...card} />)}
                </div>
            </Container>
        </section>
    )
}

export default Proyectos