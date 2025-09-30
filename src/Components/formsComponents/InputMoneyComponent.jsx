// src/Components/formsComponents/InputMoneyCLP.jsx
import { onlyDigits, formatCLP } from "../../Utils/money";

export const InputMoneyComponent = ({
  nameLabel = "Monto",
  nameInput = "amount",
  form,
  changed,
  setForm,
  placeholder = "0",
  required = false,
  minDigits = 1,      // mínimo en dígitos ("1" = $1)
  maxDigits = 15      // límite razonable
}) => {
  const id = `fld_${nameInput}`;
  const raw = form?.[nameInput] ?? "";       // guardamos SOLO dígitos en el form
  const formatted = raw === "" ? "" : formatCLP(raw);

  const handleChange = (e) => {
    const digits = onlyDigits(e.target.value).slice(0, maxDigits);
    const next = { target: { name: nameInput, value: digits } };
    if (typeof changed === "function") changed(next);
    else if (typeof setForm === "function") setForm(prev => ({ ...prev, [nameInput]: digits }));
  };

  return (
    <div className="pm-field-money">
      {nameLabel && <label htmlFor={id} className="pm-label">{nameLabel}</label>}
      <input
        id={id}
        className="pm-input-money"
        type="text"                 // no usar number (rompe formato y borra ceros)
        inputMode="numeric"
        name={nameInput}
        value={formatted}           // mostramos "12.500"
        onChange={handleChange}     // guardamos "12500"
        placeholder={placeholder}
        required={required}
        pattern="\d*"               // evita el “haz coincidir…” con puntos/comas
        title="Ingresa solo números"
        autoComplete="off"
      />
      <small className="pm-help">CLP. Se formateará automáticamente.</small>
    </div>
  );
};
