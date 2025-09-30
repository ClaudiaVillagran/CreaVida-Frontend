// src/Components/layout/inicio/Events.jsx
import { useEffect, useState } from "react";
import { Global } from "../../../Helpers/Global";
import { NearEventsInicio } from "./NearEventsInicio";
import { SliderResponsivePastEvents } from "../../carrousel/SliderResponsivePastEvents";
import "../../../assets/css/events.css";

export const Events = () => {
  const [eventsRealized, setEventsRealized] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    GetEvents();
  }, []);

  const GetEvents = async () => {
    try {
      const request = await fetch(Global.url + "event/getEvents", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();

      if (data?.status === "success") {
        const now = new Date();
        const realized = [];
        const future = [];
        for (const ev of data.events) {
          const d = new Date(ev.date);
          if (d < now) realized.push(ev);
          else future.push(ev);
        }
        setEventsRealized(realized);
        setNearEvents(future);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="events">
      {/* HERO */}
      <section className="events__hero">
        <div className="ev-container events__hero-inner">
          <span className="eyebrow">Eventos</span>
          <h1>Conoce cómo puedes ayudar</h1>
          <p>
            Participa como voluntario, dona o comparte. Cada aporte suma para
            transformar realidades.
          </p>
        </div>
      </section>

      {/* PRÓXIMOS EVENTOS (usa NearEventsInicio SIN header y con tema claro) */}
      <section className="events__upcoming">
        <div className="ev-container">
          {/* <header className="section-head">
            <h2 className="title-sections">PRÓXIMOS EVENTOS</h2>
            <p className="section-sub">
              Únete a iniciativas que están por comenzar y sé parte del cambio.
            </p>
          </header> */}

          {nearEvents.length > 0 ? (
            <NearEventsInicio nearEvents={nearEvents} withHeader={false} />
          ) : (
            <p className="empty">No existen eventos cercanos</p>
          )}
        </div>
      </section>

      {/* EVENTOS REALIZADOS */}
      <section className="events__past">
        <div className="ev-container">
          <header className="section-head">
            <h2 className="title-sections">EVENTOS REALIZADOS</h2>
            <p className="section-sub">Una mirada a momentos que ya dejaron huella.</p>
          </header>

          <div className="events__past-slider">
            {eventsRealized.length > 0 ? (
              <SliderResponsivePastEvents eventsRealized={eventsRealized} />
            ) : (
              <p className="empty">No existen eventos realizados</p>
            )}
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="events__faq" id="faq">
        <div className="ev-container">
          <header className="section-head">
            <h2 className="title-sections">PREGUNTAS FRECUENTES</h2>
          </header>

          <div className="faq">
            <details className="faq-item" open>
              <summary>
                <span>¿Qué es CreaVida?</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="chev">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </summary>
              <div className="faq-body">
                <p>
                  CreaVida es una fundación sin fines de lucro que impulsa
                  acciones y programas para fortalecer la compasión, la
                  generosidad y el servicio en comunidad.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span>¿Cómo puedo participar en los eventos?</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="chev">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </summary>
              <div className="faq-body">
                <p>
                  Puedes inscribirte como voluntario, donar o asistir. Revisa los
                  próximos eventos para conocer fechas y formas de participar.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span>¿Cómo dono?</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="chev">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </summary>
              <div className="faq-body">
                <p>
                  Puedes donar online desde nuestra web o realizar una transferencia.
                  Cada aporte tiene un impacto real en los proyectos.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span>¿Cómo ser voluntario?</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="chev">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </summary>
              <div className="faq-body">
                <p>
                  En la sección de voluntariado encontrarás oportunidades
                  disponibles y el formulario de registro.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span>¿Cuál es el impacto de mi donación?</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="chev">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </summary>
              <div className="faq-body">
                <p>
                  Financia actividades, materiales y acompañamiento en terreno.
                  Te mantenemos al tanto del avance e impacto de los proyectos.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};
