import './Inicio.css'
import 'animate.css';
import '../styles/generalStyles.css'

const Inicio = () => {
    return (
        <section className='containerGeneral' id='inicio'>
            <div className='contexto'>
                <h1>Hola mundo! soy <span className='transformText'>Gianina Carranzani</span></h1>
                <h2 className='animate__animated animate__slideInDown'>Desarrolladora web frontend</h2>
            </div>
        </section>
    )
}

export default Inicio