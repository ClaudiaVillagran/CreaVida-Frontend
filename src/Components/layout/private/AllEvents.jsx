import { useEffect, useState } from "react";
import { Global } from "../../../Helpers/Global";
import { NavLink } from "react-router-dom";
import Modal from '@mui/material/Modal';

export const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({})
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("Buscar por título");

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const response = await fetch(Global.url + 'event/getEvents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data.status === 'success') {
        const sortedEvents = data.events.sort((a, b) => new Date(b.date) - new Date(a.date));
        setEvents(sortedEvents);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  const handleInputFocus = () => {
    setPlaceholder('');
  }
  const handleInputBlur = () => {
    if (searchQuery === "") {
      setPlaceholder("Buscar por título");
    }
  };
  const handleSearchInputChange = (event) => {
    const normalizedSearchQuery = event.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    setSearchQuery(normalizedSearchQuery);
  };

  const filteredEvents = events.filter(event =>
    event.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchQuery)
  );

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    return { day, month, year };
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const openModalEdit = (event) => {
    setOpen(true);
    getEventById(event._id);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const getEventById = async (id) => {
    const request = await fetch(Global.url + 'event/getEvent/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await request.json();
    console.log(data);
    if (data.status == 'success') {
      setSelectedEvent(data.event);
      setMembers(data.event.members);
    }
  }
  const deleteEvent = async (id) => {
    console.log(id);
    const request = await fetch(Global.url + 'event/deleteEvent/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await request.json();
    console.log(data);
    if (data.status == 'success') {
      console.log('borrada de forma correcta');
      const updatedEvents = events.filter(event => event._id !== id);
      setEvents(updatedEvents);
    }
  }
  return (
    <>
      <section className="container_allEvents">
        <button className="btn_edit ed">
          <NavLink to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</NavLink>
        </button>
        <h1>Nuestros eventos</h1>
        <div className="containerInput">
          <input
            type="text"
            className="input_search_query"
            placeholder={placeholder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        {filteredEvents.map((event) => {
          const { day, month, year } = getFormattedDate(event.date);
          const capitalizedMonth = capitalizeFirstLetter(month);
          return (
            <div className="container__dataEvents" key={event._id}>
              <div className="container_img-events">
                <img src={event.picture} alt="picture event" className="img_pictureEvent" />
              </div>
              <div className="container_forResponsive">

                <div className="container_date">
                  <p className="day_events">{day}</p>
                  <div className="month_year">
                    <p className="year_events">{year}</p>
                    <p className="month_events">{capitalizedMonth}</p>
                  </div>
                </div>
                <div className="container_tc">
                  <h3>{event.title} / </h3> <h4>{event.location}</h4>
                </div>
              </div>
              <div className="container_buttonEvent">
                <button className="btn_del" onClick={() => deleteEvent(event._id)}>Eliminar</button>

                <button className="btn_edit" onClick={() => openModalEdit(event)}>
                  Info
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="container_modal" >
          <h1>{selectedEvent.title}</h1>
          <h2>Miembros del evento:</h2>
          <div className="cards_members">
            {members.length > 0 ?
              members.map(member => {
                let age = '';
                if (member.age == 80) {
                  age = 'Baby Boomers';
                } else if (member.age == 60) {
                  age = 'Generación X'
                } else if (member.age == 40) {
                  age = 'Milenials Y'
                } else if (member.age == 20) {
                  age = 'Centenials Z'
                } else if (member.age == 10) {
                  age = 'Generación alfa T'
                }
                return (
                  <div className="card_member" key={member._id}>
                    <h3>{`${member.name} ${member.lastname}`}</h3>
                    <h4>{member.email}</h4>
                    <h3 className="age">{age}</h3>
                    <p>{member.number}</p>
                    <p>{member.message}</p>
                  </div>
                )
              })
              : <h1 style={{ marginTop: '20px' }}>No existen miembros registrados aún</h1>}

          </div>
        </div>

      </Modal>
    </>
  );
};
