import { useEffect, useState } from "react";
import { NearEvents } from "./NearEvents";
import imgEvents from '../../../assets/img/leon_juda.jpg'

export const Participar = () => {
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);


  return (
    <div className="container__participate">
      <div className="background__events">
        <img src={imgEvents} alt="image-background" className="image__background-participate" />
        <div className='events-semitransparente'></div>
      </div>
      <div className="participate__content">
        <div className={`participate__presentation ${loaded ? 'loaded' : ''}`}>
          <button className="boton-animado">Eventos</button>
          <h1>Tu granito hace un gran cambio</h1>
        </div>

        <div className="div__near-event-participation">
          <NearEvents />
        </div>
      </div>
    </div>
  )
}
