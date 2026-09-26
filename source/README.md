# Rebuilding the single-file HTML

Deployment requires only the already-built `index.html` one folder above.

To edit and rebuild (Node.js 22.13 or later):

1. Run `npm install` inside this source folder.
2. Edit `content.ts` for lesson content, `portal.tsx` for screens, or `styles.css` for appearance.
3. Run `npm run build`. The updated file is written to `../index.html`.

The CSS is a compiled snapshot plus editable overrides. New plain CSS classes can be appended directly. If you add new Tailwind utility names, also add their styles yourself or set up a Tailwind build.

Family profiles and backup logic are in `storage.ts`; their UI is in `family.tsx`. Run `npm test` to verify migration, learner isolation, backup validation, additive restore, and failed-write safety.

Grade 3 has its own 16 lessons, evidence-answer validation, and a 20-word participation threshold. `npm test` covers the mixed-course backup and completion requirements. The backup schema remains version 1; use the current HTML to restore new lesson IDs.

Grade 4 adds 16 four-paragraph lessons, an evidence-reasoning question, and a 40-word participation threshold. Existing lesson IDs and content are unchanged. `npm test` also checks required reasoning, old-grade compatibility, and mixed-course backup restoration.

Grade 5 adds 16 source-comparison lessons, optional source notes (500 characters per source), and a 60-word report threshold. Notes are excluded from the report word count. Tests cover note-only drafts, dirty-state detection, invalid source IDs, failed writes, and mixed-course backup restoration. K–5 now has 80 unique lessons; Grades 1 and 2 share a course.


Activity suggestions are implemented in `recommendations.ts`; `npm test` checks recommendation routing as well as existing storage compatibility. Quick-start guidance and the local feedback sheet are in `quick-start.tsx` and `pilot-check.tsx`. Feedback is not sent to a server and is not part of learning backups.
