import './Tecnologias.css'
import Container from 'react-bootstrap/esm/Container'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoLogoCss3, IoLogoSass, IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaHtml5, FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa';

const Habilidades = () => {
    const skills = [
        { id: 1, title: 'html', icon: <FaHtml5 /> },
        { id: 2, title: 'css', icon: <IoLogoCss3 /> },
        { id: 3, title: 'sass', icon: <IoLogoSass /> },
        { id: 4, title: 'javascript', icon: <IoLogoJavascript /> },
        { id: 5, title: 'react', icon: <FaReact /> },
        { id: 6, title: 'nodejs', icon: <FaNodeJs /> },
        { id: 7, title: 'git', icon: <FaGitAlt /> },
        { id: 8, title: 'github', icon: <FaGithub /> }
    ]
    AOS.init();

    return (
        <section className='firstBgColor' id='Tecnologías'>
            <Container fluid className='containerGeneral containerTecno' data-aos='zoom-in' data-aos-duration="2000">
                <h2>Tecnologías</h2>
                <div className='containerSkills'>
                    {skills.map(skill => <p key={skill.id} className='skillCard'>{skill.title} <span>{skill.icon}</span></p>)}
                </div>
            </Container>
        </section>
    )
}

export default Habilidades