import './Inicio.css'
import 'animate.css';
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Inicio = () => {
    return (
        <div className='containerGeneral contenedorInicio' id='Inicio'>
            <div div className='contenedor1 contexto' >
                <div className='animate__animated animate__backInLeft'>
                    <p>Hola mundo! soy</p>
                    <p>Gianina Carranzani</p>
                </div>
            </div>
            <div className='contenedor2 contexto2'>
                <div className='animate__animated animate__backInLeft animate__delay-1s'>
                    <p className='textInicio'>Desarrolladora web</p>
                    <p>Frontend</p>
                </div>
            </div>
            <div className='containerIconInicio'>
                <span className='iconInicio'><a href='https://github.com/GianinaLC'><FaGithubSquare /></a></span>
                <span className='iconInicio'><a href='https://www.linkedin.com/in/gianina-carranzani/'><FaLinkedin /></a></span>
            </div>
            {/* <Container fluid className='containerGeneral contenedorInicio firstBgColor' id='Inicio'>
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
        </Container> */}
        </div >

    )
}

export default Inicio