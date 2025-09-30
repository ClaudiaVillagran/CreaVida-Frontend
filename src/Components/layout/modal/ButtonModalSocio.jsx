import { useEffect, useRef, useState } from "react";
import { Global } from "../../../Helpers/Global";
import { useForm } from "../../../Hooks/useForm";
import { toBackendPhone } from "../../../Utils/phone"; // ajusta ruta
// Inputs “vanilla” (los que te pasé antes)
import { InputComponent } from "../../formsComponents/InputComponent";
import { InputNumberComponent } from "../../formsComponents/InputNumberComponent";
import { SelectComponent } from "../../formsComponents/SelectComponent";
import { InputForTextComponent } from "../../formsComponents/InputForTextComponent";
import '../../../assets/css/socioModal.css'
export const ButtonModalSocio = ({ setModalOpenSocio, modalOpenSocio }) => {
  const { form, changed, setForm } = useForm({});
  const [saved, setSaved] = useState("notSaved");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef(null);

  const handleClose = () => setModalOpenSocio(false);

  // Cerrar con ESC
  useEffect(() => {
    if (!modalOpenSocio) return;
    const onKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpenSocio]);

  // Cerrar al click fuera
  const onOverlayClick = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) handleClose();
  };
const saveSocio = async (e) => {
  e.preventDefault();
  setErrorMsg("");
  try {
    setLoading(true);

    // 1) Normaliza a solo dígitos (ya lo tienes como "569...", pero por si acaso)
    const phoneDigits = toBackendPhone(form?.number || "", { defaultCountry: "56", assumeCLMobile: true });

    // 2) Valida largo razonable (E.164 máx 15)
    if (!/^\d{9,15}$/.test(phoneDigits)) {
      setErrorMsg("Revisa tu teléfono. Debe tener entre 9 y 15 dígitos.");
      setLoading(false);
      return;
    }

    // 3) Si tu backend SOLO acepta número, conviértelo aquí:
    const phoneNumber = Number(phoneDigits);
    if (!Number.isFinite(phoneNumber)) {
      setErrorMsg("El teléfono no es válido.");
      setLoading(false);
      return;
    }

    const payload = {
      ...form,
      number: phoneNumber, // 👈 va como número (no string)
    };
    console.log(payload);

    const req = await fetch(`${Global.url}socio/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await req.json();

    if (data?.status === "success") setSaved("saved");
    else setErrorMsg("No pudimos registrar tu solicitud. Intenta nuevamente.");
  } catch (err) {
    setErrorMsg("Ocurrió un error de conexión. Intenta más tarde.");
  } finally {
    setLoading(false);
  }
};
  if (!modalOpenSocio) return null;

  return (
    <div className="pm-overlay" onMouseDown={onOverlayClick}>
      {saved !== "saved" ? (
        <section
          ref={dialogRef}
          className="pm-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pm-title-socio"
        >
          <button className="pm-close" onClick={handleClose} aria-label="Cerrar">×</button>

          <header className="pm-head">
            <h3 id="pm-title-socio" className="pm-title">Gracias por querer ser parte</h3>
            <p className="pm-subtitle">Completa tus datos para inscribirte como socio/a.</p>
          </header>

          {!!errorMsg && <div className="pm-error">{errorMsg}</div>}

          <form className="pm-form" onSubmit={saveSocio}>
            <div className="pm-grid">
              <InputComponent
                nameLabel="Nombre"
                nameInput="name"
                form={form}
                changed={changed}
                setForm={setForm}
                required
              />
              <InputComponent
                nameLabel="Apellido"
                nameInput="lastname"
                form={form}
                changed={changed}
                setForm={setForm}
                required
              />

              <SelectComponent
                nameInput="age"
                nameLabel="Generación"
                form={form}
                changed={changed}
                setForm={setForm}
                required
              />
              <InputComponent
                nameLabel="Email"
                nameInput="email"
                type="email"
                autoComplete="email"
                form={form}
                changed={changed}
                setForm={setForm}
                required
              />

              <InputNumberComponent
                nameLabel="Teléfono"
                nameInput="number"
                form={form}
                changed={changed}
                setForm={setForm}
                placeholder="+56 9 1234 5678"

                required
              />

              <div className="pm-col-full">
                <InputForTextComponent
                  nameInput="message"
                  nameLabel="Mensaje (opcional)"
                  form={form}
                  changed={changed}
                  setForm={setForm}
                  rows={5}
                  placeholder="Cuéntanos cómo te gustaría apoyar…"
                />
              </div>
            </div>

            <div className="pm-actions">
              <button type="button" className="pm-btn pm-btn--ghost" onClick={handleClose}>
                Cerrar
              </button>
              <button type="submit" className="pm-btn" disabled={loading}>
                {loading ? "Enviando…" : "Enviar"}
              </button>
            </div>
          </form>
        </section>
      ) : (
        <section ref={dialogRef} className="pm-dialog" role="alertdialog" aria-modal="true">
          <button className="pm-close" onClick={handleClose} aria-label="Cerrar">×</button>
          <header className="pm-head">
            <h3 className="pm-title">¡Gracias por inscribirte! 🥳</h3>
            <p className="pm-subtitle">Pronto nos pondremos en contacto contigo.</p>
          </header>
          <div className="pm-actions" style={{ justifyContent: "center" }}>
            <button className="pm-btn" onClick={handleClose}>Aceptar</button>
          </div>
        </section>
      )}
    </div>
  );
};
