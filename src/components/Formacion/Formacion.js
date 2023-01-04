import './Formacion.css'
import Container from 'react-bootstrap/Container';
import FormacionCard from '../FormacionCard/FormacionCard';

const Formacion = () => {
    return (
        <Container fluid id='Formación' className='firstBgColor'>
            <h2 className='marginSecondary'>Formación</h2>
            <div className='divSec'>
                <FormacionCard />
            </div>
        </Container>
    )
}

export default Formacion