import './FormacionCard.css'
import Card from 'react-bootstrap/Card';


const FormacionCard = () => {

    const certificados = [
        { titulo: 'Carrera de Desarrollo Web Frontend React', academia: 'Coderhouse', fechaFin: 'Abril 2022', img: 'https://images.ctfassets.net/t5yal6u1wvnw/5EMxiqpZ4RqdmwHBpTkcYN/ee542d041f22d71df94cf5f301e487a8/logo_coderhouse.png' },
        { titulo: 'HTML CSS Javascript', academia: 'Openbootcamp', fechaFin: 'Julio 2022', img: 'https://vlctesting.es/wp-content/uploads/2022/08/Open-Bootcamp.png' },
        { titulo: 'Desarrollo Web Frontend', academia: 'Fundación YPF', fechaFin: 'Diciembre 2022', img: 'https://www.fceia.unr.edu.ar/uma2013/images/logoYPF-letras-negras.gif' }
    ]

    return (
        <div className='containerCards'>
            {certificados.map((certificado, id) => {
                return <Card style={{ width: '23rem' }} className="mb-2 cardItem" key={id}>
                    <Card.Img variant="top" src={certificado.img} />
                    <Card.Body>
                        <Card.Title> {certificado.titulo} </Card.Title>
                    </Card.Body>
                    <Card.Footer> {certificado.fechaFin} </Card.Footer>
                </Card>
            })
            }

        </div>
    )
}

export default FormacionCard;