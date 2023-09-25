import { useEffect, useState } from "react";
import imgEvents from '../../../assets/img/event5 (4).jpg'
import { NearEvents } from "../participar/NearEvents";

export const Events = () => {
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);


  return (
    <div className="container-events">
      <div className="background__events">
        <img src={imgEvents} alt="image-background" className="image-background-events" />
        <div className='events-semitransparente'></div>
      </div>
      <div className="events__content">
        <div className={`events__presentation ${loaded ? 'loaded' : ''}`}>
          <button className="boton-animado">Eventos</button>
          <h1>Conoce como puedes ayudar</h1>
        </div>
        <div className="events__realized-tittle">
          <h2>Eventos Realizados</h2>
          <p ><i>We offer a competitive array of employee benefits that go beyond the basics. We want Rioters to work hard, play their hearts out, and take time to recharge and find inspiration</i></p>
        </div>
        <div className="events__realized__container">
          <div className="container__event">
            <div className="event event-1">
              <div className="cuadrado-pintura">
                <div className="info__events">
                  <button className="info__events-seeMore">Ver informacíon</button>
                  <h3>Lota, Concepción</h3>
                  <div className="time">
                    <div className="icon-time"></div>
                    <h5>10:00 AM</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container__event">
            <div className="event  event-2">
              <div className="cuadrado-pintura">
                <div className="info__events">
                  <button className="info__events-seeMore">Ver informacíon</button>
                  <h3>Coronel, Concepción</h3>
                  <div className="time">
                    <div className="icon-time"></div>
                    <h5>10:00 AM</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container__event">
            <div className="event  event-3">
              <div className="cuadrado-pintura">
                <div className="info__events">
                  <button className="info__events-seeMore">Ver informacíon</button>
                  <h3>Coronel, Concepción</h3>
                  <div className="time">
                    <div className="icon-time"></div>
                    <h5>10:00 AM</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container__event">
            <div className="event  event-4">
              <div className="cuadrado-pintura">
                <div className="info__events">
                  <button className="info__events-seeMore">Ver informacíon</button>
                  <h3>Coronel, Concepción</h3>
                  <div className="time">
                    <div className="icon-time"></div>
                    <h5>10:00 AM</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NearEvents />
        <div className="container__questions">
          <div className="questions-title">
            <h2>Preguntas frecuentes</h2>
          </div>
          <div className="questions">
            <div>
              <h3>Pregunta 1</h3>
              <p>aptatam alam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatm</p>

            </div>
            <div>
              <h3>Pregunta 1</h3>
              <p>aptatam alam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatm</p>

            </div>

            <div>
              <h3>Pregunta 1</h3>
              <p>aptatam alam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatm</p>

            </div>
            <div>
              <h3>Pregunta 1</h3>
              <p>aptatam alam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
