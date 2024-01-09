import { useEffect, useState } from "react";
import imgEvents from '../../../assets/img/event5 (4).jpg'
import { Global } from "../../../Helpers/Global";
import { NearEvents } from "../participar/NearEvents";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { SliderResponsivePastEvents } from "../../carrousel/SliderResponsivePastEvents";



export const Events = () => {
  const [loaded, setLoaded] = useState(false);
  const [eventsRealized, setEventsRealized] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);

  const theme = createTheme({
    typography: {
      fontSize: 20,
    },
  });




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

      const realizedEvents = [];
      const futureEvents = [];

      for (let i = 0; i < data.events.length; i++) {
        const eventDate = new Date(data.events[i].date);

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
        <div className="events__presentation ">
          <button className="boton-animado">Eventos</button>
          <h1>Conoce como puedes ayudar</h1>
        </div>
        <div className='events-semitransparente'></div>
      </div>
      <div className="events__content">
        
        {nearEvents.length > 0 ?
          <NearEvents nearEvents={nearEvents} />
          :
          <h2>No existen eventos cercanos</h2>}


        <article className="container__events ">

          <div className="events__realized-tittle">
            <h2 className="title-sections">EVENTOS REALIZADOS</h2>
            <p ><i>Una mirada hacia atrás en los eventos que nos han unido en amor, servicio y apoyo mutuo</i></p>
          </div>

          <div className="container-event">
            {eventsRealized.length > 0 ?
              <SliderResponsivePastEvents eventsRealized={eventsRealized} />
              :
              <h2>No existen eventos realizados</h2>
            }
          </div>
        </article>

        <div className="container__questions" >
          <div className="questions-title" id="eventsas">
            <h2 className="title-sections">PREGUNTAS FRECUENTES</h2>

          </div>
          <ThemeProvider theme={theme}>
            <div className="container__acordions-questions">
              <Accordion theme={theme}
                sx={{
                  border: '1px solid #60ad26',
                  borderBottom: '0px solid #fff',
                  marginBottom: '10px',

                }}>

                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"

                  sx={{
                    background: '#1f201f',
                    color: '#fff',


                  }}

                >
                  <Typography >¿Qué es CreaVida?</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    background: '#1f201f',
                    color: '#fff',

                  }}>
                  <Typography>
                  CreaVida es una fundación sin fines de lucro comprometida con la transformación positiva de comunidades a través de eventos y programas que fomentan la compasión, la generosidad y el servicio.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{
                border: '1px solid #60ad26',
                marginBottom: '10px',
              }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{
                    background: '#1f201f',
                    color: '#fff',
                  }}
                >
                  <Typography>¿Cómo puedo participar en los eventos de CreaVida?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                  background: '#1f201f',
                  color: '#fff',
                }}>
                  <Typography>
                  Puedes participar de varias maneras: registrándote como voluntario, donando, o asistiendo a nuestros eventos. Visita nuetra sección de eventos para obtener más detalles y opciones de participación.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{
                border: '1px solid #60ad26',
                marginBottom: '10px',
              }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{
                    background: '#1f201f',
                    color: '#fff',
                  }}
                >
                  <Typography>¿Cómo dono a CreaVida?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                  background: '#1f201f',
                  color: '#fff',
                }}>
                  <Typography>
                  Donar es fácil. Puedes hacerlo en línea a través de nuestra página de donaciones. También aceptamos donaciones en especie dirigiendote a nuestra iglesia. ¡Cada contribución cuenta!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{
                border: '1px solid #60ad26',
                marginBottom: '10px',
              }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{
                    background: '#1f201f',
                    color: '#fff',
                  }}
                >
                  <Typography>¿Cómo puedo ser voluntario en CreaVida?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                  background: '#1f201f',
                  color: '#fff',
                }}>
                  <Typography>
                  Nos encantaría que te unas como voluntario. Visita nuestra sección de voluntariado para obtener información sobre oportunidades actuales y cómo registrarte.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{
                border: '1px solid #60ad26',
                marginBottom: '10px',
              }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{
                    background: '#1f201f',
                    color: '#fff',
                  }}
                >
                  <Typography>¿Cuál es el impacto de mi donación?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                  background: '#1f201f',
                  color: '#fff',
                }}>
                  <Typography>
                  Tu donación tiene un impacto significativo en la obra de CreaVida, reflejando el llamado cristiano a amar y servir a los demás. Al contribuir, te unes a nosotros en la misión de manifestar el amor de Cristo en la práctica, llevando esperanza, consuelo y oportunidades a aquellos que más lo necesitan. 
                  </Typography>
                </AccordionDetails>
              </Accordion>



              <Accordion sx={{
                border: '1px solid #60ad26',
                marginBottom: '10px',
              }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{
                    background: '#1f201f',
                    color: '#fff',
                  }}
                >
                  <Typography>¿Cómo puedo participar en los eventos de CreaVida?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                  background: '#1f201f',
                  color: '#fff',
                }}>
                  <Typography>
                  Puedes participar de varias maneras: registrándote como voluntario, donando, o asistiendo a nuestros eventos. Visita nuetra sección de eventos para obtener más detalles y opciones de participación.
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
