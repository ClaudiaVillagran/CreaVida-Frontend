import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import "../../assets/css/sliderPast.css";

export class SliderResponsivePastEvents extends Component {
  render() {
    const { eventsRealized } = this.props;
    const len = eventsRealized?.length || 0;
    const isSingle = len === 1;

    const formatDate = (date) =>
      new Date(date).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

    const formatTime = (date) =>
      new Date(date).toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      });

    const settings = {
      dots: !isSingle,
      arrows: !isSingle,
      infinite: len > 3,
      speed: 500,
      slidesToShow: Math.min(3, len || 1),
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: Math.min(2, len || 1),
            slidesToScroll: 1,
            infinite: len > 2,
            dots: !isSingle,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !isSingle,
            arrows: !isSingle,
          },
        },
      ],
    };

    return (
      <div className={`pe-slider ${isSingle ? "is-single" : ""}`}>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {eventsRealized.map((event) => (
            <div className="pe-slide" key={event._id}>
              <article className="pe-card">
                <figure className="pe-media">
                  <img src={event.picture} alt={event.title} loading="lazy" />
                </figure>

                <div className="pe-body">
                  <h3 className="pe-title">{event.title}</h3>
                  <p className="pe-desc">{event.description}</p>

                  <div className="pe-meta">
                    <svg className="pe-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="pe-date">
                      {`${formatDate(event.date)} ${formatTime(event.date)} hrs`}
                    </span>
                  </div>

                  <NavLink to={`/eventPast/${event._id}`} className="pe-btn">
                    Ver información
                  </NavLink>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
