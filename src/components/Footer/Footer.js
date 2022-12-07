import './Footer.css'
import { VscGithub } from 'react-icons/vsc'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='divFooter'>
            <p>Copyright | Gianina Carranzani</p>
            <div>
                <span className='iconFooter'> <VscGithub /> </span>
                <span className='iconFooter'> <AiOutlineLinkedin /> </span>
            </div>
        </div>
    )

}

export default Footer