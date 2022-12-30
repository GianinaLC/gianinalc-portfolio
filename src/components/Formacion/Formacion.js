import './Formacion.css'
import '../styles/generalStyles.css'
import Container from 'react-bootstrap/Container';
import FormacionCard from '../FormacionCard/FormacionCard';

const Formacion = () => {
    return (
        <Container className='containerFormacion' id='Formación'>
            <h2 className='marginSecondary'>Formación</h2>
            <div className='divSec'>
                <FormacionCard />
            </div>
        </Container>
    )
}

export default Formacion