import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Global } from "../../../Helpers/Global";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import event1 from '../../../assets/img/event1.jpg'

export const NearEventsInicio = () => {
  const [events, setEvents] = useState([]);
  const contentRef = useRef(null);

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

    <article className="container__events ">

      <div className="events__title">
        <h2>Eventos cercanos</h2>
      </div>
      <div className="container-event">
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
        {/* {events.map((event) => {
          return (
            <div className="event__near event-1" key={event._id}>
              <div className="event-1-img event-img "></div>
              <div className="event__near-description">
                <h2 >{event.title}</h2>
                <p>{'AQUI VA LA DESCRIPCION DEL EVENTO ' + event.description}</p>
                <p>{event.date}</p>
                <div className="events__info-seeMore seeMore seeMoreb">
                  <NavLink to={'/event/' + event._id}>
                    <button>IR</button>
                    <p>Conocer sobre este evento</p>
                  </NavLink>
                </div>
              </div>
            </div>

          )
        })} */}
      </div>
    </article>

  )
}
