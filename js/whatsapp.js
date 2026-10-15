// Número y mensajes de WhatsApp: se cambian acá y se actualizan todos los botones.
const WHATSAPP = {
  numero: "5491162473344",
  mensajes: {
    horarios: "¡Hola Bety! Quería consultarte los horarios de las clases.",
    precios: "¡Hola Bety! Quería consultarte los precios de las clases.",
    general: "¡Hola Bety! Quería hacerte una consulta.",
    online: "¡Hola Bety! Quería consultarte por las clases online.",
    alimentacion: "¡Hola Bety! Quería sumarme al grupo de alimentación saludable.",
    viajes: "¡Hola Bety! Quería consultarte por los viajes grupales.",
    actividad: (nombre) => `¡Hola Bety! Quería consultarte por las clases de ${nombre}.`,
  },
};

function linkWhatsApp(mensaje) {
  return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensaje)}`;
}

// Botones: <a data-wa="horarios|precios|general|online|alimentacion|viajes"> o <a data-wa="actividad" data-actividad="Fit Pilates">
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
