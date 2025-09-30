// src/Components/formsComponents/InputNumberComponent.jsx
export const InputNumberComponent = ({
  nameLabel,
  nameInput,
  form,
  changed,
  setForm,
  placeholder = "",
  required = false,
}) => {
  const id = `fld_${nameInput}`;

  const handleChange = (e) => {
    const raw = e.target.value;
    // Solo dígitos y "+" (permitimos "+" solo al inicio, opcional)
    const cleaned = raw.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
    const next = { target: { name: nameInput, value: cleaned } };

    if (typeof changed === "function") {
      // Pasa un objeto "event-like" mínimo (name + value)
      changed(next);
    } else if (typeof setForm === "function") {
      setForm((prev) => ({ ...prev, [nameInput]: cleaned }));
    }
  };

  return (
    <div className="pm-field">
      {nameLabel && <label htmlFor={id} className="pm-label">{nameLabel}</label>}
      <input
        id={id}
        className="pm-input"
        type="tel"
        inputMode="numeric"
        name={nameInput}
        value={form?.[nameInput] ?? ""}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        autoComplete="tel"
      
  pattern="^\+?\d{9,15}$"        // ayuda a móviles a mostrar teclado numérico
        maxLength={16}         // límite razonable (E.164 llega a 15 + posibles espacios)
        aria-describedby={`${id}-help`}
      />
      <small id={`${id}-help`} className="pm-help">
        Ingresa tu teléfono con o sin +56. Lo convertiremos automáticamente.
      </small>

    </div>
  );
};
