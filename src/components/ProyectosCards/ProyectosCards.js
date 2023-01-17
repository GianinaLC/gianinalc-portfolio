import React, { useState } from 'react';
import './ProyectosCards.css';
import Card from 'react-bootstrap/Card';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProyectosCards = ({ img, title, id, description, url, github }) => {
    const [cardBody, setCard] = useState(false)

    const animateA = 'animate__animated animate__fadeInUp'
    const animateB = 'animate__animated animate__fadeOutDown'

    AOS.init();

    return (
        <Card
            className="bg-dark text-white projectCard"
            key={id}
            onMouseEnter={() => { setCard(true); }}
            onMouseLeave={() => { setCard(false); }}
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
        >
            <Card.Img src={img} alt={title} className={cardBody ? 'imgCardBlur' : null} />
            <Card.ImgOverlay className='containerText'>
                <div className={cardBody ? animateA : animateB}>
                    <p>{title}</p>
                    <p>{description}</p>
                    <span className='p-2'><a href={github} target="_blank" rel="noreferrer"><BsGithub /></a></span>
                    <span className='p-2'><a href={url} target="_blank" rel="noreferrer"> <BsBoxArrowUpRight /></a></span>
                </div>
            </Card.ImgOverlay>
        </Card >
    )
}

export default ProyectosCards;