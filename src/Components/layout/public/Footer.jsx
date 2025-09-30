// src/Components/layout/public/Footer.jsx
import { NavLink } from "react-router-dom";
import avatar from "../../../assets/img/MarcaFCV_transparente.png";
import "../../../assets/css/footer.css";

/* === Iconos SVG (heredan color con currentColor) === */
const IconLocation = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
  </svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
  </svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 8a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.42.57 3.57a1 1 0 0 1-.24 1.03l-2.21 2.19Z"/>
  </svg>
);
const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.57 9.87v-6.98H7.9V12h2.53V9.8c0-2.5 1.5-3.89 3.79-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.98A10 10 0 0 0 22 12Z"/>
  </svg>
);
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.51 5.51 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
  </svg>
);
const IconWhatsapp = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.07 0C5.43.03.06 5.42 0 12.06A11.93 11.93 0 0 0 18.3 22l3.65 1-1-3.62A11.9 11.9 0 0 0 24 12.07a11.9 11.9 0 0 0-3.48-8.59ZM12.07 21A9 9 0 0 1 3 12.06C3 7.05 7.05 3 12.07 3A9 9 0 0 1 21 12.07 9 9 0 0 1 12.07 21Zm5.05-6.67c-.28-.14-1.67-.82-1.92-.92s-.45-.14-.64.14-.73.92-.9 1.1-.33.21-.61.07a7.41 7.41 0 0 1-2.18-1.34 8.19 8.19 0 0 1-1.52-1.9c-.16-.28 0-.43.12-.57s.28-.33.42-.5a1.9 1.9 0 0 0 .28-.47.52.52 0 0 0 0-.5c0-.14-.64-1.54-.88-2.1s-.47-.49-.64-.5h-.54a1 1 0 0 0-.71.33 3 3 0 0 0-.95 2.22 5.14 5.14 0 0 0 1.07 2.73 11.75 11.75 0 0 0 4.5 4.29c.63.27 1.12.43 1.51.55a3.64 3.64 0 0 0 1.67.1 2.73 2.73 0 0 0 1.78-1.24 2.25 2.25 0 0 0 .16-1.24c-.06-.1-.25-.16-.53-.3Z"/>
  </svg>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ft__wrap" role="contentinfo">
      {/* PRIMER BLOQUE */}
      <div className="ft__primary">
        <section className="ft__col ft__brand">
          <div className="ft__logo">
            <img src={avatar} alt="Fundación CreaVida" />
          </div>
          <p className="ft__desc">
            Transformamos vidas mediante iniciativas que inspiran, educan y
            acompañan. Tu apoyo nos permite llegar a más familias y comunidades.
          </p>
          <NavLink to="/participa" className="ft__cta">Hazte miembro</NavLink>
        </section>

        <nav className="ft__col" aria-label="Nosotros">
          <h3 className="ft__title">Nosotros</h3>
          <ul className="ft__list">
            <li><NavLink to="/acercaDe">Colaboradores</NavLink></li>
            <li><NavLink to="/participa">Ayúdanos</NavLink></li>
            <li>
              <a href="https://www.somosicfa.cl/" target="_blank" rel="noopener noreferrer">
                Nuestra iglesia
              </a>
            </li>
          </ul>
        </nav>

        <section className="ft__col" aria-label="Contáctanos">
          <h3 className="ft__title">Contáctanos</h3>
          <ul className="ft__list ft__contact">
            <li>
              <a href="https://goo.gl/maps/eqUh71kusXcKYG5b9" target="_blank" rel="noopener noreferrer">
                <IconLocation className="ft__icon" />
                <span>Serrano esquina Prat, Lota</span>
              </a>
            </li>
            <li>
              <a href="mailto:fcreavidaicfa@gmail.com">
                <IconMail className="ft__icon" />
                <span>fcreavidaicfa@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=56968105799&text=%C2%A1Hola!%20Quiero%20informaci%C3%B3n%20sobre%20CreaVida" target="_blank" rel="noopener noreferrer">
                <IconPhone className="ft__icon" />
                <span>+56 9 6810 5799</span>
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* SEGUNDO BLOQUE */}
      <div className="ft__secondary">
        <p className="ft__copy">
          © {year} CreaVida · Desarrollado por&nbsp;
          <a href="https://github.com/ClaudiaVillagran" target="_blank" rel="noopener noreferrer">
            Claudia Villagrán
          </a>
        </p>

        <ul className="ft__social" aria-label="Redes sociales">
          <li>
            <a href="https://www.facebook.com/somosicfa/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook className="ft__socialIcon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/somosicfa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram className="ft__socialIcon" />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=56968105799&text=%C2%A1Hola!%20Quiero%20informaci%C3%B3n%20sobre%20CreaVida" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <IconWhatsapp className="ft__socialIcon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
