import { useEffect, useState } from "react";
import { Global } from "../../../Helpers/Global";
import { NavLink } from "react-router-dom";

import { useForm } from "../../../Hooks/useForm";


export const ModalParticipate = ({ selectedEventId, setModalOpenParticipe }) => {

  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("notSaved");
  const [loading, setLoading] = useState(false);


  const closeModal = () => {
    setModalOpenParticipe(false);
  };

  const saveMember = async (e) => {
    try {
      setLoading(true)
      e.preventDefault();
      let newMember = form;

      newMember.event = selectedEventId;

      const request = await fetch(Global.url + 'member/register', {
        method: 'POST',
        body: JSON.stringify(newMember),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await request.json();

      if (data.status == 'success') {
        setTimeout(() => {
          setLoading(false)
        }, 20000);
        setSaved("saved")
      }

    } catch (error) {
      console.log(error)
      setLoading(false)
    }

  }
  return (
    <>

      {saved != "saved" ?
        <div className="modal">
          <div className="participation-box">

            <span className="modal__close" onClick={closeModal}>&times;</span>

            <h6>Gracias por querer ser parte</h6>
            <form className="form__participate" onSubmit={saveMember}>

              <input type="hidden" name="event" value={selectedEventId} />
              <div className="input-box" >
                <input type="text" id="name" name="name" required onChange={changed} />
                <label htmlFor="name" >Nombre:</label>
              </div>
              <div className="input-box" >
                <input type="text" id="lastname" name="lastname" required onChange={changed} />
                <label htmlFor="lastname" >Apellido:</label>
              </div>

              <div className="input-box" >

                <input type="text" id="age" name="age" onChange={changed} />
                <label htmlFor="age" >Edad:</label>
              </div>

              <div className="input-box" >
                <input type="email" id="email" name="email" required onChange={changed} />
                <label htmlFor="email" >Email:</label>
              </div>
              <div className="input-box" >
                <input type="text" id="number" name="number" required onChange={changed} />
                <label htmlFor="number" >Contacto:</label>
              </div>
              <div className="input-box" >
                <textarea id="message" name="message" rows="2" onChange={changed} ></textarea>
                <label htmlFor="message" >Mensaje:</label>
              </div>
              <div className="buttons-form">
                <button type="submit" className="button-submit"  >Enviar</button>
                <button className="button-close" onClick={closeModal}>Cerrar</button>
              </div>

            </form>
            {loading === true ? <div className="spinner"></div> : ""}
          </div>
        </div>
        :
        <div className="modal">
          <div className="participation-box">

            <span className="modal__close" onClick={closeModal}>&times;</span>
            <h6>Gracias por inscribirte! 🥳</h6>
          </div>

        </div>
      }

    </>
  )
}
