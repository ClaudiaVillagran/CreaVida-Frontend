import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from 'react-router-dom';

export class SliderResponsive extends Component {
    render() {
        const { nearEvents, donar, participar } = this.props;
        console.log(nearEvents)
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
                    {nearEvents.map((event, index) => {
                        return (

                            <div className="card__near-events near" key={event._id} style={{ maxWidth: '200px' }}>
                                <div className="card-top">
                                    <img src={event.picture} alt="event1" />
                                </div>
                                <div className="card-bottom-near">
                                    <div className="info__events">
                                        <div className="button-event">
                                            <button className="button-donar" onClick={donar}><span>Donar</span></button>
                                            <button className="button-participar part" onClick={() => participar(event._id)}><span>Participar</span></button>

                                        </div>

                                        <h3 className="titleEventCarrousel">{event.title}</h3>
                                        <p >{event.description}</p>
                                        <div className="time">
                                            <div className="icon-time"></div>

                                            <h5 className="date">{`${formatDate(event.date)} ${formatTime(event.date)} hrs`}</h5>
                                        </div>
                                        <NavLink to={'/event/' + event._id}>
                                            <button className="info__events-seeMore nearSeeMore">Ver informacíon</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>


                            // <div className="container__event" key={event._id}>
                            //     <div className={`event-inicio event-${index + 1}`}>
                            //         <div className="cuadrado-pintura">
                            //             <div className="info__events">
                            //                 <div className="button-event">
                            //                     <button className="button-donar" onClick={donar}><span>Donar</span></button>
                            //                     <button className="button-participar" onClick={() => participar(event._id)}><span>Participar</span></button>

                            //                 </div>

                            //                 <h3>{event.title}</h3>
                            //                 <div className="time">
                            //                     <div className="icon-time"></div>

                            //                     <h5>{event.time}</h5>
                            //                 </div>
                            //                 <NavLink to={'/event/' + event._id}>
                            //                     <button className="info__events-seeMore nearSeeMore">Ver informacíon</button>
                            //                 </NavLink>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        )
                    })}
                </Slider>

            </div>
        );
    }
}
