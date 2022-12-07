import './Footer.css'
import { VscGithub } from 'react-icons/vsc'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <p>Copyright | Gianina Carranzani</p>
            <div>
                <span className='footerIcon'> <VscGithub /> </span>
                <span className='footerIcon'> <AiOutlineLinkedin /> </span>
            </div>
        </div>
    )

}

export default Footer