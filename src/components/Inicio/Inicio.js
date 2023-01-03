import './Inicio.css'
import 'animate.css';
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Inicio = () => {
    return (
        <div className='containerGeneral contenedorInicio' id='Inicio'>
            <div className='contenedor1 contexto'>
                <div className='animate__animated animate__backInLeft'>
                    <h1>Hola mundo! soy</h1>
                    <h2>Gianina Carranzani</h2>
                </div>
            </div>
            <div className='contenedor2'>
                <div className='div1Inicio animate__animated animate__slideInDown animate__delay-1s '>
                    <p>Desarrolladora web</p>
                    <p>Frontend</p>
                </div>
                <div className='containerIconInicio'>
                    <span className='iconInicio'><a href='https://github.com/GianinaLC'><FaGithubSquare /></a></span>
                    <span className='iconInicio'><a href='https://www.linkedin.com/in/gianina-carranzani/'><FaLinkedin /></a></span>
                </div>
            </div>
        </div>
    )
}

export default Inicio