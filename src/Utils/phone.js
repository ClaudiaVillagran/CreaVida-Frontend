// utils/phone.js
export function digitsOnly(str = "") {
  return String(str).replace(/\D/g, ""); // elimina TODO lo que no sea dígito
}

/**
 * Normaliza a lo que espera tu backend: SOLO dígitos.
 * - Si viene con +56 9..., quedará 569...
 * - Si el usuario escribe 9XXXXXXXX (Chile), opcionalmente preprende "56".
 */
export function toBackendPhone(str = "", { defaultCountry = "56", assumeCLMobile = true } = {}) {
  const d = digitsOnly(str);

  // Si ya empieza con 56, envíalo tal cual
  if (d.startsWith(defaultCountry)) return d;

  // Si parece un celular chileno (9 + 8 dígitos = 9 en total) y quieres forzar el 56
  if (assumeCLMobile && /^9\d{8}$/.test(d)) return defaultCountry + d;

  // Si el usuario pegó 0XXXXXXXXX, quita 0 líder (opcional)
  if (/^0\d{8,}$/.test(d)) return d.replace(/^0/, "");

  // En última instancia, envía lo que haya, pero solo dígitos
  return d;
}
