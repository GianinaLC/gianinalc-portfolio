import './Proyectos.css'
import '../styles/generalStyles.css'
import Container from 'react-bootstrap/Container';
import ProyectosCards from '../ProyectosCards/ProyectosCards';

const Proyectos = () => {

    const ProyectosRealizados = [
        { id: 1, title: 'AFK Tecnología', img: './assets/img/afk-tecnologia-project.png', description: 'Ecommerce de productos para PC' },
        { id: 2, title: 'Entre Copas', img: './assets/img/entre-copas-project.png', description: 'Diseño de página acerca del vino' }
    ]

    return (
        <Container className='containerProjects' id='proyectos'>
            <h2> Proyectos</h2 >
            <div className='containerProjectsCards'>
                {ProyectosRealizados.map(card => <ProyectosCards key={card.id}{...card} />)}
            </div>
        </Container>
    )
}

export default Proyectos