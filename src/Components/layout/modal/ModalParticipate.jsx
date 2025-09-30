import { InputForm } from '../../componentsForm/InputForm';
import { SelectForm } from '../../componentsForm/SelectForm';
import { InputNumberForm } from '../../componentsForm/InputNumberForm';
import { InputTextForm } from '../../componentsForm/InputTextForm';
import { ButtonRegister } from '../../buttons/ButtonRegister';
import { Dialog } from '@mui/material';
import { useState } from "react";
import { useForm } from "../../../Hooks/useForm";
import { Global } from '../../../Helpers/Global';
import { toBackendPhone } from '../../../Utils/phone'; // 👈 helper

export const ModalParticipate = ({ setModalOpenParticipe, modalOpenParticipe }) => {
  const { form, changed, setForm } = useForm({});
  const [saved, setSaved] = useState("notSaved");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleClose = () => {
    if (loading) return; // 👈 evita cerrar mientras envías
    setModalOpenParticipe(false);
  };

  const saveSocio = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      setLoading(true);

      // 1) Sanitiza/normaliza campos básicos
      const name = String(form?.name || "").trim();
      const lastname = String(form?.lastname || "").trim();
      const email = String(form?.email || "").trim();
      const age = String(form?.age || "").trim();
      const message = String(form?.message || "").trim();

      // 2) Teléfono: SOLO dígitos para backend
      const phoneDigits = toBackendPhone(form?.number || "", { defaultCountry: "56", assumeCLMobile: true });

      // 3) Validaciones mínimas
      if (!name || !lastname || !email || !age) {
        setErr("Completa nombre, apellido, email y generación.");
        setLoading(false);
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        setErr("Ingresa un email válido.");
        setLoading(false);
        return;
      }
      if (!/^\d{9,15}$/.test(phoneDigits)) {
        setErr("Ingresa un teléfono válido (9 a 15 dígitos).");
        setLoading(false);
        return;
      }

      // 4) Arma payload limpio
      const payload = {
        name,
        lastname,
        age,
        email,
        number: phoneDigits, // 👈 número como string de dígitos
        message,
      };

      const request = await fetch(`${Global.url}socio/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await request.json();

      if (data?.status === 'success') {
        setSaved("saved");
      } else {
        setErr("No pudimos registrar tu solicitud. Intenta nuevamente.");
      }
    } catch (error) {
      console.error(error);
      setErr("Ocurrió un error de conexión. Intenta más tarde.");
    } finally {
      setLoading(false); // 👈 sin setTimeout
    }
  };

  return (
    <>
      {saved !== "saved" ? (
        <Dialog
          open={modalOpenParticipe}
          onClose={handleClose}
          disableEscapeKeyDown={loading}     // 👈 bloqueo suave
        >
          <form className='form-participate' onSubmit={saveSocio}>
            <h2>Cuéntanos sobre ti</h2>

            <InputForm
              namePlaceHolder='Ingrese su nombre'
              nameInput='name'
              form={form}
              changed={changed}
              setForm={setForm}
              required
            />

            <InputForm
              namePlaceHolder='Ingrese su apellido'
              nameInput='lastname'
              form={form}
              changed={changed}
              setForm={setForm}
              required
            />

            <SelectForm
              nameInput='age'
              form={form}
              changed={changed}
              setForm={setForm}
              required
            />

            {/* Teléfono (permite + al escribir pero tú lo normalizas antes del fetch) */}
            <InputNumberForm
              nameInput='number'
              form={form}
              changed={changed}
              setForm={setForm}
              placeholder='+56 9 1234 5678'
              // Asegúrate que internamente NO haga parseFloat.
              // Ideal: type="tel", inputMode="numeric", pattern="^\+?\d{9,15}$"
              required
            />

            <InputForm
              namePlaceHolder='Ingrese su email'
              nameInput='email'
              form={form}
              changed={changed}
              setForm={setForm}
              type='email'
              autoComplete='email'
              required
            />

            <InputTextForm
              nameInput='message'
              form={form}
              changed={changed}
              setForm={setForm}
              placeholder='Cuéntanos cómo te gustaría apoyar…'
              rows={4}
            />

            {err && <div className="pm-error" role="alert">{err}</div>}

            <div className='button-inscription'>
              {/* Si ButtonRegister acepta type, pásale "submit" */}
              <ButtonRegister onClick={saveSocio} disabled={loading} text={loading ? "Enviando…" : "Enviar"} />
            </div>
          </form>
        </Dialog>
      ) : (
        <div className="modal">
          <div className="participation-box">
            <span className="modal__close" onClick={handleClose}>&times;</span>
            <h6>¡Gracias por inscribirte! 🥳</h6>
            <p>Te contactaremos pronto</p>
          </div>
        </div>
      )}
    </>
  );
};
