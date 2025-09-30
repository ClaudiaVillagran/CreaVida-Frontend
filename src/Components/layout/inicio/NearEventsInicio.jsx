import { useEffect, useRef, useState } from "react";
import { Global } from "../../../Helpers/Global";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModalDonate } from "../modal/ModalDonate";
import { ButtonModalParticipate } from "../modal/ButtonModalParticipate";
import { SliderResponsive } from "../../carrousel/SliderResponsive";
import '../../../assets/css/nearEventsInicio.css';

export const NearEventsInicio = () => {
  const contentRef = useRef(null);
  const [eventsRealized, setEventsRealized] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);
  const [modalOpenParticipe, setModalOpenParticipe] = useState(false);
  const [modalOpenDonate, setModalOpenDonate] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

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
    console.log(data);
    if (data.status === 'success') {
      const realizedEvents = [];
      const futureEvents = [];
      const nowDate = new Date();

      for (let i = 0; i < data.events.length; i++) {
        const eventDate = new Date(data.events[i].date);

        if (eventDate < nowDate) {
          realizedEvents.push(data.events[i]);
       
        } else {
          // Obtén la hora directamente del objeto eventDate
          const eventWithTime = {
            ...data.events[i],
            time: eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };

          futureEvents.push(eventWithTime);
        }
      }

      setEventsRealized(realizedEvents);
      setNearEvents(futureEvents);
    }
  };


  return (

    <article className="container__events nearInicio">

      <div className="events__title">
        <h2 className="title-sections">EVENTOS CERCANOS</h2>
        <p><span><i>Únete a nosotros </i> </span> <i>en eventos que están a punto de desplegarse, donde la generosidad y la solidaridad crearán experiencias inolvidables.</i></p>
      </div>
      {modalOpenParticipe && (
        <ButtonModalParticipate selectedEventId={selectedEventId}
          setModalOpenParticipe={setModalOpenParticipe} modalOpenParticipe={modalOpenParticipe}
        />

      )}
      {modalOpenDonate && (
        <ModalDonate setModalOpenDonate={setModalOpenDonate} />
      )}
      <div className="container-event-near">
        {nearEvents.length > 0 ?
          <>
            <SliderResponsive  nearEvents={nearEvents} donar={donar} participar={participar} />
          </>
         
          :
          <h2>No existen eventos cercanos</h2>}

      </div>
    </article>

  )
}


