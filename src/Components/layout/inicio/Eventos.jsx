import { NavLink } from 'react-router-dom'
import evento1 from '../../../assets/img/Evento1.png'
import evento2 from '../../../assets/img/Evento2.png'
import { useEffect, useState } from 'react';
import { Global } from '../../../Helpers/Global';

export const Eventos = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        getPublications();
    }, []);
    const getPublications = async () => {
        const request = await fetch(Global.url + 'event/getEvents', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await request.json();
        console.log(data);
        if (data.status == 'success') {
            let newEvents = data.events;

            if (events.length >= 1) {
                newEvents = [...events, ...newEvents]

            }
            setEvents(newEvents)
        }
        console.log(events);
    }

    return (
        <>
            <div className="content_eventos">
                <div className="content_eventos-tittle">
                    <h1 className="eventos-tittle">Eventos cercanos</h1>
                    <h3 className="eventos-subtittle">Mantente al tanto</h3>
                </div>
                <div className="card_eventos_cercanos">
                    {events.map(event => {
                        return (
                            <div className="card ele-1" key={event._id}>
                                <img src={evento1} alt="" />
                                <div>
                                    <h2>{event.title}</h2>
                                    <h3>{event.description}</h3>
                                    <ul className='data_evento'>
                                        <li>{event.date}</li>
                                        <label>Hora</label>
                                    </ul>
                                    <NavLink to='/donar' className="buttons_evento">
                                        <button className='primary'>Donar</button>
                                        <button>Participar</button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}
