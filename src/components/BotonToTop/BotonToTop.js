import React from 'react';
import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './BotonToTop.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BtnToTop = () => {
    const [volverAlInicio, setVolverAlInicio] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setVolverAlInicio(true)
            } else {
                setVolverAlInicio(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    AOS.init();

    return (
        <>
            {
                volverAlInicio && (
                    <button className='btnUp' onClick={scrollUp}
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    ><BsFillArrowUpCircleFill /></button>
                )
            }
        </>
    )
}

export default BtnToTop;