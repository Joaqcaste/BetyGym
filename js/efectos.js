// Aparición suave de tarjetas y títulos al hacer scroll.
// Si el navegador no soporta IntersectionObserver o la persona pidió menos movimiento, no hace nada
// (la clase "reveal" la pone este script, así que sin JS todo se ve normal).
const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !menosMovimiento) {
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        const el = entrada.target;
        el.classList.add("visible");
        observador.unobserve(el);
        // Después de aparecer se limpian las clases y la demora para no pisar el efecto hover
        setTimeout(() => {
          el.classList.remove("reveal", "visible");
          el.style.transitionDelay = "";
        }, 1200);
      });
    },
    { threshold: 0.12 }
  );

  document
    .querySelectorAll(
      ".actividades h2, .modalidades h2, .comunidad h2, .sobre h2, .seccion__bajada, .tarjeta, .sobre__bloque, .sobre__lista li, .contacto__contenido > *"
    )
    .forEach((el, i) => {
      // Solo lo que todavía no se ve en pantalla; lo que ya está a la vista no parpadea
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("reveal");
      if (el.classList.contains("tarjeta")) {
        el.style.transitionDelay = `${(i % 2) * 0.12}s`;
      } else if (el.matches(".sobre__lista li")) {
        // las 4 viñetas aparecen escalonadas
        el.style.transitionDelay = `${[...el.parentNode.children].indexOf(el) * 0.1}s`;
      }
      observador.observe(el);
    });
}
