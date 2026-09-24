# Rebuilding the single-file HTML

Deployment requires only the already-built `index.html` one folder above.

To edit and rebuild (Node.js 22.13 or later):

1. Run `npm install` inside this source folder.
2. Edit `content.ts` for lesson content, `portal.tsx` for screens, or `styles.css` for appearance.
3. Run `npm run build`. The updated file is written to `../index.html`.

The CSS is a compiled snapshot plus editable overrides. New plain CSS classes can be appended directly. If you add new Tailwind utility names, also add their styles yourself or set up a Tailwind build.
