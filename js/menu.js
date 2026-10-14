// Menú del header en celular: botón que abre y cierra la lista de links.
// Sin JS la lista queda siempre visible (el CSS solo la oculta si <html> tiene la clase "js").
document.documentElement.classList.add("js");

const botonMenu = document.querySelector(".menu__boton");
const listaMenu = document.querySelector("#menu-lista");

if (botonMenu && listaMenu) {
  const alternar = (abrir) => {
    botonMenu.setAttribute("aria-expanded", String(abrir));
    listaMenu.classList.toggle("menu__lista--abierta", abrir);
    botonMenu.querySelector("span").textContent = abrir ? "Cerrar" : "Menú";
  };

  botonMenu.addEventListener("click", () => {
    alternar(botonMenu.getAttribute("aria-expanded") !== "true");
  });

  // Al tocar un link se cierra el menú
  listaMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) alternar(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") alternar(false);
  });
}
