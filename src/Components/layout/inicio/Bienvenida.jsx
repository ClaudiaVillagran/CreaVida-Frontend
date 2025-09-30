// src/Components/layout/inicio/Bienvenida.jsx
import { useEffect, useState } from 'react';
import { Section } from '../../layout/inicio/Section';
import imgLogo from '../../../assets/img/MarcaFCV_transparente.png';
import imgSolidaridad from '../../../assets/img/barbaraynelson.png';
import { NavLink } from 'react-router-dom';
import '../../../assets/css/bienvenida.css';

export const Bienvenida = () => {
const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 992 : true
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const onResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

   return (
    <>
      <div className="principal__container">
        <div className='presentation__inicio'>
          <div className='presentation__logo'>
            <img src={imgLogo} alt="Fundación CreaVida" loading="eager" decoding="async" />
          </div>

          <div className='container_presentation-description'>
            <p className='presentation__description-first'>“Impacto con amor y solidaridad.”</p>
            <p className='presentation__description'>Únete donando o como voluntario</p>
          </div>

          <NavLink to="/participa">
            <button className="presentation-button">Ir a donar</button>
          </NavLink>
        </div>

        {/* Solo renderiza la imagen en desktop */}
        {isDesktop && (
          <div className="background__solidaridad">
            <img src={imgSolidaridad} alt="Voluntariado CreaVida" loading="lazy" decoding="async" />
          </div>
        )}
      </div>

      <Section />
    </>
  );
};
