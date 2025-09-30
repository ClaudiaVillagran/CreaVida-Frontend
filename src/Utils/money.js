// src/utils/money.js
export const onlyDigits = (s = "") => String(s).replace(/\D/g, "");

export const formatCLP = (digits = "") => {
  if (digits === "") return "";
  return Number(digits).toLocaleString("es-CL"); // 12500 -> "12.500"
};
