# Vee Media — Portfolio Site

Plain HTML/CSS/JS, no build step, no framework. Open `index.html` through a local server (not `file://`, since browsers block loading local images via some paths when double-clicked directly on Windows) or deploy the folder as-is to any static host (Netlify, GitHub Pages, Vercel static, etc.).

## Structure
- `index.html` — all page markup/sections
- `css/tokens.css` — brand colors, type, spacing (edit here to retheme)
- `css/base.css` — resets, buttons, typography primitives
- `css/sections.css` — per-section styles
- `js/main.js` — renders the channel grid, work grid, niche filters, and the testimonial card-stack carousel. Channel data lives in the `CHANNELS` array at the top of this file.
- `data/channels.json` — human-readable copy of the same channel data (source of truth for editing; `main.js` has its own inline copy so the site works without a server-side fetch — if you edit one, mirror the change in the other)
- `assets/channels/` — channel avatar photos (fetched from each channel's public YouTube page)
- `assets/videos/` — thumbnail for each channel's top-performing video
- `assets/testimonials/whatsapp/` — client feedback screenshots (currently 15, numbered `1.jpeg`–`15.jpeg`)
- `assets/logo/` — `vee-media-full.png` (full lockup) and `vee-media-icon.png` (icon-only crop, used in nav/favicon)

## Updating channel data
Channel avatars, subscriber counts, and each channel's "top video" were collected live from YouTube on 2026-09-08 — they will drift over time. To refresh:
1. Re-check each channel's public page for the current subscriber count and avatar.
2. Re-check the Videos tab for the current best-performing video.
3. Update the matching entry in both `data/channels.json` and the `CHANNELS` array in `js/main.js`.
4. Re-download the avatar/thumbnail into `assets/channels/` / `assets/videos/` if they changed.

## Adding more testimonials
Drop new screenshots into `assets/testimonials/whatsapp/` as sequential numbered files and bump `TESTIMONIAL_COUNT` in `js/main.js`.

## Still open
- Google Drive testimonials folder (not yet linked) — could add a second image set the same way as the WhatsApp screenshots.
- Upwork public profile reviews — capture as screenshots and add to the testimonial rotation once the profile URL is provided.
