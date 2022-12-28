import './Formacion.css'
import '../styles/generalStyles.css'
import Container from 'react-bootstrap/Container';
import FormacionCard from '../FormacionCard/FormacionCard';

const Formacion = () => {
    return (
        <Container className='containerGeneral' id='Formación'>
            <h2>Formación</h2>
            <FormacionCard />
        </Container>
    )
}

export default Formacion