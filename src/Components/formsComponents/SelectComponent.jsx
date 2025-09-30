// src/Components/formsComponents/SelectComponent.jsx
export const SelectComponent = ({
  nameInput,
  nameLabel = "Generación",
  options = [
    { value: "joven", label: "Joven (14–24)" },
    { value: "adulto", label: "Adulto (25–59)" },
    { value: "mayor", label: "Adulto mayor (60+)" },
  ],
  form,
  changed,
  setForm,
  required = false,
}) => {
  const id = `fld_${nameInput}`;

  const handleChange = (e) => {
    if (typeof changed === "function") changed(e);
    else setForm?.((prev) => ({ ...prev, [nameInput]: e.target.value }));
  };

  return (
    <div className="pm-field">
      {nameLabel && (
        <label htmlFor={id} className="pm-label">
          {nameLabel}
        </label>
      )}
      <select
        id={id}
        className="pm-input pm-select"
        name={nameInput}
        value={form?.[nameInput] ?? ""}
        onChange={handleChange}
        required={required}
      >
        <option value="" disabled>Selecciona…</option>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
};
