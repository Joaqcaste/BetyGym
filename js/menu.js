// Header y menú lateral (hamburguesa).
// Sin JS el menú queda siempre visible (el CSS solo lo convierte en panel si <html> tiene la clase "js").
document.documentElement.classList.add("js");

const menu = document.querySelector(".menu");
const botonMenu = document.querySelector(".menu__boton");
const botonCerrar = document.querySelector(".menu__cerrar");
const fondoMenu = document.querySelector(".menu__fondo");

if (menu && botonMenu) {
  const estaAbierto = () => menu.classList.contains("menu--abierto");

  const alternar = (abrir, devolverFoco = false) => {
    menu.classList.toggle("menu--abierto", abrir);
    document.documentElement.classList.toggle("menu-abierto", abrir);
    botonMenu.setAttribute("aria-expanded", String(abrir));
    if (abrir) botonCerrar.focus();
    else if (devolverFoco) botonMenu.focus();
  };

  botonMenu.addEventListener("click", () => alternar(true));
  botonCerrar.addEventListener("click", () => alternar(false, true));
  fondoMenu.addEventListener("click", () => alternar(false, true));

  // Al tocar un link el panel se cierra y la página va a esa sección
  menu.querySelectorAll(".menu__lista a").forEach((link) => {
    link.addEventListener("click", () => alternar(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && estaAbierto()) alternar(false, true);
  });
}

// Header fijo: al bajar se achica un poco para dejar más lugar al contenido
const header = document.querySelector(".header");
if (header) {
  const ajustarHeader = () => header.classList.toggle("header--compacto", window.scrollY > 30);
  window.addEventListener("scroll", ajustarHeader, { passive: true });
  ajustarHeader();
}
