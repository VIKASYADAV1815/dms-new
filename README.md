## D M Systems Pvt Ltd – Homepage

This is a modern, premium homepage for **D M Systems Pvt Ltd**, India's trusted internet security service company, built with **Next.js (App Router)** and **React**.

### Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **Framer Motion** for smooth, production-grade animations

### Structure
- `app/`
  - `layout.jsx` – Root layout, global styles, font
  - `page.jsx` – Next.js entry page that renders `HomePage`
  - `HomePage.jsx` – High-level homepage composition
- `components/`
  - `HomePage/` – All homepage sections (Hero, Statistics, CTA, Features, Testimonials)
  - `shared/` – Reusable primitives (`AnimatedButton`, `Card`, `Counter`, `Logo`)

### Fonts
The entire site uses **Space Grotesk**:

```css
font-family: "Space Grotesk", "Space Grotesk Fallback", monospace;
```

The font is loaded via a Google Fonts `<link>` in `app/layout.jsx` and applied globally in `app/globals.css`.

### Running the Project
```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.
