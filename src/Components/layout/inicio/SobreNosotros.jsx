import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export const SobreNosotros = () => {

    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);

    const handleScroll = () => {
        let element = contentRef.current;
        if (element) {
            let elementTop = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            setIsVisible(elementTop < windowHeight && elementTop > -element.clientHeight);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <article className={`container__sobreNosotros scroll_reveal ${isVisible ? 'visible' : ''}`} ref={contentRef} >
            <div className="sobreNosotros__title ">
                <h2>Nuestra Fundación</h2>
            </div>
            <div className="sobreNosotros__description ">
                <div className="sobreNosotros__description-text ">
                    <p className="sobreNosotros__description-text-p ">rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>

                    <h3>Barbara Apellido</h3>
                    <h4>Administradora CreaVida</h4>
                    <div className="sobreNosotros__fundacion seeMore ">
                        <NavLink to="/acercaDe">
                            <button>IR</button>
                            <p className="seeMore-p-w">Conocer CreaVida</p>
                        </NavLink>
                    </div>
                </div>
                <div className="container__img-sobreNosotros">
                    <div className="sobreNosotros__description-img "></div>

                </div>

            </div>
        </article>
    )
}
