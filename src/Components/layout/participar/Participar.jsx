import { useEffect, useState } from "react";
import { NearEvents } from "./NearEvents";

export const Participar = () => {
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);


  return (
    <>
      <div className="container__presentation">

      </div>
      <div className='events-semitransparente'></div>
      <div className={`events__presentation participar_events ${loaded ? 'loaded' : ''}`}>
        <button className="boton-animado">Participa</button>
        <h1>Tu granito puede hacer un gran cambio</h1>
      </div>
      <div className="div__near-event-participation">
        <h2 className="title-near-event-participation">Selecciona en cual evento vas a participar</h2>
        <NearEvents />
      </div>
    </>
  )
}
