# BetyGym — sitio web

Sitio web para BetyGym, espacio de entrenamiento y bienestar de Bety, profesora de gimnasia y coach de hipopresivos.

## Sobre BetyGym
- Actividades: entrenamiento consciente, entrenamiento funcional, Fit Pilates y coaching de hipopresivos.
- Modalidad: presencial en el Club El Retiro (Hurlingham, Zona Oeste) y clases online por Google Meet.
- Filosofía: movimiento, disfrute y bienestar integral, sin exigencias extremas ni culpas.
- Comunidad: trato cercano con cada alumna, grupos de WhatsApp de alimentación saludable y viajes grupales por el mundo para disfrutar junto al grupo.
- Instagram: [@betygym_](https://www.instagram.com/betygym_/)
- WhatsApp: +54 9 11 6247-3344

## Público
- Gente adulta, mayormente de la zona. Muchos van a llegar desde Instagram, en el celular.
- Tono cercano y cálido, como habla Bety con sus alumnas. Nada de lenguaje de gimnasio "fitness extremo", nada de cuerpos ideales ni presión.

## Reglas de contenido
- Textos en español rioplatense (voseo), con tildes correctas.
- Horarios y precios NO van en la página: cambian seguido, se consultan por WhatsApp (ver abajo).
- No inventar datos: testimonios, certificaciones o fechas de viajes van como placeholder `[COMPLETAR]` hasta que los tenga.
- Fotos: usar placeholders con el tamaño correcto; las reales van en `/assets/img`.

## Contacto por WhatsApp
Botones que abren WhatsApp con un mensaje ya escrito:
- Link: `https://wa.me/5491162473344?text=<mensaje con encodeURIComponent>`
- Número y mensajes definidos en un solo lugar (`/js/whatsapp.js`) para cambiarlos fácil.
- Mensajes:
  - Horarios: "¡Hola Bety! Quería consultarte los horarios de las clases."
  - Precios: "¡Hola Bety! Quería consultarte los precios de las clases."
  - Por actividad (botón en cada tarjeta): "¡Hola Bety! Quería consultarte por las clases de <actividad>."
  - General: "¡Hola Bety! Quería hacerte una consulta."
  - Clases online: "¡Hola Bety! Quería consultarte por las clases online."
  - Grupo de alimentación: "¡Hola Bety! Quería sumarme al grupo de alimentación saludable."
  - Viajes: "¡Hola Bety! Quería consultarte por los viajes grupales."
- Botón flotante de WhatsApp siempre visible en celular (mensaje general).

## Secciones (primera versión)
1. Inicio: quién es Bety y la propuesta en una frase + botones "Consultar horarios" y "Consultar precios".
2. Actividades: una tarjeta por actividad, explicada simple (qué es, para quién, beneficios) + botón de consulta.
3. Modalidades: presencial en Club El Retiro (con mapa) y online por Meet.
4. Comunidad: grupos de alimentación saludable y viajes grupales.
5. Sobre Bety: su historia y su forma de trabajar.
6. Contacto: botones de horarios, precios y consulta general + Instagram.

## Diseño y accesibilidad
- Mobile first.
- Letra grande (base 18px mínimo), buen contraste, botones grandes y fáciles de tocar.
- Navegación simple, sin animaciones pesadas ni cosas que distraigan.
- Estilo visual: minimalista, con la paleta sacada del logo (`/assets/img/logo-fondo-claro.svg` y `logo-fondo-oscuro.svg`).
  - Paleta: fondo `#FFF8F5`, fondo alterno `#FBE9E6`, texto `#3A3A3A`, texto suave `#5F5B5C`, oscuro `#2E2A2B` (contacto y pie, con el logo oscuro).
  - Rosa del logo `#FC6282` / `#F2496F` y gris `#ADAFAE`: solo decoración (aro, líneas, bordes), nunca para texto ni botones con texto blanco (no llegan a 4,5:1).
  - Rosa de botones y links: `#C72A52` (hover `#A91F44`) con texto blanco. WhatsApp: verde `#1E7B46` con texto blanco.
  - Tipografías (Google Fonts): títulos **Baloo 2** (600/700), texto **Nunito** (400/600/700).
  - Detalles decorativos (siempre sutiles, nunca detrás de texto importante sin contraste): flores translúcidas (`/assets/img/flor.svg`, `flor-2.svg`) sobre las bandas rosadas, bordes ondulados entre secciones, brillo rosado detrás del inicio, sombras suaves en tarjetas y botones.
  - Movimiento: solo aparición suave al hacer scroll y un leve "levante" al pasar el mouse (`/js/efectos.js`); se desactiva con `prefers-reduced-motion`.

## Técnico
- Sitio estático: HTML, CSS y JS sin framework.
- Estructura: `index.html`, `/css`, `/js`, `/assets/img`.
- Que cargue rápido: imágenes optimizadas, sin librerías innecesarias.

## Forma de trabajo
- Cambios chicos, sección por sección.
- Antes de cambios grandes de estructura, proponer el plan y esperar el ok.
