import { NavLink } from "react-router-dom";

export const NearEventsHeader = () => {
  return (
    <header className="ne-head" aria-labelledby="near-events-title">
      <span className="ne-eyebrow">Próximos</span>
      <h2 id="near-events-title" className="ne-title">Eventos cercanos</h2>
      <p className="ne-sub">
        Súmate a las actividades que se vienen. Tu participación hace la diferencia.
      </p>
      <NavLink to="/eventos" className="ne-cta" aria-label="Ver todos los eventos">
        Ver todos
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </NavLink>
    </header>
  );
};
