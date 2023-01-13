import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll'
import React, { useState } from 'react';
import './Navbar.css'

const NavBar = () => {

    const categoriasMenu = ['Inicio', 'Sobre mí', 'Formación', 'Tecnologías', 'Proyectos']

    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' className='navMenu' >
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={click ? 'ms-auto active' : 'ms-auto '}>
                        {categoriasMenu.map(menu =>
                            <Link key={menu} className='categories' to={menu} spy={true} smooth={true} offset={-35} duration={200} onClick={closeMenu} >{menu}</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;