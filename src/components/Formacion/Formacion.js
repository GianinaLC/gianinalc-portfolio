import './Formacion.css'
import CardFormacion from '../CardFormacion/CardFormacion'
import Container from 'react-bootstrap/Container';

const Formacion = () => {
    return (
        <Container className='containerFormacion' id='formacion'>
            <h2>Formación</h2>
            <CardFormacion />
        </Container>
    )
}

export default Formacion