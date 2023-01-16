import React from 'react';
import './Footer.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className=' footerSp'>
            <div>
                <h2>Conectemos</h2>
                <div className='footerContainerIcon'>
                    <span className='footerIcon'><a href='https://github.com/GianinaLC'><FaGithubSquare /></a></span>
                    <span className='footerIcon'><a href='https://www.linkedin.com/in/gianina-carranzani/'><FaLinkedin /></a></span>
                </div>
            </div>

            <p className='footerAutor'>2023 | Gianina Carranzani</p>

        </section>
    )

}

export default Footer;