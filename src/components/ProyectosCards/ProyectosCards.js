import './ProyectosCards.css'
import Card from 'react-bootstrap/Card';
import { BsGithub } from 'react-icons/bs'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { useState } from 'react';
import 'animate.css'


const ProyectosCards = ({ img, title, id, description, url, github }) => {
    const [card, setCard] = useState(false)

    const [color, setColor] = useState(false)
    const animateA = 'animate__animated animate__fadeInUp'
    const animateB = 'animate__animated animate__fadeOutDown'


    return (
        <Card
            className="bg-dark text-white projectCard"
            key={id}
            onMouseEnter={() => { setCard(true); setColor(true) }}
            onMouseLeave={() => { setCard(false); setColor(true) }}
        >
            <Card.Img src={img} alt={title} className={card ? 'imgCardBlur' : 'hidden'} />
            <Card.ImgOverlay className={color ? 'visible, containerText' : 'oculto'}>
                <div className={card ? animateA : animateB}>
                    <p>{title}</p>
                    <p>{description}</p>
                    <span className='p-2'><a href={github} target="_blank" rel="noreferrer"><BsGithub /></a></span>
                    <span className='p-2'> <a href={url} target="_blank" rel="noreferrer"><BsBoxArrowUpRight /></a></span>
                </div>
            </Card.ImgOverlay>
        </Card >
    )
}

export default ProyectosCards