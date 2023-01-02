import './Inicio.css'
import 'animate.css';

const Inicio = () => {
    return (
        <div className='containerGeneral contexto' id='Inicio'>
            <div>
                <h1>Hola mundo! soy <span className='transformText'>Gianina Carranzani</span></h1>
                <h2 className='animate__animated animate__slideInDown'>Desarrolladora web frontend</h2>
            </div>
        </div>
    )
}

export default Inicio