import { useEffect, useRef, useState } from "react";

export const NearEventsInicio = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <article className={`container__events scroll_reveal ${isVisible ? 'visible' : ''}`} ref={contentRef}>

      <div className="events__title">
        <h2 >Eventos cercanos</h2>
      </div>
      <div className="events__info white__card">
        <div className="events__info-text white__card">
          <p className="events__info-text-p ">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut la.</p>
          <div className="events__info-seeMore seeMore">
            <button >IR</button>
            <p>Conocer más eventos</p>
          </div>
        </div>
        <div className="container__img-events">
          <div className="events-img "></div>
        </div>
      </div>
      <div className="events__near events">
        <div className="event__near event-1">
          <div className="event-1-img event-img "></div>
          <div className="event__near-description">
            <h2 >Incendios</h2>
            <p >Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt u</p>
            <div className="events__info-seeMore seeMore">
              <button>IR</button>
              <p>Conocer sobre este evento</p>
            </div>
          </div>
        </div>

        <div className="event__near event-2">
          <div className="event-2-img event-img "></div>
          <div className="event__near-description">
            <h2 >Incendios</h2>
            <p >Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt u</p>
            <div className="events__info-seeMore seeMore">
              <button >IR</button>
              <p>Conocer sobre este evento</p>
            </div>
          </div>
        </div>

        <div className="event__near event-3">
          <div className="event-3-img event-img "></div>
          <div className="event__near-description">
            <h2 >Incendios</h2>
            <p >Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt u</p>
            <div className="events__info-seeMore seeMore">
              <button>IR</button>
              <p>Conocer sobre este evento</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
