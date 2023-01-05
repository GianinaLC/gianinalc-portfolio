import './Inicio.css'
import 'animate.css';
import BotonesInicio from '../InicioBotones/InicioBotones';

const Inicio = () => {
    return (
        <div className='containerGeneral contenedorInicio' id='Inicio'>
            <div className='contenedor1 contexto' >
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
            <div className='btnContacto'>
                <BotonesInicio />
            </div>
        </div >
    )
}

export default Inicio;