# 📋 PRD – Nueva Web de INTEGRA-T

> **Versión:** 1.0  
> **Fecha:** 22 de febrero de 2026  
> **Autor:** Equipo de Desarrollo  
> **Estado:** Borrador inicial  

---

## 1. Resumen Ejecutivo

**INTEGRA-T** es una asociación sin ánimo de lucro ubicada en Elche, dedicada a la atención, orientación y acompañamiento de personas con discapacidad intelectual (diversidad funcional) y sus familias. Su objetivo es mejorar la calidad de vida de sus usuarios y lograr una integración social completa.

Actualmente, la presencia web de INTEGRA-T se basa en un blog de Blogger (`integratdiscapacidad.blogspot.com`) que, aunque funcional, no refleja la profesionalidad, el impacto emocional ni la solidez institucional que la asociación merece. La web actual presenta limitaciones en diseño, navegación, experiencia de usuario y capacidad de generar confianza en familias y colaboradores potenciales.

**El objetivo del MVP** es crear una web moderna, profesional y emocionalmente conectada que cumpla cuatro funciones fundamentales:
- 🧡 **Generar confianza** en familias que buscan apoyo para sus hijos/as
- 🏛️ **Mostrar profesionalidad institucional** ante entidades públicas y privadas
- 🧑‍🤝‍🧑 **Reflejar el lado humano y comunitario** de la asociación
- 🛍️ **Permitir pedidos de productos solidarios** (cerámica artesanal)

---

## 2. Misión

### Declaración de misión del producto
Crear una presencia digital que represente fielmente los valores de INTEGRA-T: inclusión, transparencia, cercanía y profesionalidad. La web será la puerta de entrada para familias, instituciones, voluntarios y la comunidad en general.

### Principios fundamentales

1. **Humanidad ante todo** – Las personas son el centro del diseño. Fotografías reales, testimonios y lenguaje cercano.
2. **Confianza institucional** – Transparencia total con documentos accesibles (memorias, cuentas, estatutos).
3. **Accesibilidad universal** – Cumplimiento de estándares WCAG 2.1 AA. Navegación intuitiva para todos los públicos.
4. **Comunicación cálida** – Tono que transmite "acompañamos", "trabajamos juntos", "creemos en ti", nunca lenguaje clínico.
5. **Simplicidad visual** – Diseño limpio, no saturado, con jerarquía visual clara.

---

## 3. Usuarios Objetivo

### Persona 1: Familia buscadora
- **Nombre:** María, 45 años
- **Contexto:** Madre de un joven con discapacidad intelectual en Elche
- **Necesidad:** Encontrar una asociación de confianza que ofrezca talleres, acompañamiento y comunidad
- **Nivel técnico:** Medio (usa WhatsApp, Facebook, Google)
- **Pain points:** No saber si el centro es profesional, no ver quién trabaja allí, no entender qué programas hay
- **Lo que busca en la web:** Fotos reales, información clara de programas, ver al equipo, contactar fácilmente

### Persona 2: Representante institucional
- **Nombre:** Carlos, 50 años
- **Contexto:** Técnico de una concejalía de Servicios Sociales
- **Necesidad:** Verificar que INTEGRA-T es una entidad seria y transparente para posibles convenios
- **Nivel técnico:** Medio-alto
- **Pain points:** Webs de asociaciones con aspecto amateur, falta de documentación pública
- **Lo que busca en la web:** Transparencia, estatutos, memorias, equipo directivo, programas con detalle

### Persona 3: Voluntario / Colaborador potencial
- **Nombre:** Laura, 28 años
- **Contexto:** Estudiante de trabajo social o persona sensibilizada con la inclusión
- **Necesidad:** Conocer la asociación y saber cómo colaborar
- **Nivel técnico:** Alto
- **Pain points:** No encontrar formas claras de colaborar, webs desactualizadas
- **Lo que busca en la web:** Quiénes son, cómo ayudar, Teaming, redes sociales

### Persona 4: Comprador solidario
- **Nombre:** Ana, 35 años
- **Contexto:** Busca detalles artesanales para un evento (boda, comunión)
- **Necesidad:** Ver productos de cerámica y hacer un pedido
- **Nivel técnico:** Medio-alto
- **Pain points:** No encontrar catálogo claro, no saber cómo pedir
- **Lo que busca en la web:** Fotos de productos, precios, formulario de pedido

---

## 4. Alcance del MVP

### ✅ En Alcance (MVP)

**Funcionalidad Core:**
- ✅ Página de Inicio con hero emocional, resumen de actividad, productos y CTA
- ✅ Página "Quiénes Somos" (historia, misión, visión, valores)
- ✅ Página "Programas" con estructura detallada por programa
- ✅ Página "Instalaciones" con galería visual
- ✅ Página "Junta Directiva y Equipo Técnico"
- ✅ Página "Productos Solidarios" con galería y formulario de pedido
- ✅ Página "Blog" con listado de artículos (migración desde Blogger)
- ✅ Página "Colaboradores" con logos por categorría
- ✅ Página "Transparencia" con documentos descargables
- ✅ Página "Contacto" con info completa, mapa y redes sociales

**Técnico:**
- ✅ Diseño responsive (mobile-first)
- ✅ Accesibilidad WCAG 2.1 nivel AA
- ✅ SEO optimizado (meta tags, Open Graph, sitemap)
- ✅ Rendimiento optimizado (Lighthouse > 90)
- ✅ Navegación intuitiva con menú hamburguesa en móvil
- ✅ Formulario de contacto funcional
- ✅ Formulario de pedido de productos solidarios
- ✅ Integración con Google Maps
- ✅ Enlaces a redes sociales (Facebook, Instagram, YouTube, Teaming)

**Despliegue:**
- ✅ Hosting con dominio propio (a definir)
- ✅ Certificado SSL
- ✅ Despliegue en cualquier hosting estático (GitHub Pages, Netlify, Vercel, o hosting compartido)

### ❌ Fuera de Alcance (MVP)

- ❌ Sistema de gestión de contenidos (CMS) con panel de administración
- ❌ Tienda online con pasarela de pago (los pedidos se gestionan por formulario)
- ❌ Área privada para familias/usuarios
- ❌ Sistema de donaciones integrado (se usa Teaming externo)
- ❌ Newsletter automatizado
- ❌ Chat en vivo
- ❌ Multiidioma (solo español en MVP)
- ❌ Calendario de eventos interactivo
- ❌ Portal de voluntariado con registro

---

## 5. Historias de Usuario

### Historias principales

1. **Como familiar de una persona con discapacidad**, quiero ver fotos reales del centro y del equipo, **para sentir confianza** antes de contactar.

2. **Como madre que busca un centro para su hijo/a**, quiero entender en menos de 20 segundos qué es INTEGRA-T y qué ofrece, **para decidir rápidamente si es lo que necesito**.

3. **Como representante de una institución pública**, quiero acceder a memorias, estatutos y cuentas anuales desde la web, **para evaluar la transparencia y seriedad de la asociación** antes de proponer un convenio.

4. **Como persona interesada en colaborar**, quiero ver claramente las formas de colaboración (voluntariado, donaciones, Teaming), **para elegir la opción que más me convenga**.

5. **Como organizadora de un evento**, quiero ver un catálogo de productos artesanales con fotos claras y hacer un pedido fácil, **para comprar detalles solidarios para mi evento**.

6. **Como visitante de la web**, quiero navegar de forma fluida y sin confusión entre las secciones, **para encontrar la información que busco sin frustración**.

7. **Como familiar de un usuario actual**, quiero leer noticias y actividades recientes en el blog, **para estar al tanto de lo que hace mi hijo/a en el centro**.

8. **Como persona con poca experiencia tecnológica**, quiero poder contactar con la asociación de forma directa (teléfono, email, formulario), **para resolver mis dudas sin complicaciones**.

---

## 6. Arquitectura Core y Patrones

### Enfoque: React + Vite (desarrollo) → HTML estático (entrega final)

Se desarrolla en **React + Vite** para aprovechar la velocidad de desarrollo, componentización y hot reload. Una vez terminada y validada, se **convierte a HTML estático puro** con header y footer como archivos separados para el entregable final.

**¿Por qué este enfoque?**
- ✅ **Desarrollo rápido** – React permite componentizar, iterar y reutilizar código
- ✅ **Entrega simple** – El resultado final es HTML/CSS/JS puro, sin dependencias
- ✅ **Hosting barato** – El entregable HTML se aloja en cualquier servidor
- ✅ **Mantenimiento sencillo** – El equipo de INTEGRA-T puede editar HTML directamente
- ✅ **SEO nativo** – El HTML final es multi-página, indexable directamente

### Arquitectura de desarrollo (React + Vite)

```
integrat-web/
├── public/
│   ├── images/              # Imágenes optimizadas del centro, equipo, productos
│   │   ├── hero/            # Imágenes hero de cada sección
│   │   ├── team/            # Fotos del equipo
│   │   ├── facilities/      # Fotos instalaciones (18 fotos)
│   │   ├── products/        # Catálogo productos solidarios (9 fotos)
│   │   ├── programs/        # Imágenes de programas/talleres
│   │   ├── collaborators/   # Logos colaboradores (26 logos)
│   │   └── blog/            # Imágenes del blog
│   ├── documents/           # PDFs descargables (memorias, estatutos, etc.)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx         # Navbar con menú responsive
│   │   │   ├── Footer.jsx         # Footer con contacto y redes
│   │   │   └── Layout.jsx         # Wrapper con Header + Footer
│   │   ├── ui/
│   │   │   ├── Button.jsx         # Botones reutilizables
│   │   │   ├── Card.jsx           # Cards para programas, equipo, etc.
│   │   │   ├── SectionTitle.jsx   # Títulos de sección consistentes
│   │   │   ├── ImageGallery.jsx   # Galería de imágenes con lightbox
│   │   │   ├── TeamMember.jsx     # Tarjeta de miembro del equipo
│   │   │   ├── ProductCard.jsx    # Tarjeta de producto solidario
│   │   │   ├── DocumentCard.jsx   # Tarjeta de documento descargable
│   │   │   ├── CollaboratorLogo.jsx
│   │   │   └── BlogPostCard.jsx   # Tarjeta de entrada de blog
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── AboutPreview.jsx
│   │       ├── ProgramsPreview.jsx
│   │       ├── ProductsPreview.jsx
│   │       ├── CollaborateSection.jsx
│   │       └── ContactBanner.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx              # Quiénes Somos
│   │   ├── Programs.jsx
│   │   ├── Facilities.jsx         # Instalaciones
│   │   ├── Team.jsx               # Junta Directiva y Equipo
│   │   ├── Products.jsx           # Productos Solidarios
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx           # Detalle de un artículo
│   │   ├── Collaborators.jsx
│   │   ├── Transparency.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── programs.js            # Datos estructurados de programas
│   │   ├── team.js                # Datos del equipo
│   │   ├── products.js            # Catálogo de productos
│   │   ├── collaborators.js       # Colaboradores con logos
│   │   ├── documents.js           # Lista de documentos de transparencia
│   │   └── blogPosts.js           # Entradas de blog (migradas)
│   ├── styles/
│   │   ├── index.css              # Variables globales, reset, tokens
│   │   ├── components/            # Estilos por componente
│   │   └── pages/                 # Estilos por página
│   ├── utils/
│   │   └── seo.js                 # Helpers para meta tags dinámicos
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Estructura del entregable final (HTML estático)

Tras la conversión (Fase 5), el resultado será:

```
integrat-final/
├── index.html                    # Página de Inicio
├── quienes-somos.html            # Quiénes Somos
├── programas.html                # Programas
├── instalaciones.html            # Instalaciones
├── equipo.html                   # Junta Directiva y Equipo
├── productos.html                # Productos Solidarios
├── blog.html                     # Blog (listado)
├── blog/                         # Entradas individuales del blog
│   └── entrada-X.html
├── colaboradores.html            # Colaboradores
├── transparencia.html            # Transparencia
├── contacto.html                 # Contacto
├── components/
│   ├── header.html               # Header/Navbar (separado)
│   └── footer.html               # Footer (separado)
├── css/                          # Estilos organizados
├── js/
│   ├── includes.js               # Inyecta header.html y footer.html
│   ├── menu.js                   # Menú hamburguesa
│   ├── gallery.js                # Lightbox
│   ├── forms.js                  # Formularios
│   └── animations.js             # Animaciones al scroll
├── images/                       # Todas las imágenes
├── documents/                    # PDFs descargables
├── robots.txt
├── sitemap.xml
└── README.md
```

### Patrones de diseño clave

- **Component-based (React)** – Componentes atómicos reutilizables durante desarrollo
- **Data-driven rendering** – Datos centralizados en `/data/` para facilitar actualización
- **Mobile-first responsive** – Diseño que prioriza la experiencia móvil
- **Progressive enhancement** – Funcionalidad base sin JS, enriquecida progresivamente
- **CSS Vanilla** – Sin Tailwind ni CSS-in-JS; máximo control con custom properties
- **Conversión a HTML** – El código React se traduce a HTML estático multi-página al final

---

## 7. Funcionalidades / Features

### 7.1 Página de Inicio (Home)

| Bloque | Contenido | Notas |
|--------|-----------|-------|
| **Hero** | Imagen real del centro (exteriores/jardines), frase emotiva "Construyendo inclusión cada día en Elche", botones "Conócenos" + "Contactar" | Imagen de gran impacto, real, no stock |
| **Qué es Integrat** | Texto breve (6-8 líneas máx.) explicando la esencia | Que se entienda en 20 segundos |
| **Qué hacemos** | 3 columnas: Talleres ocupacionales, Atención y acompañamiento, Actividades comunitarias | Con iconos o fotos |
| **Productos solidarios** | Foto cerámica (Damas de Elche) + texto breve + botón "Haz tu pedido" | Enlace a página completa |
| **Colabora con nosotros** | Donaciones (Teaming), Entidades, Voluntariado | CTA visible y claro |
| **Blog / Últimas noticias** | 3 últimas entradas del blog con imagen + título + extracto | Enlace a página de blog |

### 7.2 Quiénes Somos

Contenido real extraído del blog:
> "Integra-t es una **Asociación sin ánimo de lucro** dirigida a prestar atención, información, orientación y asesoramiento a personas con diversidad funcional intelectual y sus familias. Se crea en **Marzo del año 2003**."

> "Los **fines y objetivos principales** de la Asociación son informar, apoyar, orientar y crear los recursos necesarios para las personas con diversidad funcional intelectual y sus familias, que den respuesta a sus necesidades para lograr una plena integración social e inclusión laboral y mejorar su desarrollo y calidad de vida, sensibilizando a la administración y a la sociedad en general a través de programas y actividades."

> "Integra-t es un recurso de ámbito privado dirigido a personas mayores de 18 años, con diversidad funcional intelectual reconocida, autonomía suficiente en el área básica de actividades básicas de la vida diaria (alimentación, vestido, aseo), que requieran recursos y estrategias para realizar dichas actividades."

**¿Qué nos caracteriza?** Ilusión · Trayectoria · Constancia · Profesionalidad · Diversidad de talleres · Amplios espacios verdes

Estructura de la página:
- Historia de la asociación (fundada en marzo 2003)
- Misión, Visión, Valores (secciones separadas, no un bloque)
- Qué nos caracteriza (6 puntos clave)
- Compromiso social
- Estilo: emocional pero profesional

### 7.3 Programas

Estructura por programa (3 bloques principales + sub-programas):

**Programa 1 – Atención e Intervención Psicosocial y Educativa**
- 1.1 Habilidades Instrumentales
- 1.2 Radio, Prensa y Comunicación
- 1.3 Artesanía, Cerámica y Abalorios
- 1.4 Teatro y Expresión Corporal
- 1.5 Cultura General
- 1.6 Jardinería

**Programa 2 – Promoción de la Autonomía Personal**
- 2.1 Habilidades de la Vida Diaria
- 2.2 Habilidades Sociales, Cognitivas y de Afrontamiento
- 2.3 Gestión de Emociones
- 2.4 Juegos Psicoeducativos

**Programa 3 – Formación y Orientación Laboral**
- 3.1 Inglés
- 3.2 Informática
- 3.3 Formación y Orientación Laboral
- 3.4 Habilidades Socioprofesionales

**Programa 4 – Empleo con Apoyo e Inserción Laboral**

**Programa 5 – Itinerarios Integrados para la Inserción Sociolaboral**

**Programa 6 – Deporte Adaptado y Natación**

**Programa 7 – Información, Sensibilización Social y Publicidad**

**Programa 8 – Convivencia, Ocio y Tiempo Libre**

**Programa 9 – Voluntariado Social**

**Programa 10 – Programa para Familiares y/o Tutores Legales**

Cada programa: Nombre, Objetivo, Público, Qué se trabaja, Beneficios.

### 7.4 Instalaciones

- Galería fotográfica interactiva (lightbox) — **18 fotos reales** disponibles del blog
- Espacios diferenciados (según web actual):
  - **Infraestructuras** (vista general del centro)
  - **Aulas** (espacios de formación y talleres)
  - **Sala de recepción y reuniones**
  - **Despachos** (atención profesional)
  - **Jardines y espacios exteriores** (amplios, uno de sus puntos fuertes)
- Breve descripción de cada espacio

### 7.5 Junta Directiva y Equipo Técnico

Contenido actual del blog:
> "Este es el organigrama de la **junta directiva**, cuyas facultades son ostentar y ejercitar la representación de la Asociación, llevando a término la dirección y la administración cumpliendo las decisiones tomadas por la asamblea general."
> "Actualmente, el **equipo técnico** está formado por un gran equipo de profesionales cualificados en el ámbito de la diversidad funcional y con muchos años de experiencia en este sector."

Recursos disponibles: 2 imágenes (foto de equipo + organigrama de la junta)

Personal identificado (de la página de Horarios):
- **Presidenta:** Mª Carmen Muñoz
- **Psicóloga:** Cristina Rodríguez
- **Trabajadora Social:** Nuria Gómez

- **Bloque 1 – Junta Directiva:** Nombre + Cargo (organigrama visual)
- **Bloque 2 – Equipo Técnico:** Foto + Nombre + Rol + Formación breve
- Layout: grid de tarjetas

### 7.6 Productos Solidarios

Contenido actual del blog:
> "¿Tienes un evento próximamente? ¿Te gustaría hacer un detalle solidario, original y artesanal? Echa un vistazo a todos los artículos de cerámica y abalorios que realizamos en Integra-T. Desde Damas de Elche en todos sus tamaños hasta llaveros, pulseras o imanes y muchos más artículos. ¡Puedes preguntar y consultarnos precios, formas y colores sin compromiso! Totalmente artesanales y originales para todo tipo de eventos: bodas, comuniones, bautizos, fiestas, eventos deportivos, culturales, etc."

Recursos disponibles: **9 fotos** de productos (cerámica, Damas de Elche, abalorios)

- Explicación del proyecto (impacto social de la compra)
- Galería de productos con fotos
- Tipos de productos: Damas de Elche, llaveros, pulseras, imanes
- Tipos de eventos: bodas, comuniones, bautizos, fiestas, eventos deportivos/culturales
- Cómo hacer pedido (consultar precios, formas y colores sin compromiso)
- Formulario de pedido: Nombre, Email, Teléfono, Producto(s), Cantidad, Observaciones
- Mensaje claro: "Tu compra cambia vidas"

### 7.7 Blog

- Listado de artículos con: imagen destacada, título, extracto, fecha
- Categorías: Actividades, Eventos, Noticias, Subvenciones
- Paginación
- NO debe parecer Blogger: diseño limpio y moderno

### 7.8 Colaboradores

Contenido actual del blog:
> "Desde Integra-T realizamos programas y proyectos destinados a mejorar la calidad de vida de las personas con diversidad funcional y su familia. Para poder llevar a cabo estas actividades es imprescindible contar con la colaboración de organismos públicos y entidades privadas que nos permiten seguir avanzando. Gracias por contribuir en nuestro crecimiento."

Recursos disponibles: **26 logos** de colaboradores

- Separados por **5 categorías** (según blog actual):
  1. **Organismos públicos** (Conselleria, Diputación de Alicante, Ayuntamiento...)
  2. **Entidades privadas** (Pikolinos, Fundación La Caixa, Espais Verds d'Elx...)
  3. **Entidades académicas** (UA, UMH, CEU, UPV, Universidad de Murcia, IES La Asunción, IES La Torreta, La Devesa, Monserrat Roig...)
  4. **Voluntariado**
  5. **Particulares**
- Grid de logos
- Genera credibilidad institucional

### 7.9 Transparencia

- Documentos descargables en formato limpio:
  - ✅ Memoria 2025
  - ✅ Estatutos Integra-T
  - ✅ Plan de Voluntariado
  - ✅ Plan de Igualdad
  - ✅ Reglamento de Régimen Interno
  - ✅ Cuentas Anuales 2024
- Iconos de descarga + nombre claro
- Links a Google Drive o descarga directa

### 7.10 Contacto

Datos reales extraídos del blog:
- **Teléfono fijo:** 965 45 12 15
- **Móvil:** 650 393 901
- **Email:** integratintegrat@hotmail.com
- **Dirección:** C/ Teulada, 3, 03203 Elx - Elche
- **Horario de actividades:** Lunes a Viernes de 9:00h a 13:00h y de 16:00h a 18:30h
- **Horario de atención profesional:**
  - Presidenta (Mª Carmen Muñoz): L-V 9:30h-13:00h
  - Psicóloga (Cristina Rodríguez): L-V 9:00h-13:00h
  - Trabajadora Social (Nuria Gómez): L-V 9:00h-13:00h

Componentes de la página:
- Datos de contacto completos
- Mapa de Google Maps embebido (C/ Teulada, 3, Elche)
- Redes sociales: Facebook, Instagram, YouTube
- Botón directo a Teaming
- Formulario de contacto: Nombre, Email, Asunto, Mensaje

---

## 8. Stack Tecnológico

### Fase de desarrollo (React)
| Tecnología | Versión | Justificación |
|------------|---------|---------------|
| **React** | 18.x | Componentes reutilizables, ecosistema maduro, desarrollo rápido |
| **Vite** | 5.x | Build ultra-rápido, HMR, optimización |
| **React Router** | 6.x | Navegación SPA con rutas limpias |
| **CSS Vanilla** | — | Máximo control, sin dependencias externas, mantenible |

### Dependencias de desarrollo
| Paquete | Uso |
|---------|-----|
| `react-router-dom` | Enrutamiento |
| `react-helmet-async` | SEO / meta tags dinámicos |
| `framer-motion` | Micro-animaciones y transiciones |
| `react-intersection-observer` | Animaciones al scroll (lazy reveal) |
| `lucide-react` | Iconos limpios y accesibles |

### Dependencias opcionales
| Paquete | Uso |
|---------|-----|
| `yet-another-react-lightbox` | Galería de imágenes fullscreen |
| `react-leaflet` | Mapa alternativo a Google Maps (gratuito) |
| `@emailjs/browser` | Envío de formularios sin backend |

### Entregable final (HTML estático) – sin dependencias
El resultado final tras la conversión (Fase 5) será HTML puro:
- **Cero `node_modules`**, cero build step
- Las animaciones se reimplementan con `IntersectionObserver` nativo
- El lightbox se reimplementa en JS vanilla
- Iconos como SVGs inline
- Google Fonts vía CDN
- Formularios vía Formspree o EmailJS (CDN)

### Integraciones externas
- **Google Maps Embed API** – Mapa de ubicación (iframe, sin API key)
- **EmailJS / Formspree** – Envío de formularios sin backend
- **Teaming** – Link directo a página de donación
- **Google Drive** – Documentos de transparencia
- **Redes Sociales** – Facebook, Instagram, YouTube (links)
- **Google Fonts** – Tipografía Inter (CDN)

---

## 9. Seguridad y Configuración

### Seguridad
- **SSL/TLS** obligatorio (HTTPS)
- **Formularios** con validación client-side + honeypot anti-spam
- **CSP headers** configurados correctamente
- **Sin datos sensibles** en el frontend (no hay autenticación)
- Envío de formularios mediante servicio de terceros (EmailJS) o endpoint serverless

### Configuración (fase React)
```env
# .env
VITE_GOOGLE_MAPS_API_KEY=xxx          # API key para Google Maps embed
VITE_EMAILJS_SERVICE_ID=xxx           # EmailJS service ID
VITE_EMAILJS_TEMPLATE_ID=xxx          # EmailJS template ID
VITE_EMAILJS_PUBLIC_KEY=xxx           # EmailJS public key
VITE_SITE_URL=https://integrat.org    # URL del sitio (a definir)
```

### Configuración (entregable HTML final)
En el HTML estático, las claves se embeben directamente (son públicas):
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>emailjs.init('PUBLIC_KEY');</script>
```

### Despliegue
- **Desarrollo:** Vercel/Netlify (deploy automático del build React)
- **Producción final:** Cualquier hosting estático (GitHub Pages, hosting compartido, FTP)
- **Dominio:** A definir (sugerencia: `integrat.org` o `asociacionintegrat.es`)
- **CI/CD:** Deploy automático desde rama `main` en GitHub

### Fuera de alcance de seguridad
- ❌ Autenticación de usuarios
- ❌ Base de datos
- ❌ Procesamiento de pagos
- ❌ Datos médicos o personales sensibles

---

## 10. Especificación de Formularios

### 10.1 Formulario de Contacto

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| Nombre | text | ✅ | Min 2 caracteres |
| Email | email | ✅ | Formato email válido |
| Teléfono | tel | ❌ | Formato teléfono español |
| Asunto | select | ✅ | Opciones predefinidas |
| Mensaje | textarea | ✅ | Min 10 caracteres |
| Honeypot | hidden | — | Anti-spam (debe estar vacío) |

**Asuntos predefinidos:**
- Información general
- Inscripción / Nuevo usuario
- Voluntariado
- Colaboración empresarial
- Productos solidarios
- Otros

### 10.2 Formulario de Pedido de Productos

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| Nombre | text | ✅ | Min 2 caracteres |
| Email | email | ✅ | Formato email válido |
| Teléfono | tel | ✅ | Formato teléfono español |
| Producto(s) | checkbox group | ✅ | Al menos 1 seleccionado |
| Cantidad | number | ✅ | Min 1 |
| Fecha evento | date | ❌ | Fecha futura |
| Observaciones | textarea | ❌ | Max 500 caracteres |

---

## 11. Criterios de Éxito

### Definición de éxito del MVP
La web se considerará exitosa cuando una familia que busca un centro para su hijo/a pueda, en menos de 3 minutos, **entender qué es INTEGRA-T, sentir confianza, y contactar o solicitar información**.

### Requisitos funcionales
- ✅ Todas las 10 páginas implementadas con contenido real
- ✅ Navegación fluida entre todas las secciones
- ✅ Formularios de contacto y pedido funcionales
- ✅ Documentos de transparencia descargables
- ✅ Blog con al menos 5 entradas migradas
- ✅ Responsive correcto en móvil, tablet y desktop
- ✅ Carga inicial < 3 segundos en 3G

### Indicadores de calidad
- ✅ Lighthouse Performance > 90
- ✅ Lighthouse Accessibility > 95
- ✅ Lighthouse SEO > 95
- ✅ Sin errores de consola
- ✅ Validación HTML W3C sin errores
- ✅ Contraste de colores WCAG AA

### Objetivos de experiencia de usuario
- ✅ Un visitante entiende qué es INTEGRA-T en < 20 segundos
- ✅ Encontrar el teléfono de contacto en < 2 clics
- ✅ El tono de comunicación transmite cercanía, no frialdad clínica
- ✅ Las fotos reales generan conexión emocional
- ✅ La sección de transparencia es accesible e intuitiva

---

## 12. Fases de Implementación

### 🔵 Fase 1 – Estructura y diseño base en React (Semana 1)
**Objetivo:** Crear la estructura del proyecto React, el sistema de diseño y las páginas principales.

- ✅ Inicializar proyecto Vite + React
- ✅ Definir sistema de diseño (colores, tipografía, espaciado) en CSS
- ✅ Crear componentes de layout: `Header.jsx`, `Footer.jsx`, `Layout.jsx`
- ✅ Crear componentes UI base: `Button`, `Card`, `SectionTitle`
- ✅ Implementar navegación con React Router (10 rutas)
- ✅ Diseñar e implementar página de Inicio completa (6 bloques)
- ✅ Responsive del Header y Footer

**Entregable:** La web navega correctamente entre páginas, la Home se ve profesional y emocional.

### 🟢 Fase 2 – Páginas de contenido (Semana 2)
**Objetivo:** Implementar todas las páginas internas con contenido real.

- ✅ Página "Quiénes Somos" con secciones separadas
- ✅ Página "Programas" con los 10 programas y sub-programas
- ✅ Página "Instalaciones" con galería de 18 fotos y lightbox
- ✅ Página "Junta Directiva y Equipo" con tarjetas
- ✅ Página "Productos Solidarios" con galería de 9 productos y formulario
- ✅ Página "Blog" con listado y detalle
- ✅ Página "Colaboradores" con 26 logos en 5 categorías
- ✅ Página "Transparencia" con 6 documentos descargables
- ✅ Página "Contacto" con mapa, formulario y datos completos

**Entregable:** Todo el contenido está integrado, formularios envían correctamente, imágenes son reales.

### 🟡 Fase 3 – Pulido y optimización (Semana 3)
**Objetivo:** Optimización, accesibilidad, SEO y detalles finales.

- ✅ Micro-animaciones con Framer Motion (scroll reveals, hover effects)
- ✅ Optimización de imágenes (WebP, lazy loading, srcset)
- ✅ SEO completo: meta tags, Open Graph, sitemap.xml, robots.txt
- ✅ Accesibilidad: aria-labels, foco visible, navegación por teclado
- ✅ Testing cross-browser (Chrome, Firefox, Safari, Edge)
- ✅ Lighthouse audit y correcciones (objetivo > 90 en todo)
- ✅ Revisión de coherencia visual entre todas las páginas

**Entregable:** Lighthouse > 90. Navegación accesible por teclado. SEO correcto.

### 🔴 Fase 4 – Deploy temporal y validación (Semana 4)
**Objetivo:** Poner la versión React en un entorno accesible para revisión.

- ✅ Deploy en Vercel/Netlify (versión React)
- ✅ Testing final completo (todas las páginas, formularios, descargas)
- ✅ Revisión con el equipo de INTEGRA-T
- ✅ Ajustes finales según feedback

**Entregable:** Versión React validada y aprobada por el equipo.

### 🟣 Fase 5 – Conversión a HTML estático (Semana 5)
**Objetivo:** Convertir toda la web React a HTML/CSS/JS puro con header y footer separados.

- ✅ Extraer el HTML renderizado de cada página React → archivos `.html` individuales
- ✅ Separar `Header.jsx` → `components/header.html`
- ✅ Separar `Footer.jsx` → `components/footer.html`
- ✅ Crear `js/includes.js` para inyectar header y footer en cada página
- ✅ Convertir estilos React → archivos CSS organizados (variables, reset, global, por página)
- ✅ Reimplementar animaciones con `IntersectionObserver` nativo (sin Framer Motion)
- ✅ Reimplementar lightbox en JS vanilla (sin dependencias)
- ✅ Reimplementar menú hamburguesa en JS vanilla
- ✅ Reimplementar formularios con validación HTML5 + JS vanilla
- ✅ Verificar que todo funciona sin node_modules ni build step
- ✅ Crear `sitemap.xml` y `robots.txt` estáticos
- ✅ Configurar dominio definitivo y DNS
- ✅ Subir a hosting final (GitHub Pages, hosting compartido, o FTP)
- ✅ Configurar SSL
- ✅ Redirecciones desde el antiguo blog (si se mantiene)
- ✅ Testing final en producción
- ✅ Entrega al equipo de INTEGRA-T + guía básica de cómo editar textos en HTML

**Entregable:** Web estática final en producción, sin dependencias, con header/footer separados. Documentación para edición básica de contenido.

---

## 13. Consideraciones Futuras (Post-MVP)

### Mejoras a corto plazo
- 📧 Newsletter con integración a Mailchimp/Brevo
- 📅 Calendario interactivo de eventos y actividades
- 🌐 Versión en valenciano (bilingüe)
- 📸 Galería de fotos general con categorías

### Mejoras a medio plazo
- 🛒 Tienda online con pasarela de pago (Stripe/PayPal) para productos solidarios
- 👤 Área privada para familias (seguimiento, comunicaciones)
- 🤝 Portal de voluntariado con formulario de registro y gestión
- 📊 Dashboard de transparencia con gráficos interactivos

### Mejoras a largo plazo
- 📱 App móvil (PWA) para familias y equipo
- 🤖 Chatbot de atención básica
- 🎥 Streaming de eventos
- 💬 Sistema de testimonios verificados

---

## 14. Riesgos y Mitigaciones

| # | Riesgo | Probabilidad | Impacto | Mitigación |
|---|--------|-------------|---------|------------|
| 1 | **Falta de fotografías reales de calidad** | Alta | Alto | Solicitar al equipo de INTEGRA-T una sesión de fotos. Proporcionar guía de qué fotografiar. Mientras tanto, usar imágenes placeholder profesionales. |
| 2 | **Contenido no adaptado a formato web** | Media | Medio | El contenido de Notion debe editarse y adaptarse, no copiar/pegar. Crear guía de tono y longitud máxima por sección. |
| 3 | **Formularios sin backend** | Baja | Medio | Usar EmailJS o Formspree como solución serverless. Testear exhaustivamente el envío. Tener email de respaldo. |
| 4 | **Dominio no disponible o no configurado** | Media | Bajo | Preparar el deploy con dominio temporal de Vercel/Netlify. Configurar dominio definitivo cuando esté disponible. |
| 5 | **Accesibilidad insuficiente** | Media | Alto | Usar herramientas de audit (axe, Lighthouse) desde el inicio. Testear con lectores de pantalla. Involucrar a usuarios reales del centro en pruebas. |

---

## 15. Apéndice

### A. Paleta de colores

| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| **Principal** | Azul | `#1E5FA6` | Fondos principales, headers, textos destacados |
| **Secundario** | Azul claro | `#4A90D9` | Hover states, elementos secundarios |
| **Acción / CTA** | Amarillo | `#F5B731` | Botones de acción, highlights |
| **Acento** | Rojo cálido | `#E8534A` | Alertas, acentos puntuales (nunca saturar) |
| **Fondo** | Blanco cálido | `#FAFAF8` | Fondo general |
| **Texto** | Gris oscuro | `#2D2D2D` | Cuerpo de texto |
| **Texto secundario** | Gris medio | `#6B7280` | Subtítulos, texto auxiliar |

### B. Tipografía

| Uso | Fuente | Peso | Tamaño (desktop) |
|-----|--------|------|-------------------|
| Títulos H1 | Inter | 700 (Bold) | 48px |
| Títulos H2 | Inter | 600 (SemiBold) | 36px |
| Títulos H3 | Inter | 600 (SemiBold) | 24px |
| Cuerpo | Inter | 400 (Regular) | 16px |
| Cuerpo pequeño | Inter | 400 (Regular) | 14px |
| Botones | Inter | 600 (SemiBold) | 16px |

### C. Tono de comunicación

| ❌ Evitar | ✅ Usar |
|-----------|---------|
| "Centro especializado en discapacidad intelectual" | "Acompañamos a personas con diversidad funcional" |
| "Nuestros pacientes" | "Nuestros usuarios / Nuestras personas" |
| "Tratamos..." | "Trabajamos juntos..." |
| "Somos una entidad que..." | "Creemos en la inclusión..." |
| "Se estudian los casos" | "Conocemos a cada persona" |

### D. Redes sociales y contacto actual

| Canal | URL |
|-------|-----|
| Email | integratintegrat@hotmail.com |
| Facebook | https://es-es.facebook.com/asociacionintegrat |
| YouTube | https://www.youtube.com/user/videosIntegrat |
| Instagram | https://www.instagram.com/asociacionintegrat/ |
| Teaming | https://www.teaming.net/asociacionintegra-t |
| Blog actual | https://integratdiscapacidad.blogspot.com/ |

### E. Documentos de transparencia existentes

| Documento | Enlace actual |
|-----------|---------------|
| Memoria 2025 | Google Drive |
| Estatutos Integra-T | Google Drive |
| Plan de Voluntariado | Google Drive |
| Plan de Igualdad | Google Drive |
| Reglamento de Régimen Interno | Google Drive |
| Cuentas Anuales 2024 | Google Drive |

### F. Estructura de navegación

```
🏠 Inicio
├── 👥 Quiénes Somos
├── 🎯 Programas
├── 🏢 Instalaciones
├── 👨‍💼 Junta Directiva y Equipo Técnico
├── 🛍️ Productos Solidarios
├── 📰 Blog
├── 🤝 Colaboradores
├── 📑 Transparencia
└── 📍 Contacto
```

### G. Referencia de páginas en Notion

La estructura en Notion (dentro de Clientes > INTEGRA-T) espeja el contenido del blog:

| Página Notion | ID | Corresponde a |
|---|---|---|
| INTEGRA-T (raíz) | `f21defbe-735a-8380-99b0-0170c90efa57` | Página padre |
| Blog | `168defbe-735a-8359-aad5-8172fdffbaa3` | Entradas del blog |
| Quienes somos | `168defbe-735a-8359-aad5-8172fdffbaa3` | Quiénes Somos |
| Horario | `0d0defbe-735a-8264-8448-81f2ca3efbd8` | Horarios |
| Programas | `9b3defbe-735a-824e-be4d-018dbb129610` | Programas |
| Instalaciones | `502defbe-735a-8341-a081-8186967cd8e0` | Instalaciones |
| Junta | `f8edefbe-735a-8277-8472-01175e056ae0` | Junta Directiva |
| Shop | `0c5defbe-735a-829c-b568-01da5ba99e80` | Productos Solidarios |
| Colaboradores | `b92defbe-735a-8382-8e01-01c19dbc8367` | Colaboradores |
| Transparencia | `13ddefbe-735a-82fa-89cd-81fbc2ef2ccb` | Transparencia |
| Contacto | `aacdefbe-735a-8309-8441-01533766f2ef` | Contacto |

### H. Inventario de recursos visuales del blog actual

| Página | Imágenes | Tipo |
|--------|----------|------|
| Quiénes Somos | 1 imagen | Logo/banner |
| Instalaciones | **18 fotos** | Fotos reales del centro |
| Equipo Técnico | 2 imágenes | Foto equipo + organigrama |
| Productos (Shop) | **9 fotos** | Productos de cerámica/abalorios |
| Colaboradores | **26 logos** | Logos de entidades |
| Blog posts | 1-2 por post | Fotos de actividades |
| **TOTAL** | **~56+ imágenes** | Contenido real disponible |

---

> **Próximo paso:** Revisar este PRD con el equipo de INTEGRA-T, confirmar contenidos disponibles (especialmente fotografías reales), y proceder a la Fase 1 de implementación.
