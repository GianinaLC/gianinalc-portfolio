import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="#home">GC</Navbar.Brand>
                {/* <Link to='/'>
                    <img src={'../images/afklogo1.png'} className="logo-app" alt="logoAFK" />
                </Link> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {/*    <Nav.Link ><Link to='/'>Inicio</Link></Nav.Link>
                        <Nav.Link ><Link to='/SobreMi'>Sobre mí</Link></Nav.Link>
                        <Nav.Link ><Link to='/Formación'>Formación</Link></Nav.Link>
                        <Nav.Link ><Link to='/Tecnologías'>Tecnologías</Link></Nav.Link>
                        <Nav.Link ><Link to='/Proyectos'>Proyectos</Link></Nav.Link>
                        <Nav.Link ><Link to='/Contacto'>Contacto</Link></Nav.Link> */}

                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#sobreMi">Sobre mí</Nav.Link>
                        <Nav.Link href="#formacion">Formación</Nav.Link>
                        <Nav.Link href="#tecnologias">Tecnologías</Nav.Link>
                        <Nav.Link href="#proyectos">Proyectos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;