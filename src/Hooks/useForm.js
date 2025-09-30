import { useState } from "react";

export const useForm = (initialObj = {}) => {
  const [form, setForm] = useState(initialObj);

  const changed = ({ target }) => {
    const { name, value } = target;
    setForm(prev => ({
      ...prev,
      [name]: value,   // <-- siempre string, sin parsear
    }));
  };

  return { form, changed, setForm };
};