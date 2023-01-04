import './Inicio.css'
import 'animate.css';
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'

const Inicio = () => {
    return (
        <Container fluid className='containerGeneral contenedorInicio firstBgColor' id='Inicio'>
            <div className='contenedor1'>
                <h1>Hola mundo!</h1>
            </div>
            <div className='contenedor2'>
                <h2 className='animate__animated animate__backInLeft'>Soy <span>Gianina Carranzani</span></h2>
                <h2 className='animate__animated animate__backInLeft animate__delay-1s'>Desarrolladora web <span>frontend</span></h2>
            </div>
            <div className='containerIconInicio'>
                <span className='iconInicio'><a href='https://github.com/GianinaLC'><FaGithubSquare /></a></span>
                <span className='iconInicio'><a href='https://www.linkedin.com/in/gianina-carranzani/'><FaLinkedin /></a></span>
            </div>
        </Container>
    )
}

export default Inicio