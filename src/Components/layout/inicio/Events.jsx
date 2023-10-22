import React, { useEffect, useState } from "react";
import imgEvents from '../../../assets/img/event5 (4).jpg'
import { Global } from "../../../Helpers/Global";
import { NearEvents } from "../participar/NearEvents";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import event1 from '../../../assets/img/event1.jpg'

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";



export const Events = () => {
  const [loaded, setLoaded] = useState(false);
  const [eventsRealized, setEventsRealized] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);


  const theme = createTheme({
    typography: {
      fontSize: 20,
    },
  });

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


  useEffect(() => {
    GetEvents();
    setTimeout(() => {
      setLoaded(true);
    }, 200);
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
    <div className="container-events">
      <div className="background__events">
        <img src={imgEvents} alt="image-background" className="image-background-events" />
        <div className='events-semitransparente'></div>
      </div>
      <div className="events__content">
        <div className={`events__presentation ${loaded ? 'loaded' : ''}`}>
          <button className="boton-animado">Eventos</button>
          <h1>Conoce como puedes ayudar</h1>
        </div>
        {nearEvents.length > 0 ?
          <NearEvents nearEvents={nearEvents} />
          :
          <h2>No existen eventos cercanos</h2>}


        <article className="container__events ">

          <div className="events__realized-tittle">
            <h2>Eventos Realizados</h2>
            <p ><i>We offer a competitive array of employee benefits that go beyond the basics. We want Rioters to work hard, play their hearts out, and take time to recharge and find inspiration</i></p>
          </div>

          <div className="container-event">
            {eventsRealized.length > 0 ?
              <Slider {...settings}>
                {eventsRealized.map((event) => {
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
              :
              <h2>No existen eventos realizados</h2>
            }
          </div>
        </article>

        <div className="container__questions">
          <div className="questions-title" id="eventsas">
            <h2>Preguntas frecuentes</h2>
          </div>
          <ThemeProvider theme={theme}>
          <div className="container__acordions-questions">
            <Accordion  theme={theme}
                sx={{
                  border: '1px solid #60ad26',
                  borderBottom: '0px solid #fff',

                }}>
                  
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                
                sx={{
                  background: '#1f201f',
                  color:'#60ad26',
                  
                  
                }}

              >
                <Typography >Pregunta 1</Typography>
              </AccordionSummary>
              <AccordionDetails   
                sx={{
                  background: '#0f100e',
                  color:'#fff',
                  
                }}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                  border: '1px solid #60ad26',
                }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{
                  background: '#1f201f',
                  color:'#60ad26',
                }}
              >
                <Typography>Pregunta 2</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{
                  background: '#0f100e',
                  color:'#fff',
                }}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          </ThemeProvider>
        </div>

      </div>
    </div>







  )
}
