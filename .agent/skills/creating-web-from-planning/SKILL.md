---
name: creating-web-from-planning
description: Generates a complete website from a client planning document. Handles scraping existing sites with Playwright MCP, creating a PRD from the create-prd.md template, developing in React+Vite, and converting to static HTML with separate header/footer. Use when the user mentions creating a web, building a site from a planning, PRD generation, or web project kickoff.
---

# Creating a Website from Client Planning

## When to use this skill

- The user provides a **planning document** (PDF, Notion page, or text) for a new website
- The user asks to **create a PRD** for a web project
- The user wants to **scrape an existing website** to use as reference for a redesign
- The user mentions **building a website from scratch** based on client requirements
- Keywords: "planning", "PRD", "web project", "scrape site", "redesign web", "crear web", "planificación"

## Prerequisites

- **Playwright MCP** must be available (for scraping existing sites)
- **Notion MCP** must be available (if planning is in Notion)
- The `create-prd.md` workflow must exist in the project root (see [resources/create-prd-template.md](resources/create-prd-template.md))

## Workflow

Follow these phases **in order**. Confirm with the user before moving to the next phase.

### Phase 0: Gather Inputs

- [ ] Ask the user for the **planning document** (file path, Notion link, or pasted text)
- [ ] Ask if there is an **existing website** to scrape as reference (URL or "none")
- [ ] Ask for the **project name** and **output directory**
- [ ] Identify the project language (Spanish, English, etc.)

### Phase 1: Scrape Existing Website (if applicable)

If the user provides an existing website URL, use Playwright MCP to extract content:

1. Navigate to the site using `playwright_navigate`
2. Take a **full-page screenshot** for visual reference using `playwright_screenshot`
3. Extract the **visible text** using `playwright_get_visible_text`
4. Extract the **HTML structure** using `playwright_get_visible_html` with `cleanHtml: true`
5. Navigate to **each subpage** linked from the main site and repeat steps 2-4
6. Look for key elements:
   - Navigation structure (menu items, links)
   - Footer content (contact info, social links, legal)
   - Color palette (inspect CSS variables or inline styles)
   - Typography (font families used)
   - Images and media (catalog all image URLs/paths)
   - Forms (contact, newsletter, etc.)
   - Social media links
   - Map embeds (Google Maps, etc.)
7. Save all scraped content into a `scraped-content/` folder:
   - `scraped-content/text-content.md` — All text organized by page
   - `scraped-content/structure.md` — Site map and navigation tree
   - `scraped-content/assets-inventory.md` — All images, logos, media found
   - `scraped-content/screenshots/` — Full-page screenshots of each page

> **If no existing site**: Skip this phase entirely. All content will come from the planning document.

### Phase 2: Analyze Planning Document

1. Read the planning document thoroughly
2. Extract and organize:
   - **Client info**: Name, sector, contact details
   - **Brand identity**: Colors, logo, typography preferences
   - **Site structure**: Pages needed, navigation hierarchy
   - **Content inventory**: Text, images, documents available
   - **Features required**: Forms, maps, galleries, animations, etc.
   - **Third-party integrations**: Google Maps, social media, analytics, etc.
   - **Target audience**: Who will use the site
   - **SEO requirements**: Keywords, meta descriptions, language
   - **Hosting/domain info**: Where it will be deployed
3. Cross-reference with scraped content (if available) to identify:
   - Content that can be **reused** from the existing site
   - Content that needs to be **created from scratch**
   - Design elements to **keep** vs **redesign**

### Phase 3: Generate PRD

Use the `create-prd.md` template structure to generate the PRD. **Critical customizations for web projects:**

1. **Section 6 (Architecture)**: MUST specify **two architectures**:
   - **Development architecture**: React + Vite project structure
   - **Final deliverable architecture**: Static HTML with separate `components/header.html` and `components/footer.html`

2. **Section 8 (Tech Stack)**: MUST include:
   - **Development**: React 18+, Vite 5+, React Router, CSS Modules or vanilla CSS
   - **Final deliverable**: HTML5 + CSS3 + vanilla JS (zero dependencies)
   - Note: `NO Tailwind` unless the user explicitly requests it

3. **Section 12 (Implementation Phases)**: MUST include **5 phases**:

```markdown
### Fase 1 (Semana 1): Setup + Diseño base
- Inicializar React + Vite
- Crear sistema de diseño (variables CSS, tipografía, colores)
- Implementar layout base (Header + Footer + estructura de páginas)

### Fase 2 (Semana 2): Páginas principales
- Implementar todas las páginas con contenido real
- Integrar imágenes y media
- Formularios funcionales

### Fase 3 (Semana 3): Funcionalidades + Responsive
- Google Maps, carruseles, animaciones
- Responsive completo (mobile-first)
- SEO (meta tags, Open Graph, schema.org)

### Fase 4 (Semana 4): Testing + Deploy temporal
- Cross-browser testing
- Performance optimization (Lighthouse >90)
- Deploy temporal en Vercel/Netlify para validación del cliente

### Fase 5 (Semana 5): Conversión HTML estático
- Convertir componentes React a HTML estático
- Extraer header.html y footer.html como archivos separados
- Cada página incluye header/footer via JS injection o SSI
- Minificar CSS y JS
- Entregar carpeta lista para hosting tradicional
```

4. **Section 10 (Formularios)**: For each form in the planning, specify:
   - Fields, types, validations
   - Submission method (email via formspree/emailjs, or backend)
   - Success/error messages

5. **Additional sections for web projects**:
   - **Inventario de imágenes**: List all images needed with source (existing, to-create, stock)
   - **Contenido por página**: Exact text content for each page section
   - **Colaboradores/Partners**: If applicable, logos and categories

### Phase 4: Validate PRD with User

Present the completed PRD to the user and:
- [ ] Confirm site structure and navigation
- [ ] Confirm color palette and typography
- [ ] Confirm all pages and their content
- [ ] Confirm forms and integrations
- [ ] Confirm implementation phases timeline
- [ ] Get explicit approval before starting development

## Architecture Rules

### Development (React + Vite)

```
project-root/
├── public/
│   └── images/          # All site images
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── [shared components]
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── [other pages]
│   ├── styles/
│   │   ├── index.css    # Global styles + CSS variables
│   │   └── [page].css   # Per-page styles
│   ├── App.jsx          # Router + layout
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
└── PRD.md
```

### Final Deliverable (Static HTML)

```
dist/
├── components/
│   ├── header.html      # Shared header (injected via JS)
│   └── footer.html      # Shared footer (injected via JS)
├── css/
│   ├── styles.css       # All styles combined + minified
│   └── [page].css       # Page-specific styles (optional)
├── js/
│   ├── main.js          # Component loader + shared logic
│   └── [page].js        # Page-specific scripts
├── images/
│   └── [all images]
├── index.html
├── [other-pages].html
└── 404.html
```

### Header/Footer Injection Pattern

Each HTML page includes this at the top of `<body>`:

```html
<div id="header-placeholder"></div>
<!-- page content -->
<div id="footer-placeholder"></div>
<script src="js/main.js"></script>
```

And `main.js` loads them:

```javascript
async function loadComponent(id, file) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
}
loadComponent('header-placeholder', 'components/header.html');
loadComponent('footer-placeholder', 'components/footer.html');
```

## Important Notes

- **Always use real content** from the planning/scraping. Never use Lorem Ipsum or placeholder text.
- **Images**: If the user hasn't provided images yet, use descriptive `alt` text and a placeholder background color. Do NOT use placeholder image services.
- **Language**: Match the language of the planning document. Most projects will be in **Spanish**.
- **Accessibility**: Ensure WCAG 2.1 AA compliance (alt texts, ARIA labels, keyboard nav, contrast ratios).
- **SEO**: Every page must have unique `<title>`, `<meta description>`, and proper heading hierarchy.

## Resources

- [PRD Template Structure](resources/create-prd-template.md)
- [HTML Conversion Checklist](resources/html-conversion-checklist.md)
