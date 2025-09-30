import { useState } from "react";
import { ButtonModalSocio } from "../modal/ButtonModalSocio";
import { ModalDonate } from "../modal/ModalDonate";
import "../../../assets/css/optionsMember.css";

export const OptionsMember = () => {
  const [modalOpenDonate, setModalOpenDonate] = useState(false);
  const [modalOpenSocio, setModalOpenSocio] = useState(false);

  return (
    <section className="om2" aria-labelledby="om2-title">
      {modalOpenDonate && <ModalDonate setModalOpenDonate={setModalOpenDonate} />}
      {modalOpenSocio && (
        <ButtonModalSocio
          setModalOpenSocio={setModalOpenSocio}
          modalOpenSocio={modalOpenSocio}
        />
      )}

      <div className="om2__grid">
        {/* SER SOCIO — tarjeta “verde crema” */}
        <article className="om2__card om2__card--cream" role="region" aria-labelledby="om2-socio">
          <span className="om2__chip">SER PARTE DE LA COMUNIDAD</span>
          <h2 id="om2-socio" className="om2__title">Ser socio</h2>
          <hr className="om2__divider" />
          <p className="om2__text">
            Compromiso continuo con aportes regulares (mensuales, trimestrales o anuales) que sostienen nuestros proyectos con impacto real.
          </p>
          <ul className="om2__bullets">
            <li>Impacto sostenido</li>
            <li>Actualizaciones periódicas</li>
            <li>Invitaciones a actividades</li>
          </ul>
          <div className="om2__spacer" />
          <hr className="om2__divider" />
          <div className="om2__actions">
            <button
              type="button"
              className="om2__btn om2__btn--solid"
              onClick={() => setModalOpenSocio(true)}
            >
              Inscribirse
              <svg className="om2__arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </article>

        {/* DONAR — tarjeta blanca con acentos en verde */}
        <article className="om2__card om2__card--white" role="region" aria-labelledby="om2-donar">
          <span className="om2__chip om2__chip--line">APORTE</span>
          <h2 id="om2-donar" className="om2__title">Donar</h2>
          <hr className="om2__divider" />
          <p className="om2__text">
            Donación única o esporádica para financiar actividades, materiales y acompañamiento en terreno. Cada aporte cuenta.
          </p>
          <ul className="om2__bullets om2__bullets--muted">
            <li>Impacto inmediato</li>
            <li>Proceso simple y seguro</li>
            <li>Transparencia</li>
          </ul>
          <div className="om2__spacer" />
          <hr className="om2__divider" />
          <div className="om2__actions">
            <button
              type="button"
              className="om2__btn om2__btn--outline"
              onClick={() => setModalOpenDonate(true)}
            >
              Donar ahora
              <svg className="om2__arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
