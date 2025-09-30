// src/Components/formsComponents/InputForTextComponent.jsx
export const InputForTextComponent = ({
  nameInput,
  nameLabel = "Mensaje",
  form,
  changed,
  setForm,
  placeholder = "Escribe tu mensaje…",
  rows = 4,
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
      <textarea
        id={id}
        className="pm-input pm-textarea"
        name={nameInput}
        rows={rows}
        value={form?.[nameInput] ?? ""}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
