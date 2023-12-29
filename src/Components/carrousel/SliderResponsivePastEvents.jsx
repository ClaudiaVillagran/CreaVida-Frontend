import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from 'react-router-dom';

export class SliderResponsivePastEvents extends Component {
    render() {
        const { eventsRealized} = this.props;
        const formatDate = (date) => {
            const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
            return new Date(date).toLocaleDateString('es-ES', options);
          };
      
          const formatTime = (date) => {
            const options = { hour: '2-digit', minute: '2-digit' };
            return new Date(date).toLocaleTimeString('es-ES', options);
          };
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
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
        }
        return (
            <div className="containerSlider">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {eventsRealized.map((event, index) => {
                        return (
                            <div className="card__near-events" key={event._id} style={{ maxWidth: '200px' }}>
                                <div className="card-top">
                                    <img src={event.picture} alt="event1" />
                                </div>
                                <div className="card-bottom">
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                                    <h6>{`${formatDate(event.date)} ${formatTime(event.date)} hrs`}</h6>
                                </div>
                                <button className="button-donar near-event-b">Ver información</button>
                            </div>
                        )
                    })}
                </Slider>

            </div>
        );
    }
}
