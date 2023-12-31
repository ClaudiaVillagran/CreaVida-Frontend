import { useState } from "react";

export const useForm = (initialObj = {}) => {
  const [form, setForm] = useState(initialObj);

  const changed = ({ target }) => {
    const { name, value } = target;
    console.log(name);
    const numericValue = name == "number" ? parseFloat(value) : value;
    console.log(numericValue);
    setForm({
      ...form,
      [name]: numericValue,
    });
    console.log(form);
  };
  return {
    form,
    changed,
    setForm,
  };
};
