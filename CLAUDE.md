# Portafolio — Maria Del Mar Artunduaga

## Descripción
Portafolio personal de desarrolladora fullstack. Construido con React + Vite.
Desplegado en Netlify: https://mariaartunduaga.netlify.app/

---

## Stack técnico

### Core
- **React 18** con functional components y hooks
- **Vite 5** como bundler y dev server (`npm run dev`)
- **React Router DOM v6** para navegación SPA

### Estilos
- **Tailwind CSS v3** como utilidad principal
- **MUI (Material UI v6)** + **Emotion** para componentes puntuales
- **PostCSS** + **Autoprefixer** configurados

### Iconos
- **FontAwesome** (brands + solid) vía `@fortawesome/react-fontawesome`
- **Heroicons** vía `@heroicons/react`

### Internacionalización
- **i18next** + **react-i18next** — el sitio soporta múltiples idiomas

### Linting
- ESLint con plugins de React, React Hooks y React Refresh

---

## Diseño — sistema visual

### Paleta de colores
| Nombre  | Hex       | Uso                          |
|---------|-----------|------------------------------|
| wine    | `#660005` | Fondo hero, nav, contacto    |
| deep    | `#9e182b` | Hover, acentos               |
| blush   | `#f2afbc` | Texto secundario sobre vino  |
| pale    | `#f9cbd6` | Texto principal sobre vino   |
| nude    | `#f2e0d2` | Fondo secciones claras       |
| rose    | `#DF8F9C` | Detalles, pills              |
| cream   | `#FAF4D4` | CTAs primarios               |

### Tipografía
- Títulos: **DM Serif Display** (Google Fonts, incluye italic)
- Cuerpo: **DM Sans** (weights: 300, 400, 500)

### Principios de layout
- Sin sidebar — una sola columna con scroll vertical
- Siempre responsive (mobile-first con Tailwind)
- No usar gradientes agresivos ni sombras decorativas

---

## Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables (Nav, Footer, ProjectCard, etc.)
├── pages/            # Vistas por ruta (Home, Projects, About, Contact)
├── locales/          # Archivos de traducción i18next (es/, en/)
├── assets/           # Imágenes, íconos estáticos
├── App.jsx           # Rutas con React Router
└── main.jsx          # Entry point
```

---

## Convenciones de código

- Componentes en **PascalCase**: `ProjectCard.jsx`
- Hooks y utilidades en **camelCase**: `useProjects.js`
- Clases Tailwind directamente en JSX — no CSS modules salvo casos excepcionales
- MUI solo para componentes complejos que Tailwind no cubra bien (ej: modals, snackbars)
- Íconos de FontAwesome para redes sociales y marcas; Heroicons para UI general
- Todo texto visible debe pasar por `react-i18next` (`useTranslation`) — no hardcodear strings

---

## Secciones del portafolio

1. **Hero** — nombre, rol, tagline, CTA (ver proyectos + descargar CV)
2. **Proyectos** — grid de cards con preview, stack, descripción breve, links
3. **Sobre mí** — texto breve + skills agrupados por categoría
4. **Contacto** — formulario + links (email, LinkedIn, GitHub)

### Proyectos actuales
| Proyecto        | Stack principal              | Demo | Repo |
|-----------------|------------------------------|------|------|
| Tuvooz          | HTML5, CSS3, Python, Django  | sí   | sí   |
| Shop Online MAC | React, Tailwind              | sí   | sí   |
| Librería Yulep  | HTML5, CSS3, Python, Django  | no   | sí   |
| Clínica SaludViva | HTML5, CSS3               | no   | sí   |

---

## Comandos frecuentes

```bash
npm run dev       # Servidor local en localhost:5173
npm run build     # Build de producción en /dist
npm run preview   # Preview del build
npm run lint      # Revisar errores de ESLint
```

---

## Notas para Claude

- Priorizar Tailwind sobre estilos inline o CSS custom
- Si hay conflicto entre MUI y Tailwind, preferir Tailwind salvo que MUI ya resuelva bien el caso
- Respetar la paleta — no introducir colores fuera del sistema definido
- Los textos del sitio deben agregarse también en los archivos de traducción
- Antes de crear un componente nuevo, revisar si ya existe algo similar en `src/components/`
- El sitio se despliega en Netlify — tener en cuenta que las rutas SPA necesitan el archivo `_redirects`