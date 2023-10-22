import { useEffect, useState } from "react";
import { NearEvents } from "./NearEvents";
import imgEvents from '../../../assets/img/leon_juda.jpg'
import { Global } from "../../../Helpers/Global";

export const Participar = () => {
  const [loaded, setLoaded] = useState(false);
  const [eventsRealized, setEventsRealized] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    GetEvents();
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  const GetEvents = async () => {
    const request = await fetch(Global.url + 'event/getEvents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await request.json();
    if (data.status === 'success') {
      const nowDate = new Date();
      nowDate.setHours(0, 0, 0, 0);

      const realizedEvents = [];
      const futureEvents = [];

      for (let i = 0; i < data.events.length; i++) {
        const eventDate = new Date(data.events[i].date);
        eventDate.setHours(0, 0, 0, 0);

        if (eventDate < nowDate) {
          realizedEvents.push(data.events[i]);
        } else {
          futureEvents.push(data.events[i]);
        }
      }

      setEventsRealized(realizedEvents);
      setNearEvents(futureEvents);

    }

  }
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
        {nearEvents.length > 0 ?
          <NearEvents nearEvents={nearEvents} />
          :
          <h2>No existen eventos cercanos</h2>}


        </div>
      </div>
    </div>
  )
}
