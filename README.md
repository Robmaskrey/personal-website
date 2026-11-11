# Rob Maskrey — personal website

A one-page portfolio site built with Vue 3 and Vite.

## Run it locally

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). Changes show up as you save.

## Edit the content

All of the text lives in **`src/content.js`**. Anything in `[brackets]` is a placeholder to replace.
You shouldn't need to touch the components to update copy.

- **Headshot:** put a photo in `public/` (e.g. `public/headshot.jpg`) and set `hero.photo: '/headshot.jpg'`.
- **Resume:** put your PDF at `public/resume.pdf`.
- **Colors and fonts:** change the variables at the top of `src/style.css` (`--accent` is the main color).

## Project layout

```
index.html              page shell, fonts, title
src/content.js          all site text
src/style.css           colors, fonts, shared styles
src/App.vue             section order
src/components/         one component per section
public/                 images, resume, favicon
```

To reorder or remove a section, edit `src/App.vue`.

## Build and deploy

```bash
npm run build   # outputs to dist/
```

Netlify, Vercel and Cloudflare Pages can all deploy straight from a private GitHub repo for free.
Use these settings:

- Build command: `npm run build`
- Output directory: `dist`
