import './Tecnologias.css'
import Container from 'react-bootstrap/esm/Container'

const Habilidades = () => {
    return (
        <Container fluid className='secondBgColor' id='Tecnologías'>
            <h2 className='marginSecondary'>Tecnologías</h2>
            <div className='containerSkills'>
                <p>Html</p>
                <p>Css</p>
                <p>Sass</p>
                <p>Javascript</p>
                <p>JQuery</p>
                <p>NodeJS</p>
                <p>Git</p>
                <p>Github</p>
            </div>
        </Container>
    )
}

export default Habilidades