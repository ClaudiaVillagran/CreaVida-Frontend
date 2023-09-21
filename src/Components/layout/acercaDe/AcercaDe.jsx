import { useEffect, useState } from 'react';
import video from '../../../assets/img/presen.mp4'
import imagen1 from '../../../assets/img/carlos.png'
import imagen2 from '../../../assets/img/Evento1.png'
import imagen3 from '../../../assets/img/Evento1.png'
import imagen4 from '../../../assets/img/Evento2.png'

export const AcercaDe = () => {
  const [loaded, setLoaded] = useState(false);
  const [elementoAbierto, setElementoAbierto] = useState(null);
  const [eventosVisibles, setEventosVisibles] = useState(2); // Número de eventos visibles a la vez
  const [eventoActual, setEventoActual] = useState(0);


  const toggleElemento = (id) => {
    if (elementoAbierto === id) {
      // Si el mismo elemento ya está abierto, ciérralo
      setElementoAbierto(null);
    } else {
      // Si otro elemento estaba abierto, ciérralo primero y luego abre el nuevo
      setElementoAbierto(id);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simula una carga de página (puedes reemplazar esto con tu lógica real)
    setTimeout(() => {
      setLoaded(true);
    }, 200); // Retraso de 1 segundo para simular la carga
  }, []);

  const eventos = [
    {
      titulo: 'Coronel',
      descripcion: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
      imagen: imagen1
    },
    {
      titulo: 'Lota',
      descripcion: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
      imagen: imagen2
    },
    {
      titulo: 'Concepcion',
      descripcion: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
      imagen: imagen3
    },
    {
      titulo: 'Arauco',
      descripcion: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
      imagen: imagen4
    },
    // Agrega más eventos aquí según sea necesario
  ];

  const cambiarEvento = () => {
    setEventoActual((prevEventoActual) => {
      // Avanzar al siguiente par de eventos, reiniciando al principio si llegamos al final
      const siguienteEvento = (prevEventoActual + 2) % eventos.length;
      setEventosVisibles(2); // Mostrar dos eventos
      return siguienteEvento;
    });
  };

  useEffect(() => {
    const newIntervalId = setInterval(cambiarEvento, 5000);
    // Limpieza: detener el intervalo cuando el componente se desmonta
    return () => clearInterval(newIntervalId);
  }, [eventos.length]);

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
          
          <p><span>CreaVida</span> <i>se fundo en AÑO para DESCRIPCION, realizamos nuestro primer evento de ayuda a EVENTO, desde ese entonces nos ha movido el amor
            por los demas llegando al punto de haber realizado mas de CANTIDAD de eventos de ayuda</i></p>
        </div>
        <div className="acerca__nuestraMotivacion">
          <div className='nuestraMotivacion__container'>
            <div className='nuestraMotivacion-tittle'>
              <h1>Nuestra motivación</h1>
              <h2><i>Aspiramos a transformar vidas generando un impacto positivo a través de acciones y donaciones de nuestros colaboradores</i></h2>
            </div>
            <div className='nuestraMotivacion-enum'>
              <div className='acerca-semitransparente enum-transparente'></div>
              <div className={`enum1 enum  ${elementoAbierto == 'elemento1' ? 'dontshow' : ''} `}>
                <h3>SOLIDARIDAD</h3>
                <button onClick={() => toggleElemento('elemento1')}>+</button>
              </div>
              {elementoAbierto === 'elemento1' && (
                <div className="elemento-oculto">
                  <div>
                    <h3 id='elemento-oculto-title'>SOLIDARIDAD</h3>
                    <p id='elemento-oculto-description'>uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quavoluptatuam quaerat voluptat quaerat voluptatem</p>
                  </div>
                </div>
              )}
              <div className={`enum2 enum  ${elementoAbierto == 'elemento2' ? 'dontshow' : ''} `}>
                <h3>COMPASION</h3>
                <button onClick={() => toggleElemento('elemento2')}>+</button>
              </div>
              {elementoAbierto === 'elemento2' && (
                <div className="elemento-oculto">

                  <div>
                    <h3 id='elemento-oculto-title'>COMPASION</h3>
                    <p id='elemento-oculto-description'>uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quavoluptatuam quaerat voluptat quaerat voluptatem</p>
                  </div>
                </div>
              )}
              <div className={`enum3 enum  ${elementoAbierto == 'elemento3' ? 'dontshow' : ''} `}>
                <h3>GENEROSIDAD</h3>
                <button onClick={() => toggleElemento('elemento3')}>+</button>
              </div>
              {elementoAbierto === 'elemento3' && (
                <div className="elemento-oculto">
                  <div>
                    <h3 id='elemento-oculto-title'>GENEROSIDAD</h3>
                    <p id='elemento-oculto-description'>uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quavoluptatuam quaerat voluptat quaerat voluptatem</p>
                  </div>
                </div>
              )}
              <div className={`enum4 enum  ${elementoAbierto == 'elemento4' ? 'dontshow' : ''} `}>
                <h3>APOYO</h3>
                <button onClick={() => toggleElemento('elemento4')}>+</button>
              </div>
              {elementoAbierto === 'elemento4' && (
                <div className="elemento-oculto">
                  <div>
                    <h3 id='elemento-oculto-title'>APOYO</h3>
                    <p id='elemento-oculto-description'>uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quavoluptatuam quaerat voluptat quaerat voluptatem</p>
                  </div>
                </div>
              )}

              <div className={`enum5 enum  ${elementoAbierto == 'elemento5' ? 'dontshow' : ''} `}>
                <h3>COMUNIDAD</h3>
                <button onClick={() => toggleElemento('elemento5')}>+</button>
              </div>
              {elementoAbierto === 'elemento5' && (
                <div className="elemento-oculto">
                  <div>
                    <h3 id='elemento-oculto-title'>COMUNIDAD</h3>
                    <p id='elemento-oculto-description'>uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat uignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quauignam aliquamuignam aliquignuignam aliquam quaerat voluptatuignam aliquam quaerat voluptatam aliquam quaerat voluptatuignam aliquam quaerat voluptatuam quaerat voluptat quavoluptatuam quaerat voluptat quaerat voluptatem</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="acerca__colaboradores">
          <div className="colaborador-1 colaborador">
            <div className='container__img-colaborador'>
              <div className="colaborador1-img colaborador-img"></div>
            </div>

            <div className="colaborador-description">
              <h1>Barbara Veloso</h1>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
            </div>
          </div>
          <div className="colaborador-2 colaborador-reverse">
            <div className='container__img-colaborador'>
              <div className="colaborador2-img colaborador-img-reverse"></div>
            </div>

            <div className="colaborador-description">
              <h1>Nombre Apellido</h1>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
            </div>
          </div>

          <div className="colaborador-3 colaborador">
            <div className='container__img-colaborador'>
              <div className="colaborador3-img colaborador-img"></div>
            </div>
            <div className="colaborador-description">
              <h1>Nombre Apellido</h1>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
            </div>
          </div>
        </div>
        <div className='acerca__eventosRealizados__container'>
          <div className="acerca__eventosRealizados-description">
            <div>
              <h1>Eventos realizados</h1>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
              <button>/ Visita nuestra oficina</button>
            </div>
          </div>

          <div className="acerca__eventosRealizados">
            <div className='border'></div>
            {eventos.slice(eventoActual, eventoActual + eventosVisibles).map((evento, index) => (
              <div key={index} className={`evento-card`}>
                <div className={`acerca__eventosRealizados-${index + 1} event_realized`}>
                  <img src={evento.imagen} alt="" className='img' />
                  <div className='data'>
                    <h2>{evento.titulo}</h2>
                    <h3>Fecha</h3>
                  </div>
                  <p className='acercade_description'>{evento.descripcion}</p>
                </div>
                <div className='border'></div>
              </div>
            ))}
          </div>

          <div className='space'></div>
        </div>
        <div className="acerca__ayudanos">
          <h1>Se parte de nuestra comunidad</h1>
          <button> <span>/ Ir a donar</span></button>
        </div>
      </div>
      <div className='space'></div>
      <div className='space'></div>
    </div >
  )
}