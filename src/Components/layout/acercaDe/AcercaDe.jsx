import { useEffect, useState } from 'react';
import video from '../../../assets/img/presen.mp4'
import imagen1 from '../../../assets/img/babaraInicio.png'
import imagen2 from '../../../assets/img/rutAlvarez.png'
import imagen3 from '../../../assets/img/Evento1.png'
import imagen4 from '../../../assets/img/Evento2.png'
import { NavLink } from 'react-router-dom';
import { Global } from '../../../Helpers/Global';

export const AcercaDe = () => {
  const [loaded, setLoaded] = useState(false);
  const [elementoAbierto, setElementoAbierto] = useState(null);
  const [eventosVisibles, setEventosVisibles] = useState(2); // Número de eventos visibles a la vez
  const [eventoActual, setEventoActual] = useState(0);
  const [eventsRealized, setEventsRealized] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);

  const toggleElemento = (id) => {
    if (elementoAbierto === id) {
      // Si el mismo elemento ya está abierto, ciérralo
      setElementoAbierto(null);
    } else {
      // Si otro elemento estaba abierto, ciérralo primero y luego abre el nuevo
      setElementoAbierto(id);
    }
  };
  const formatFecha = (fecha) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const fechaFormateada = new Date(fecha).toLocaleDateString(undefined, options);
    return fechaFormateada;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    GetEvents();
    // Simula una carga de página (puedes reemplazar esto con tu lógica real)
    setTimeout(() => {
      setLoaded(true);
    }, 200); // Retraso de 1 segundo para simular la carga
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
      console.log(realizedEvents)
    }
  }



  const cambiarEvento = () => {
    setEventoActual((prevEventoActual) => {
      // Avanzar al siguiente par de eventos, reiniciando al principio si llegamos al final
      const siguienteEvento = (prevEventoActual + 2) % eventsRealized.length;
      setEventosVisibles(2); // Mostrar dos eventos
      return siguienteEvento;
    });
  };

  useEffect(() => {
    const newIntervalId = setInterval(cambiarEvento, 2000);
    // Limpieza: detener el intervalo cuando el componente se desmonta
    return () => clearInterval(newIntervalId);
  }, [eventsRealized.length]);

  return (
    <div className="container__acerca"  >

      <video autoPlay muted loop id="background-video" >
        <source src={video} type="video/mp4" />
      </video>
      <div className='acerca-semitransparente'></div>
      <div className='acerca__content'>
        <div className={`acerca__presentation ${loaded ? 'loaded' : ''}`}>
          <button className="boton-animado">¿QUIÉNES SOMOS?</button>
          <h1>Somos Esperanza</h1>
        </div>
        <div className="acerca__descripcion">
          <p className='acerca__descripcion-p'><span>CreaVida</span><i> se fundo en AÑO para DESCRIPCION, realizamos nuestro primer evento de ayuda a EVENTO, desde ese entonces nos ha movido el amor
            por los demas llegando al punto de haber realizado mas de CANTIDAD de eventos de ayuda</i>
          </p>
        </div>
        <div className="acerca__nuestraMotivacion">
          <div className='nuestraMotivacion__container' id='nuestraMotivacion'>
            <div className='nuestraMotivacion-tittle'>
              <h1 className='title-sections'>NUESTRA MOTIVACIÓN</h1>
              <h2><i>Aspiramos a transformar vidas generando un impacto positivo a través de acciones y donaciones de nuestros colaboradores</i></h2>
            </div>
            <div className='nuestraMotivacion-enum'>
              <div className='acerca-semitransparente enum-transparente'></div>
              <div className={`enum1 enum  ${elementoAbierto == 'elemento1' ? 'dontshow' : ''} `}>
                <h3 className='enum-title'>SOLIDARIDAD</h3>
                <button onClick={() => toggleElemento('elemento1')}>+</button>
              </div>
              {elementoAbierto === 'elemento1' && (
                <div className="elemento-oculto">
                  <div>
                    <h3 id='elemento-oculto-title'>SOLIDARIDAD</h3>
                    <p id='elemento-oculto-description'>La Escritura nos enseña a compartir las cargas de los demás (Gálatas 6:2) y a cuidar de los necesitados. El concepto de solidaridad se refleja en pasajes que nos instan a amar y servir a nuestros prójimos, mostrando empatía y actuando en apoyo de aquellos que enfrentan desafíos (Mateo 25:35-36). La solidaridad, en esencia, es un acto tangible de amor y servicio hacia los demás, basado en los principios fundamentales de la fe cristiana.</p>
                  </div>
                </div>
              )}
              <div className={`enum2 enum  ${elementoAbierto == 'elemento2' ? 'dontshow' : ''} `}>
                <h3 className='enum-title'>COMPASIÓN</h3>
                <button onClick={() => toggleElemento('elemento2')}>+</button>
              </div>
              {elementoAbierto === 'elemento2' && (
                <div className="elemento-oculto">

                  <div>
                    <h3 id='elemento-oculto-title'>COMPASIÓN</h3>
                    <p id='elemento-oculto-description'> La compasión, arraigada en la ternura del corazón, es un tema recurrente en las Escrituras. Jesús se conmovió por las multitudes y sanó a los enfermos, mostrando compasión por sus necesidades. La parábola del buen samaritano destaca la importancia de mostrar compasión hacia los demás, incluso aquellos que son considerados como extraños (Lucas 10:25-37).</p>
                  </div>
                </div>
              )}
              <div className={`enum3 enum  ${elementoAbierto == 'elemento3' ? 'dontshow' : ''} `}>
                <h3 className='enum-title'>GENEROSIDAD</h3>
                <button onClick={() => toggleElemento('elemento3')}>+</button>
              </div>
              {elementoAbierto === 'elemento3' && (
                <div className="elemento-oculto">
                  <div>
                    <h3 id='elemento-oculto-title'>GENEROSIDAD</h3>
                    <p id='elemento-oculto-description'> La generosidad, según la Biblia, se manifiesta en actos de dar libremente a los demás sin esperar nada a cambio. Jesús elogió la viuda que, a pesar de tener poco, dio todo lo que tenía (Marcos 12:41-44). La generosidad es un acto de amor y confianza en la provisión divina.</p>
                  </div>
                </div>
              )}
              <div className={`enum4 enum  ${elementoAbierto == 'elemento4' ? 'dontshow' : ''} `}>
                <h3 className='enum-title'>APOYO MUTUO</h3>
                <button onClick={() => toggleElemento('elemento4')}>+</button>
              </div>
              {elementoAbierto === 'elemento4' && (
                <div className="elemento-oculto">
                  <div>
                    <h3 id='elemento-oculto-title'>APOYO MUTUO</h3>
                    <p id='elemento-oculto-description'>La idea de llevar las cargas unos de otros está presente en la enseñanza bíblica. La comunidad cristiana es instada a apoyarse mutuamente, ya sea en tiempos de alegría o de aflicción. La relación de Jonathan y David en el Antiguo Testamento es un ejemplo de apoyo mutuo y amistad (1 Samuel 18:1-4).</p>
                  </div>
                </div>
              )}

              <div className={`enum5 enum  ${elementoAbierto == 'elemento5' ? 'dontshow' : ''} `}>
                <h3 className='enum-title'>COMUNIDAD</h3>
                <button onClick={() => toggleElemento('elemento5')}>+</button>
              </div>
              {elementoAbierto === 'elemento5' && (
                <div className="elemento-oculto">
                  <div>
                    <h3 id='elemento-oculto-title'>COMUNIDAD</h3>
                    <p id='elemento-oculto-description'>La comunidad, basada en principios bíblicos, implica compartir la vida y los recursos. La Iglesia primitiva, como se describe en el libro de los Hechos, compartía todo en común, mostrando una profunda conexión y preocupación mutua (Hechos 2:44-47). La comunidad es un lugar donde se practican el amor, la edificación mutua y la adoración conjunta.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="acerca__ayudanos">
          <h1>Se parte de nuestra comunidad</h1>
          <button><span>
            <NavLink to="/participa" style={{ textDecoration: 'none', color: 'inherit' }}>
              / Ir a donar
            </NavLink>
          </span></button>
        </div>
        <div className="container__nuestro-equipo equipo_aboutUs">
          <h2 className='title-sections'>NUESTROS LÍDERES</h2>
          <div className="container__lideres">
            <div className="container__lider">
              <div className="container__img-lider">
                <img src={imagen1} alt="Bárbara" />
              </div>
              <h3>Bárbara Veloso</h3>
              <p>Directora ejecutiva</p>
            </div>
            <div className="container__lider">
              <div className="container__img-lider">
                <img src={imagen2} alt="Rut" />
              </div>
              <h3>Ruth Alvarez</h3>
              <p>Trabajadora social</p>
            </div>
          </div>
        </div>

        <div className='acerca__eventosRealizados__container'>
          <div className="acerca__eventosRealizados-description">
            <div>
              <h1 className='title-sections'>EVENTOS REALIZADOS</h1>
              <p><i>Una mirada hacia atrás en los eventos que nos han unido en amor, servicio y apoyo mutuo</i></p>
              <NavLink to='https://goo.gl/maps/eqUh71kusXcKYG5b9' target="_blank">

                <button>/ Visita nuestra oficina</button>
              </NavLink>
            </div>
          </div>

          <div className="acerca__eventosRealizados">
            {eventsRealized.slice(eventoActual, eventoActual + eventosVisibles).map((evento, index) => (
              <div key={index} className={`evento-card`}>
                <div className={`acerca__eventosRealizados-${index + 1} event_realized`}>
                  <img src={evento.picture} alt="" className='img custom-image' />
                  <div className='data'>
                    <h2>{evento.title}</h2>
                    <h3>{formatFecha(evento.date)}</h3>

                  </div>
                  <p className='acercade_description'>{evento.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='space'></div>
        </div>

      </div>
    </div >
  )
}
