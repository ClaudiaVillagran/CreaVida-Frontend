
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Global } from '../../../Helpers/Global';

export const EditEvent = () => {

    const params = useParams();
    const eventId = params.id;

    const [event, setEvent] = useState({});
    useEffect(() => {
        getEvent(eventId);
        window.scrollTo(0, 0);
    }, [])

    const getEvent = async (eventId) => {
        const request = await fetch(Global.url + 'event/getEvent/' + eventId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await request.json();
        if (data.status == 'success') {
            console.log(data);
            setEvent(data.event)
        }
    }
    return (
        <section className="container_allEvents">
            <button className="btn_edit ed">
                <NavLink to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</NavLink>
            </button>

            {event &&
                <div>
                    <h1>{event.title}</h1>
                </div>
            }
        </section>
    )
}
