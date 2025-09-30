
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

export class SliderResponsive extends Component {
    render() {
        const { nearEvents, donar, participar } = this.props;
        const isSingle = (nearEvents?.length || 0) === 1;

        const formatDate = (date) =>
            new Date(date).toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' });

        const formatTime = (date) =>
            new Date(date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

        const settings = {
            dots: !isSingle,           // sin dots si es 1
            arrows: !isSingle,         // sin flechas si es 1
            infinite: !isSingle,       // no infinito si es 1
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: !isSingle, dots: !isSingle } },
                { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 0 } },
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        };

        return (
            <div className={`containerSlider ${isSingle ? 'is-single' : ''}`}>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {nearEvents.map((event) => (
                        <div className="slide-shell" key={event._id}>
                            <article className="card__near-events near">
                                <div className="card-top">
                                    <img src={event.picture} alt={event.title} loading="lazy" />
                                </div>

                                <div className="card-bottom-near">
                                    <div className="info__events">
                                        <div className="button-event">
                                            <button className="button-donar" onClick={donar}><span>Donar</span></button>
                                            <button className="button-participar part" onClick={() => participar(event._id)}>
                                                <span>Participar</span>
                                            </button>
                                        </div>

                                        <h3 className="titleEventCarrousel">{event.title}</h3>
                                        <p className="desc">{event.description}</p>

                                        <div className="time">
                                          <AccessTimeRoundedIcon className="icon-time" fontSize="small" />
                                            <h5 className="date">{`${formatDate(event.date)} ${formatTime(event.date)} hrs`}</h5>
                                        </div>


                                        <NavLink to={'/event/' + event._id}>
                                            <button className="info__events-seeMore nearSeeMore">Ver información</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
