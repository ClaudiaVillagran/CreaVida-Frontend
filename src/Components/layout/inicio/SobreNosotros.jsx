import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import video from '../../../assets/img/presen.mp4'
import ReactPlayer from "react-player";

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
        <>

            <article className={`container__sobreNosotros scroll_reveal ${isVisible ? 'visible' : ''}`} ref={contentRef} >
                <div className='portada-info info'>
                    <div >
                        <ReactPlayer
                            url={video}
                            controls
                            config
                            playIcon
                            muted
                            width='100%'
                            height='auto'
                        />
                    </div>
                    <div className='data__presentation'>
                        <h2>CreaVida</h2>
                        <p> Conoce la esencia de nuestra fundación. Exploraremos juntos los proyectos, la misión y el impacto que logramos gracias a tu apoyo. ¡Conviértete en parte de nuestra historia!</p>
                    </div>
                </div>
                {/* <div className="container__buttons-inicio">
                    <Navigate url="eventos/#eventsas" style="button-donar" text="Eventos cercanos" />
                    <a href="#serParte">
                        <button className="button-donar">¿Por qué ser parte?</button>
                    </a>
                    <NavLink to="https://www.somosicfa.cl/" target="_blank">  <button className="button-donar">Nuestra iglesia</button></NavLink>
                </div>


                <div className="container__nuestro-equipo">
                    <h2>NUESTROS LÍDERES</h2>
                    <div className="container__lideres">
                        <div className="container__lider">
                            <div className="container__img-lider">
                                <img src={imgBarbara} alt="Bárbara" />
                            </div>
                            <h3>Bárbara Veloso</h3>
                            <p>Directora ejecutiva</p>
                        </div>
                        <div className="container__lider">
                            <div className="container__img-lider">
                                <img src={imgRut} alt="Rut" />
                            </div>
                            <h3>Ruth Alvarez</h3>
                            <p>Trabajadora social</p>
                        </div>
                    </div>
                </div> */}
                <a href="#serParte">
                    <button className="button-arrow">
                    </button>
                </a>
                <div id="serParte"></div>
            </article>
            <article className="container__ser-parte" >
                <h2 >¿POR QUÉ SER PARTE?</h2>
                <p className="ser-parte__p">Cada pequeño acto de bondad refleja la luz del cristianismo, y al hacerlo, inspiramos a otros a unirse a esta hermosa misión de amor y solidaridad. ¡Vamos juntos a hacer la diferencia que nuestro mundo tanto necesita!</p>
                <div className="container__values">
                    <div className="container__specific-value love">
                        <div className="container__img-value">
                            {/* <img src={iconCaridad} alt="Caridad y amor al prójimo img"/> */}
                            <div className="img-value-love" />
                        </div>
                        <h4 className="title__value">Amor al prójimo</h4>
                        <p className="description__value"> La Biblia enfatiza el mandamiento de amar a tu prójimo como a ti mismo (Mateo 22:39). Donar es una manifestación concreta de este amor al ayudar a quienes enfrentan dificultades.</p>
                    </div>
                    <div className="container__specific-value honra">
                        <div className="container__img-value">
                            <div className="img-value-honra" />
                        </div>
                        <h4 className="title__value">Honrar a Dios</h4>
                        <p className="description__value">La Biblia también enseña sobre la importancia de honrar a Dios con nuestros recursos y bendiciones (Proverbios 3:9). Donar es una forma de mostrar gratitud por lo que hemos recibido.</p>
                    </div>
                    <div className="container__specific-value samaritano">
                        <div className="container__img-value">
                            <div className="img-value-samaritano" />
                        </div>
                        <h4 className="title__value">El buen samaritano</h4>
                        <p className="description__value">La parábola del buen samaritano (Lucas 10:25-37) destaca la importancia de mostrar misericordia y compasión hacia quienes están en necesidad, sin importar su origen.</p>
                    </div>

                </div>
                <NavLink to={"/acercaDe"}>

                    <button className="button-donar">Conocer más sobre CreaVida</button>
                </NavLink>
            </article>
        </>

    )
}
