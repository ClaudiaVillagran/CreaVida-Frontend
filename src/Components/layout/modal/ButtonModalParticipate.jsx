import Dialog from '@mui/material/Dialog';

import { useState } from "react";

import { useForm } from "../../../Hooks/useForm";
import { SelectComponent } from '../../formsComponents/SelectComponent';
import { InputComponent } from '../../formsComponents/InputComponent';
import { InputNumberComponent } from '../../formsComponents/InputNumberComponent';
import { InputForTextComponent } from '../../formsComponents/InputForTextComponent';
import { Global } from '../../../Helpers/Global';

export const ButtonModalParticipate = ({ selectedEventId, setModalOpenParticipe, modalOpenParticipe }) => {



  const { form, changed, setForm } = useForm({});
  const [saved, setSaved] = useState("notSaved");
  const [loading, setLoading] = useState(false);


  const handleClose = () => {
    setModalOpenParticipe(false);
  };

  const saveMember = async (e) => {
    try {
      setLoading(true)
      e.preventDefault();
      let newMember = form;
      console.log(newMember);
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
        <Dialog
          open={modalOpenParticipe}
          onClose={handleClose}
        >
          <div className="modal">
            <div className="participation-box">
              <h6>Gracias por querer ser parte</h6>
              <div  className='container__form-participate'>
                <InputComponent
                  nameLabel='Nombre'
                  nameInput='name'
                  form={form}
                  changed={changed}
                  setForm={setForm} />
                <InputComponent
                  nameLabel='Apellido'
                  nameInput='lastname'
                  form={form}
                  changed={changed}
                  setForm={setForm} />
                <br />
                <SelectComponent
                  nameInput='age'
                  form={form}
                  changed={changed}
                  setForm={setForm}
                />
                <InputComponent
                  nameLabel='Email'
                  nameInput='email'
                  form={form}
                  changed={changed}
                  setForm={setForm} />
                <InputNumberComponent
                  nameLabel='Teléfono'
                  nameType='number'
                  nameInput='number'
                  form={form}
                  changed={changed}
                  setForm={setForm}
                />
                <InputForTextComponent
                  nameInput='message'
                  form={form}
                  changed={changed}
                  setForm={setForm}
                />

                <div className="buttons-form">
                  <button type="submit" className="button-submit" onClick={saveMember}>Enviar</button>
                  <button className="button-close" onClick={handleClose}>Cerrar</button>
                </div>

              </div>
            </div>
          </div>

        </Dialog>
        :
        <div className="modal">
          <div className="participation-box">

            <span className="modal__close" onClick={handleClose}>&times;</span>
            <h6>Gracias por inscribirte! 🥳</h6>
          </div>

        </div>
      }
    </>
  )
}
