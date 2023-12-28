import { InputForm } from '../../componentsForm/InputForm';
import { SelectForm } from '../../componentsForm/SelectForm';
import { InputNumberForm } from '../../componentsForm/InputNumberForm';
import { InputTextForm } from '../../componentsForm/InputTextForm';
import { ButtonRegister } from '../../buttons/ButtonRegister';
import { Dialog } from '@mui/material';
import { useState } from "react";
import { useForm } from "../../../Hooks/useForm";
import { Global } from '../../../Helpers/Global';

export const ModalParticipate = ({ setModalOpenParticipe, modalOpenParticipe }) => {
  const { form, changed, setForm } = useForm({});
  const [saved, setSaved] = useState("notSaved");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setModalOpenParticipe(false);
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
          open={modalOpenParticipe}
          onClose={handleClose}
        >
          <div className='form-participate'>
            <h2>Cuentanos sobre ti</h2>
            <InputForm namePlaceHolder='Ingrese su nombre' 
                  nameInput='name'
                  form={form}
                  changed={changed}
                  setForm={setForm}  />
            <InputForm namePlaceHolder='Ingrese su apellido'
                  nameInput='lastname'
                  form={form}
                  changed={changed}
                  setForm={setForm} />
            <SelectForm nameInput='age'
                  form={form}
                  changed={changed}
                  setForm={setForm}/>
            <InputNumberForm nameInput='number'
                  form={form}
                  changed={changed}
                  setForm={setForm}/>
            <InputForm namePlaceHolder='Ingrese su email' 
                  nameInput='email'
                  form={form}
                  changed={changed}
                  setForm={setForm} />
            <InputTextForm nameInput='message'
                  form={form}
                  changed={changed}
                  setForm={setForm}/>
            <div className='button-inscription'>
              <ButtonRegister onClick={saveSocio}/>
            </div>
            
          </div>
        </Dialog>
        :
        <div className="modal">
          <div className="participation-box">

            <span className="modal__close" onClick={handleClose}>&times;</span>
            <h6>Gracias por inscribirte! 🥳</h6>
            <p>Te contactaremos pronto</p>
          </div>

        </div>
      }
    </>
  )
}


