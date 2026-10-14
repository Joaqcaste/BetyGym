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
        // Después de aparecer se limpian las clases para no pisar el efecto hover de las tarjetas
        setTimeout(() => el.classList.remove("reveal", "visible"), 900);
      });
    },
    { threshold: 0.12 }
  );

  document
    .querySelectorAll(".actividades h2, .modalidades h2, .comunidad h2, .sobre h2, .seccion__bajada, .tarjeta, .sobre__bloque")
    .forEach((el, i) => {
      // Solo lo que todavía no se ve en pantalla; lo que ya está a la vista no parpadea
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("reveal");
      if (el.classList.contains("tarjeta")) {
        el.style.transitionDelay = `${(i % 2) * 0.12}s`;
      }
      observador.observe(el);
    });
}
