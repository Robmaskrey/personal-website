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
index.html                      page shell, fonts, title
src/content.js                  all site text
src/style.css                   colors, fonts, drafting grid, shared styles
src/App.vue                     section order
src/components/                 one component per section, plus:
  DrawnFrame.vue                a box whose edges draw themselves in on scroll
  DimensionLine.vue             a |<— label —>| line that draws outward on scroll
  ConstructionSequence.vue      the timeline that fills as you scroll
  TrackingInspector.vue         the "Inspect this page" event console
src/directives/reveal.js        v-reveal: adds .is-drawn when an element scrolls into view
src/composables/tracker.js      the local-only event tracker behind the inspector
public/                         images, resume, favicon
```

To reorder or remove a section, edit `src/App.vue`.

## Motion and the tracking inspector

- **Line drawing:** wrap anything in `<DrawnFrame>` or drop in a `<DimensionLine>` and it animates in
  when scrolled into view. Speed is `--draw-speed` in `src/style.css`.
- **Reduced motion:** visitors who have "reduce motion" turned on see every line already drawn
  and no animation.
- **Tracking inspector:** records `page_view`, `section_view`, `scroll_depth`, `cta_click`,
  `engaged_time` and `inspector_open`. Add `data-track="some_name"` to any link or button to log
  clicks on it, and `data-section="name"` to a section to log when it's viewed.
  **Nothing is sent anywhere** — events stay in the visitor's browser memory and clear on reload.

## Build and deploy

```bash
npm run build   # outputs to dist/
```

Netlify, Vercel and Cloudflare Pages can all deploy straight from a private GitHub repo for free.
Use these settings:

- Build command: `npm run build`
- Output directory: `dist`
