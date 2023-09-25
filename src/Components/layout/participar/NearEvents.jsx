import { useEffect, useState } from "react";
import { Global } from "../../../Helpers/Global";
import { NavLink } from "react-router-dom";

export const NearEvents = () => {
  const [modalOpenParticipe, setModalOpenParticipe] = useState(false);
  const [modalOpenDonate, setModalOpenDonate] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    GetEvents();
    window.scrollTo(0, 0);
  }, [])

  const participar = () => {
    setModalOpenParticipe(true);
  };
  const donar = () => {
    setModalOpenDonate(true);
  };
  const closeModal = () => {
    setModalOpenParticipe(false);
    setModalOpenDonate(false);
  };
  const GetEvents = async () => {
    const request = await fetch(Global.url + 'event/getEvents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await request.json();
    if (data.status == 'success') {
      console.log('getEvents', data)
      setEvents(data.events)
      console.log(events)
    }
  }
  return (
    <div>
      {modalOpenParticipe && (
        <div className="modal">
          <div className="participation-box">

            <span className="modal__close" onClick={closeModal}>&times;</span>

            <h6>Gracias por querer ser parte</h6>
            <form className="form__participate">
              <div className="input-box" >
                <input type="text" id="nombre" name="nombre" required />
                <label htmlFor="nombre" >Nombre:</label>
              </div>
              <div className="input-box" >
                <input type="text" id="apellido" name="apellido" required />
                <label htmlFor="apellido" >Apellido:</label>
              </div>

              <div className="input-box" >

                <input type="text" id="edad" name="edad" required />
                <label htmlFor="edad" >Edad:</label>
              </div>

              <div className="input-box" >
                <input type="text" id="contacto" name="contacto" required />
                <label htmlFor="contacto" >Contacto:</label>
              </div>

              <div className="input-box" >
                <textarea id="mensaje" name="mensaje" rows="2" required></textarea>
                <label htmlFor="mensaje" >Mensaje:</label>
              </div>
              <div className="buttons-form">
                <button type="submit" className="button-submit">Enviar</button>
                <button className="button-close" onClick={closeModal}>Cerrar</button>
              </div>

            </form>


          </div>
        </div>
      )}
      {modalOpenDonate && (
        <div className="modal">
          <div className="participation-box">
            <span className="modal__close " onClick={closeModal}>&times;</span>

            <h6 className="donate-h6">Gracias por querer ser parte</h6>
            <p className="method_donation"><i>Selecciona el método para donar</i></p>
            <div className="options-donate">
              <button className="button-donate">Transferencia</button>
              <button className="button-donate">WebPay</button>
              <button className="button-donate">PayPal</button>
            </div>

          </div>
        </div>
      )}
      <div className="events__description">
        <h2>CreaVida a través de Chile</h2>
        <p><span>CreaVida</span> <i>naptatam alam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatm</i></p>
      </div>
      <div className="container__near_events">
        {events.map((event) => {
          return (
            <div className="container__event" key={event._id}>
              <div className="event event-1">
                <div className="cuadrado-pintura">
                  <div className="info__events">
                    <div className="button-event">
                      <button className="button-donar" onClick={donar}><span>Donar</span></button>
                      <button className="button-participar" onClick={participar}><span>Participar</span></button>

                    </div>

                    <h3>{event.title}</h3>
                    <div className="time">
                      <div className="icon-time"></div>
                      <h5>10:00 AM</h5>
                    </div>
                    <NavLink to={'/event/'+event._id}>
                    <button className="info__events-seeMore nearSeeMore">Ver informacíon</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>

    </div>
  )
}
