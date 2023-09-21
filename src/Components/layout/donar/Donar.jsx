import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Global } from '../../../Helpers/Global';
import { useForm } from "../../../Hooks/useForm"

export const Donar = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({})
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_saved");

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvent()
  }, [])

  const getEvent = async () => {

    const request = await fetch(Global.url + 'event/getEvent/' + id, {
      method: 'GET',
    })

    const data = await request.json();
    console.log(data);
    if (data.status == 'success') {
      setEvent(data.event);
      console.log(event);
    }
  };

  const registerDonation = async (e) => {
    e.preventDefault();
    let newDonation = form;
    console.log(newDonation);
    const request = await fetch(Global.url + 'donation/register', {
      method: 'POST',
      body: JSON.stringify(newDonation),
      headers: {
        "Content-Type": "application/json"
      }

    });
    const data = await request.json();
    if (data.status === 'success') {
      setSaved("saved");
    } else {
      setSaved("error");
    }

  }
  return (
    <>


      <div className="content_donar">
        <h2 className="donacion_tittle">Registra tu donación</h2>
        <h3 className="donacion-subtittle">Tu aporte puede ayudar a muchas personas</h3>

        <div className="content__posts">
          {/* {saved === 'saved' ?
            <strong className="alert alert-success"> Datos guardados! 🥳</strong>
            : ""}
          {saved === 'error' ?
            <strong className="alert alert-danger"> Hubo un error al guardar los datos! ☹️ </strong>
            : ""} */}

          <form className="register-form card-donation" onSubmit={registerDonation}>
            <h1 className='title_event_donation'>Gracias por querer ser parte de </h1>
            <h1 className='sub_title_event_donation'>{event.title}</h1>
            <br />
            <div className='flex-form-2'>
              <div className="form-group input-name">
                <input type="text" name="name" onChange={changed} className='input-donation' />
                <label className='label-form' >Nombre</label>
              </div>
              <div className="form-group input-surname">
                <input type="text" name="surname" onChange={changed} className='input-donation' />
                <label className='label-form' >Apellido</label>

              </div>
            </div>
            <div className='flex-form-2'>
              <div className="form-group input-age">
                <input type="number" name="age" onChange={changed} className='input-donation' />
                <label className='label-form' >Edad</label>
              </div>
              <div className="form-group input-amount">
                <input type="number" name="amount" onChange={changed} className='input-donation' />
                <label className='label-form' >Monto</label>
              </div>

            </div>

            <div className="form-group input-message">
              <textarea type="text" rows='5' cols="35" name="message" onChange={changed} className='input-donation' />
              <label className='label-form' >Dejanos tu mensaje</label>
            </div>
            <input type="submit" value='Donar' className="btn" />
          </form>
        </div>
      </div>
      {/* <div className={"card_evento_" + event.title + " " + "card"} >
        <img src={evento1} alt="" />
        <div>
          <h2>AQUI PUEDE IR LA DESCRIPCION</h2>
          <h3>{event.description}</h3>
          <ul className='data_evento'>
            <li>{event.date}</li>
            <label>Hora</label>
          </ul>
          <NavLink to={'/'} className="buttons_evento " >
            <button className='secondary'>Volver</button>
          </NavLink>
        </div>
      </div> */}
    </>
  )
}
