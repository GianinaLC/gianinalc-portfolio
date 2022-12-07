import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">GC</Navbar.Brand>
                {/* <Link to='/'>
                    <img src={'../images/afklogo1.png'} className="logo-app" alt="logoAFK" />
                </Link> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                        <Nav.Link href="#formacion">Formación</Nav.Link>
                        <Nav.Link href="#proyectos">Proyectos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;