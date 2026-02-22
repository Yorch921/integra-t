# HTML Static Conversion Checklist (Phase 5)

Use this checklist when converting a React + Vite project to static HTML files.

## Pre-conversion

- [ ] React app is fully functional and approved by client
- [ ] All pages render correctly at all breakpoints
- [ ] No React-specific features are used that can't be replicated in vanilla JS (e.g., complex state management)
- [ ] All images are optimized and in `public/images/`
- [ ] CSS is finalized (no more design iterations expected)

## Extraction

### Header (`components/header.html`)
- [ ] Extract the rendered HTML from `Header.jsx`
- [ ] Convert JSX to plain HTML (remove `className` → `class`, remove `{}` expressions)
- [ ] Replace React Router `<Link>` with `<a href="...">` tags
- [ ] Set correct `href` for each nav link (relative paths: `index.html`, `about.html`, etc.)
- [ ] Include active state logic via JS (add `class="active"` based on `window.location`)
- [ ] Mobile menu toggle: convert from React state to vanilla JS (`addEventListener`)
- [ ] Ensure logo image path is correct

### Footer (`components/footer.html`)
- [ ] Extract the rendered HTML from `Footer.jsx`
- [ ] Convert JSX to plain HTML
- [ ] Ensure all links are correct (social media, legal pages, contact info)
- [ ] Newsletter form: ensure action/method are set for the chosen email service

### Pages
For each page (`Home.jsx`, `About.jsx`, etc.):
- [ ] Create corresponding `.html` file
- [ ] Add proper `<!DOCTYPE html>`, `<html lang="">`, `<head>` with:
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - Unique `<title>` tag
  - Unique `<meta name="description">` tag
  - Open Graph meta tags
  - Link to CSS file(s)
  - Google Fonts `<link>` (if used)
  - Favicon
- [ ] Add `<div id="header-placeholder"></div>` at top of `<body>`
- [ ] Convert page JSX to plain HTML
- [ ] Add `<div id="footer-placeholder"></div>` at bottom
- [ ] Add `<script src="js/main.js"></script>` before `</body>`
- [ ] Add page-specific `<script>` if needed (maps, carousels, etc.)

## CSS

- [ ] Combine all CSS files into a single `styles.css` (or keep page-specific ones)
- [ ] Remove any CSS-in-JS or module references
- [ ] Convert CSS custom properties if needed
- [ ] Minify CSS for production
- [ ] Verify responsive breakpoints work

## JavaScript

### `main.js` (component loader)
- [ ] Implement `loadComponent()` for header and footer injection
- [ ] Add active nav link detection based on current URL
- [ ] Add mobile menu toggle handler
- [ ] Add scroll effects (sticky header, scroll-to-top button, etc.)
- [ ] Add smooth scroll for anchor links

### Page-specific JS
- [ ] Google Maps initialization (with API key)
- [ ] Image carousels/galleries (use lightweight library or vanilla JS)
- [ ] Form validation (client-side)
- [ ] Form submission (emailjs, formspree, or custom)
- [ ] Animations (Intersection Observer for scroll-triggered animations)

## Post-conversion Validation

- [ ] All pages load correctly when opened from file system (no CORS issues with fetch)
- [ ] Navigation between pages works
- [ ] All images display correctly
- [ ] Forms submit successfully
- [ ] Mobile responsive layout works
- [ ] Google Maps loads (if applicable)
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO, Best Practices)
- [ ] HTML validates (W3C validator)
- [ ] No console errors
- [ ] 404 page exists and works

## Delivery

- [ ] All files organized in final `dist/` structure
- [ ] README with deployment instructions
- [ ] ZIP archive for client delivery
- [ ] Document any API keys or external service configs needed

## CORS Note

The header/footer fetch injection **requires a web server** to work properly. Inform the client:
- For local testing: use `npx serve dist/` or VS Code Live Server
- For production: any standard web server (Apache, Nginx, shared hosting)
- Alternative: If CORS is an issue, provide an inline-everything version as backup
