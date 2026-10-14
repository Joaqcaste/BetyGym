// Número y mensajes de WhatsApp: se cambian acá y se actualizan todos los botones.
const WHATSAPP = {
  numero: "5491162473344",
  mensajes: {
    horarios: "¡Hola Bety! Quería consultarte los horarios de las clases.",
    precios: "¡Hola Bety! Quería consultarte los precios de las clases.",
    general: "¡Hola Bety! Quería hacerte una consulta.",
    actividad: (nombre) => `¡Hola Bety! Quería consultarte por las clases de ${nombre}.`,
  },
};

function linkWhatsApp(mensaje) {
  return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensaje)}`;
}

// Botones: <a data-wa="horarios|precios|general"> o <a data-wa="actividad" data-actividad="Fit Pilates">
document.querySelectorAll("[data-wa]").forEach((boton) => {
  const tipo = boton.dataset.wa;
  const mensaje =
    tipo === "actividad"
      ? WHATSAPP.mensajes.actividad(boton.dataset.actividad)
      : WHATSAPP.mensajes[tipo] || WHATSAPP.mensajes.general;
  boton.href = linkWhatsApp(mensaje);
  boton.target = "_blank";
  boton.rel = "noopener";
});
