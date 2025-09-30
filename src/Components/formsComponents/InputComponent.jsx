// src/Components/formsComponents/InputComponent.jsx
export const InputComponent = ({
  nameLabel,
  nameInput,
  type = "text",
  placeholder = "",
  form,
  changed,
  setForm,
  required = false,
  autoComplete = "on",
}) => {
  const id = `fld_${nameInput}`;

  const handleChange = (e) => {
    // usa tu hook changed si existe; si no, actualiza aquí
    if (typeof changed === "function") changed(e);
    else {
      const { name, value, type } = e.target;
      let v = value;
      if (type === "number") v = value === "" ? "" : Number(value);
      setForm?.((prev) => ({ ...prev, [name]: v }));
    }
  };

  return (
    <div className="pm-field">
      {nameLabel && (
        <label htmlFor={id} className="pm-label">
          {nameLabel}
        </label>
      )}
      <input
        id={id}
        className="pm-input"
        type={type}
        name={nameInput}
        value={form?.[nameInput] ?? ""}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        
      />
    </div>
  );
};
