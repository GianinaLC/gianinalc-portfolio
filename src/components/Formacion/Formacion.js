import './Formacion.css'
import Container from 'react-bootstrap/Container';
import FormacionCard from '../FormacionCard/FormacionCard';


const Formacion = () => {

    return (
        <section id='Formación' className='firstBgColor containerFormacion'>
            <Container fluid>
                <h2>Formación</h2>
                <FormacionCard />
            </Container>
        </section>
    )
}

export default Formacion