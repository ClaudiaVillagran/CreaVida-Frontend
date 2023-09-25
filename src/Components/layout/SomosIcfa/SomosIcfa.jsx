import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"

export const SomosIcfa = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);

    const handleScroll = () => {
        const element = contentRef.current;
        if (element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            setIsVisible(elementTop < windowHeight && elementTop > -element.clientHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <article className={`content__somosicfa scroll_reveal ${isVisible ? 'visible' : ''}`} ref={contentRef}>


            <div className="somosicfa__tittle  ">
                <h2>Nuestra Iglesia</h2>
            </div>
            <div className="somosicfa__info white__card ">
                <div className="somosicfa__info-text ">
                    <p className="somosicfa__info-text-p ">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut la.</p>
                    <div className="somosicfa__info-seeMore seeMore ">
                        <NavLink to="https://www.somosicfa.cl/" target="_BLANK">
                            <button>IR</button>
                            <p >Conocer SomosIcfa</p>
                        </NavLink>
                    </div>
                </div>
                <div className="contenedor__img-somosicfa">

                    <div className="somosicfa-img "></div>
                </div>
            </div>
            <div className="integrantes__icfa integrantes ">
                <div className="integrante__icfa integrante-1 ">
                    <div className="integrante-1-img integrante-img "></div>
                    <div className="integrante__icfa-description ">
                        <h2>Barbara Veloso</h2>
                        <p>Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                        <div className="somosicfa__info-seeMore seeMore ">
                            <NavLink to="https://www.somosicfa.cl/" target="_BLANK">
                                <button>IR</button>
                                <p className="seeMore-p-w">Conocer SomosIcfa</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="integrante__icfa integrante-2 ">
                    <div className="integrante-2-img integrante-img "></div>
                    <div className="integrante__icfa-description ">
                        <h2>Nelson Concha</h2>
                        <p>Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                        <div className="somosicfa__info-seeMore seeMore ">
                            <NavLink to="https://www.somosicfa.cl/" target="_BLANK">
                                <button>IR</button>
                                <p className="seeMore-p-w">Conocer SomosIcfa</p>
                            </NavLink>

                        </div>
                    </div>
                </div>
                <div className="integrante__icfa integrante-3 ">
                    <div className="integrante-3-img integrante-img "></div>
                    <div className="integrante__icfa-description ">
                        <h2>Carlos Apellido</h2>
                        <p>Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                        <div className="somosicfa__info-seeMore seeMore ">
                            <NavLink to="https://www.somosicfa.cl/" target="_BLANK">
                                <button>IR</button>
                                <p className="seeMore-p-w">Conocer SomosIcfa</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
