import './Footer.css'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerContainerIcon'>
                <span className='footerIcon'><a href='https://github.com/GianinaLC'><FaGithubSquare /></a></span>
                <span className='footerIcon'><a href='https://www.linkedin.com/in/gianina-carranzani/'><FaLinkedin /></a></span>
            </div>

            <p className='text-center text-white m-0'>Copyright | Gianina Carranzani</p>

        </div>
    )

}

export default Footer