// src/Components/layout/inicio/SobreNosotros.jsx
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../../assets/css/sobreNosotros.css';
export const SobreNosotros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if(!el) return;
    const io = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <article className={`container__sobreNosotros scroll_reveal ${isVisible ? 'visible' : ''}`} ref={contentRef}>
        <div className='portada-info info'>
          <div><h1 style={{ textAlign: 'center' }}>aqui va el video de presentacion de la pastora</h1></div>
          <div className='data__presentation'>
            <h2>CreaVida</h2>
            <p> Conoce la esencia de nuestra fundación. Exploraremos juntos los proyectos, la misión y el impacto que logramos gracias a tu apoyo. ¡Conviértete en parte de nuestra historia!</p>
          </div>
        </div>
        <a href="#serParte"><button className="button-arrow"></button></a>
        <div id="serParte"></div>
      </article>

      <article className="container__ser-parte">
        <h2>¿POR QUÉ SER PARTE?</h2>
        <p className="ser-parte__p">Cada pequeño acto de bondad refleja la luz del cristianismo...</p>
        {/* ...resto tal cual... */}
        <NavLink to="/acercaDe">
          <button className="button-donar">Conocer más sobre CreaVida</button>
        </NavLink>
      </article>
    </>
  );
};
