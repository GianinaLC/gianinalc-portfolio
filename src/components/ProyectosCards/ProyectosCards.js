import './ProyectosCards.css'
import Card from 'react-bootstrap/Card';
import { BsGithub } from 'react-icons/bs'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { useState } from 'react';


const ProyectosCards = ({ img, title, id, description }) => {
    const [card, setCard] = useState(false)


    return (
        <Card
            className="bg-dark text-white projectCard"
            key={id}
            onMouseEnter={() => { setCard(true); }}
            onMouseLeave={() => { setCard(false); }}
        >
            <Card.Img src={img} alt={title} className={card ? 'imgCardProject' : 'hidden'} />
            {/* <Card.Img src={img} alt={title} className='imgCardProject' /> */}
            <Card.ImgOverlay className='containerText'>
                <div>
                    <p>{title}</p>
                    <p>{description}</p>
                    <span className='footerIcon p-2'> <BsGithub /> </span>
                    <span className='footerIcon p-2'> <BsBoxArrowUpRight /> </span>
                </div>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ProyectosCards