import { useEffect, useRef, useState } from "react";
import { Global } from "../../../Helpers/Global";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import event1 from '../../../assets/img/event1.jpg'
import { NearEvents } from "../participar/NearEvents";
import { NavLink } from "react-router-dom";
import { ModalParticipate } from "../modal/ModalParticipate";
import { ModalDonate } from "../modal/ModalDonate";
import { ButtonModalParticipate } from "../modal/ButtonModalParticipate";

export const NearEventsInicio = () => {
  const [events, setEvents] = useState([]);
  const contentRef = useRef(null);
  const [eventsRealized, setEventsRealized] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);
  const [modalOpenParticipe, setModalOpenParticipe] = useState(false);
  const [modalOpenDonate, setModalOpenDonate] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleScroll = () => {
    const element = contentRef.current;
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(elementTop < windowHeight && elementTop > -element.clientHeight);
    }
  };

  const participar = (eventId) => {
    setModalOpenParticipe(true);
    setSelectedEventId(eventId);
  };

  const donar = () => {
    setModalOpenDonate(true);
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

    <article className="container__events ">

      <div className="events__title">
        <h2>Eventos cercanos</h2>
      </div>
      {modalOpenParticipe && (
        <ButtonModalParticipate selectedEventId={selectedEventId}
          setModalOpenParticipe={setModalOpenParticipe} modalOpenParticipe={modalOpenParticipe}
        />

      )}
      {modalOpenDonate && (
        <ModalDonate setModalOpenDonate={setModalOpenDonate} />
      )}
      <div className="container-event">
        {nearEvents.length > 0 ?
          <Slider {...settings}>
            {nearEvents.map((event, index) => {
              return (
                <div className="container__event" key={event._id}>
                  <div className={`event-inicio event-${index + 1}`}>
                    <div className="cuadrado-pintura">
                      <div className="info__events">
                        <div className="button-event">
                          <button className="button-donar" onClick={donar}><span>Donar</span></button>
                          <button className="button-participar" onClick={() => participar(event._id)}><span>Participar</span></button>

                        </div>

                        <h3>{event.title}</h3>
                        <div className="time">
                          <div className="icon-time"></div>
                          <h5>10:00 AM</h5>
                        </div>
                        <NavLink to={'/event/' + event._id}>
                          <button className="info__events-seeMore nearSeeMore">Ver informacíon</button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>


              )
            })}
          </Slider>
          :
          <h2>No existen eventos cercanos</h2>}

      </div>
      {/* <div className="container-event">
        <Slider {...settings}>
          {events.map((event) => {
            return (
              <div className="card__near-events" key={event._id}>
                <div className="card-top">
                  <img src={event1} alt="event1" />
                </div>
                <div className="card-bottom">
                  <h2>{event.title}</h2>
                  <p>aquí va la descripción</p>
                  <h6>{event.date}</h6>
                </div>
                <button className="button-donar near-event-b">Ver información</button>
              </div>
            )
          })}
        </Slider>
      </div> */}
    </article>

  )
}
