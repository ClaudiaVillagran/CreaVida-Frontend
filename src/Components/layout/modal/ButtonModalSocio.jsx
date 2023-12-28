import Dialog from '@mui/material/Dialog';
import { SelectComponent } from '../../formsComponents/SelectComponent';
import { InputComponent } from '../../formsComponents/InputComponent';
import { InputNumberComponent } from '../../formsComponents/InputNumberComponent';
import { InputForTextComponent } from '../../formsComponents/InputForTextComponent';
import { Global } from '../../../Helpers/Global';
import { useState } from "react";
import { useForm } from "../../../Hooks/useForm";

export const ButtonModalSocio = ({setModalOpenSocio, modalOpenSocio}) => {


    const { form, changed, setForm } = useForm({});
    const [saved, setSaved] = useState("notSaved");
    const [loading, setLoading] = useState(false);
  
  
    console.log(form)
  
    const handleClose = () => {
      setModalOpenSocio(false);
    };
  
    const saveSocio = async (e) => {
      try {
        setLoading(true)
        e.preventDefault();
        let newSocio = form;
        console.log(newSocio);

        const request = await fetch(Global.url + 'socio/register', {
          method: 'POST',
          body: JSON.stringify(newSocio),
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
          open={modalOpenSocio}
          onClose={handleClose}
        >
          <div className="modal">
            <div className="participation-box">
              <h6>Gracias por querer ser parte</h6>
              <div className='container__form-participate'>
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
                  <button type="submit" className="button-submit" onClick={saveSocio}>Enviar</button>
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
