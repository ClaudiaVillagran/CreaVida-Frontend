import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalParticipate } from "../modal/ModalParticipate";
import { ModalDonate } from "../modal/ModalDonate";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const NearEvents = ({ nearEvents }) => {
  const [modalOpenParticipe, setModalOpenParticipe] = useState(false);
  const [modalOpenDonate, setModalOpenDonate] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  console.log("nearevents", nearEvents)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const participar = (eventId) => {
    setModalOpenParticipe(true);
    setSelectedEventId(eventId);
  };

  const donar = () => {
    setModalOpenDonate(true);
  };


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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
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

  // const GetEvents = async () => {
  //   const request = await fetch(Global.url + 'event/getEvents', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const data = await request.json();
  //   if (data.status == 'success') {
  //     console.log('getEvents', data)
  //     setEvents(data.events)
  //     console.log(events);
  //     for (let i = 0; i < events.length; i++) {
  //       const newDate = events[i].date;
  //       console.log(newDate, events[i])

  //     }
  //   }
  // }

  return (
    <div className="container__article-near">
      {modalOpenParticipe && (
        <ModalParticipate selectedEventId={selectedEventId}
          setModalOpenParticipe={setModalOpenParticipe}
        />

      )}
      {modalOpenDonate && (
        <ModalDonate setModalOpenDonate={setModalOpenDonate} />
      )}
      <div className="events__description">
        <h2>CreaVida a través de Chile</h2>
        <p><span>CreaVida</span> <i>naptatam alam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatm</i></p>
      </div>
      <div className="container__near_events">
        <Slider {...settings}>
          {nearEvents.map((event, index) => {
            return (
              <div className="container__event" key={event._id}>
                <div className={`event event-${index + 1}`}>
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
      </div>

    </div>
  )
}
