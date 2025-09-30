import { useEffect, useRef, useState } from "react";
import { SelectComponent } from "../../formsComponents/SelectComponent";
import { InputComponent } from "../../formsComponents/InputComponent";
import { InputNumberComponent } from "../../formsComponents/InputNumberComponent";
import { InputForTextComponent } from "../../formsComponents/InputForTextComponent";
import { Global } from "../../../Helpers/Global";
import { useForm } from "../../../Hooks/useForm";
import { toBackendPhone } from "../../../Utils/phone"; // ⚠️ ajusta ruta
import "../../../assets/css/participateModal.css";

export const ButtonModalParticipate = ({
  selectedEventId,
  setModalOpenParticipe,
  modalOpenParticipe
}) => {
  const { form, changed, setForm } = useForm({});
  const [saved, setSaved] = useState("notSaved");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef(null);
  const formRef = useRef(null);

  const close = () => setModalOpenParticipe(false);

  useEffect(() => {
    if (!modalOpenParticipe) return;
    const onEsc = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onEsc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prev;
    };
  }, [modalOpenParticipe]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) close();
  };

  const saveMember = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Valida HTML5 primero (required, email, pattern, etc.)
    if (!formRef.current?.reportValidity()) return;

    try {
      setLoading(true);

      // 1) Normaliza teléfono a SOLO dígitos (p.ej. "+56 9 1234 5678" -> "56912345678")
      const phoneDigits = toBackendPhone(form?.number || "", {
        defaultCountry: "56",
        assumeCLMobile: true,
      });

      // 2) Valida largo razonable (E.164 máx 15; Chile móvil queda en 11: 569 + 8 dígitos)
      if (!/^\d{9,15}$/.test(phoneDigits)) {
        setErrorMsg("Revisa tu teléfono. Debe tener entre 9 y 15 dígitos.");
        setLoading(false);
        return;
      }

      // 3) Arma el payload
      const payload = {
        ...form,
        ...(selectedEventId ? { event: selectedEventId } : {}),
        // Si tu backend SOLO acepta número, usa Number(phoneDigits). Si acepta string, deja phoneDigits.
        number: Number(phoneDigits), // <- cámbialo a `phoneDigits` si tu API acepta string
      };

      console.log(payload);

      const res = await fetch(Global.url + "member/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data?.status === "success") {
        setSaved("saved");
      } else {
        setErrorMsg("No pudimos registrar tu solicitud. Intenta nuevamente.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Ocurrió un error de conexión. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  if (!modalOpenParticipe) return null;

  return (
    <div
      className="pm pm-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pm-title"
    >
      {saved !== "saved" ? (
        <div className="pm-card" role="document">
          <button className="pm-close" aria-label="Cerrar" onClick={close}>
            ×
          </button>

          <header className="pm-head">
            <h6 id="pm-title">Gracias por querer ser parte</h6>
            <p className="pm-sub">
              Completa tus datos para inscribirte como voluntario/a.
            </p>
          </header>

          {!!errorMsg && <div className="pm-error">{errorMsg}</div>}

          <form className="pm-form" ref={formRef} onSubmit={saveMember}>
            <div className="pm-field">
              <InputComponent
                nameLabel="Nombre"
                nameInput="name"
                form={form}
                changed={changed}
                setForm={setForm}
                required
              />
            </div>

            <div className="pm-field">
              <InputComponent
                nameLabel="Apellido"
                nameInput="lastname"
                form={form}
                changed={changed}
                setForm={setForm}
                required
              />
            </div>

            <div className="pm-field">
              <SelectComponent
                nameInput="age"
                nameLabel="Generación"
                form={form}
                changed={changed}
                setForm={setForm}
                required
              />
            </div>

            <div className="pm-field">
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
            </div>

            <div className="pm-field">
              <InputNumberComponent
                nameLabel="Teléfono"
                nameInput="number"
                form={form}
                changed={changed}
                setForm={setForm}
                placeholder="+56 9 1234 5678"
                required
                // Sugerencia: dentro del propio InputNumberComponent usa type="tel", inputMode="numeric"
                // y este pattern que permite + opcional y 9-15 dígitos (con espacios):
                pattern="^\+?\d[\d\s]{7,}$"
                title="Ingresa tu teléfono con o sin +, solo números (puedes usar espacios)."
              />
            </div>

            <div className="pm-full pm-field">
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

            <div className="pm-actions">
              <button type="submit" className="pm-btn pm-btn--solid" disabled={loading}>
                {loading ? "Enviando…" : "Enviar"}
              </button>
              <button type="button" className="pm-btn pm-btn--ghost" onClick={close}>
                Cerrar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="pm-card pm-card--success" role="document">
          <button className="pm-close" aria-label="Cerrar" onClick={close}>
            ×
          </button>
          <div className="pm-success">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="pm-check">
              <path
                d="M20 6L9 17l-5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <h6>¡Gracias por inscribirte! 🥳</h6>
            <p>Te contactaremos pronto con los siguientes pasos.</p>
            <button type="button" className="pm-btn pm-btn--solid" onClick={close}>
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
