import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Global } from "../../../Helpers/Global";

export const NearEventsInicio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const contentRef = useRef(null);

  const handleScroll = () => {
    const element = contentRef.current;
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(elementTop < windowHeight && elementTop > -element.clientHeight);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);


    GetEvents()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

    <article className={`container__events scroll_reveal ${isVisible ? 'visible' : ''}`} ref={contentRef}>

      <div className="events__title">
        <h2 >Eventos cercanos</h2>
      </div>
      <div className="events__info white__card">
        <div className="events__info-text white__card">
          <p className="events__info-text-p ">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut la.</p>
          <div className="events__info-seeMore seeMore seeMoreb">
            <NavLink to="/participa">
              <button >IR</button>
              <p>Conocer más eventos</p>

            </NavLink>

          </div>
        </div>
        <div className="container__img-events">
          <div className="events-img "></div>
        </div>
      </div>
      <div className="events__near events">
        {events.map((event) => {
          return (
            <div className="event__near event-1" key={event._id}>
              <div className="event-1-img event-img "></div>
              <div className="event__near-description">
                <h2 >{event.title}</h2>
                <p>{'AQUI VA LA DESCRIPCION DEL EVENTO '+event.description}</p>
                <p>{event.date}</p>
                <div className="events__info-seeMore seeMore seeMoreb">
                  <NavLink to={'/event/'+event._id}>
                    <button>IR</button>
                    <p>Conocer sobre este evento</p>
                  </NavLink>
                </div>
              </div>
            </div>

          )
        })}
      </div>
    </article>

  )
}
