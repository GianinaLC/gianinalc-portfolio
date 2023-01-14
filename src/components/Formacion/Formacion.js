import './Formacion.css'
import Container from 'react-bootstrap/Container';
import FormacionCard from '../FormacionCard/FormacionCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Formacion = () => {

    AOS.init();
    return (
        <section id='Formación' className='firstBgColor containerFormacion'>
            <Container fluid data-aos="fade-right" data-aos-duration="2000">
                <h2>Formación</h2>
                <FormacionCard />
            </Container>
        </section>
    )
}

export default Formacion