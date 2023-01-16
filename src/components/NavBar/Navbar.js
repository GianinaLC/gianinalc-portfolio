import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
    const categoriasMenu = ['Inicio', 'Sobre mí', 'Formación', 'Tecnologías', 'Proyectos']

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header' >
            <nav className='navbar'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={25} style={{ color: '#ffffff' }} />)}
                </div>
                <div className={click ? "nav-menu active" : "nav-menu"}>
                    {categoriasMenu.map(menu =>
                        <Link key={menu} to={menu} className='nav-item' spy={true} smooth={true} offset={-40} duration={200} onClick={closeMenu} >{menu}</Link>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;