import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../../assets/css/sobreNosotros.css';

export const SobreNosotros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <article
        className={`container__sobreNosotros scroll_reveal ${isVisible ? 'visible' : ''}`}
        ref={contentRef}
      >
        <div className='portada-info info'>

          {/* Cover de video (abre modal) */}
          <div
            className="sn-video"
            role="button"
            aria-label="Reproducir video"
            onClick={() => setOpenVideo(true)}
          >
            {/* Si no tienes thumbnail, el fondo usa un gradiente (CSS) */}
            <div className="sn-video__overlay">
              <div className="sn-video__play">▶</div>
              <span className="sn-video__title">Nuestra misión en 60 segundos</span>
            </div>
          </div>

          {/* Texto corto + highlights */}
          <div className='data__presentation'>
            <h2>CreaVida</h2>
            <p>
              Conoce la esencia de nuestra fundación. Exploraremos juntos los proyectos,
              la misión y el impacto que logramos gracias a tu apoyo. ¡Sé parte de esta historia!
            </p>

            <ul className="sn-highlights">
              <li className="sn-pill">🤝 Apoyo directo a familias</li>
              <li className="sn-pill">🧑‍🤝‍🧑 Red de voluntariado</li>
              <li className="sn-pill">📍 Trabajo en terreno</li>
            </ul>
          </div>
        </div>

        <a href="#serParte" className="sn-arrow-link">
          <button className="button-arrow" aria-label="Ir a ¿Por qué ser parte?"></button>
        </a>
        <div id="serParte"></div>
      </article>

      <article className="container__ser-parte">
        <h2>¿POR QUÉ SER PARTE?</h2>
        <p className="ser-parte__p">
          Cada pequeño acto de bondad transforma realidades. Súmate como donante o voluntario y
          multipliquemos juntos el impacto.
        </p>
        <NavLink to="/acercaDe">
          <button className="button-donar">Conocer más sobre CreaVida</button>
        </NavLink>
      </article>

      {/* Modal de video */}
      {openVideo && (
        <div className="sn-modal" role="dialog" aria-modal="true" onClick={() => setOpenVideo(false)}>
          <div className="sn-modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="sn-modal__close" onClick={() => setOpenVideo(false)} aria-label="Cerrar">✕</button>
            <div className="sn-modal__frame">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0"
                title="Video CreaVida"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
