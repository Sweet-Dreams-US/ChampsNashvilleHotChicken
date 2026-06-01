# Champs Chicken — Design & Architecture Notes

## Brand direction — "Nashville Hot"

A fiery, charcoal-dark hot-chicken aesthetic: brushed-signage glow, flame,
smoke, sauce drips, and kitchen-receipt motifs — built around the Champs
identity.

- **Palette** — warm charcoal blacks (`char`/`coal`/`ash`/`soot`), the Champs
  fiery red (`ember`), an ember `molten` orange, a warm gold `flare` accent,
  and warm `bone` text. Each heat level carries its own color.
- **Type** — `Anton` (billboard display), `Bricolage Grotesque` (headings/UI),
  `Hanken Grotesk` (body/tables), `Caveat` (the "This is Champs." script).
- **Signature motifs** — the heat ladder (Plain → Mild → Original → Nashville
  Hot → Reaper's Rush), the scroll-scrubbed sauce-dunk hero, the order ticket
  that travels cart → checkout → admin, a static film-grain overlay, and
  aggressive scroll + hover motion.

## Architecture decisions

| Decision | Why |
|----------|-----|
| Static SPA on GitHub Pages | No server to run or pay for; the brief calls for a Pages deploy. |
| `localStorage` as the database | Makes the storefront and admin one *connected* system without a backend — an order placed on the site is read back by the admin. |
| `HashRouter` | GitHub Pages can't rewrite deep links; hash routing is refresh-safe with zero config. |
| Hand-built SVG charts | Keeps the bundle lean and lets charts wear the exact brand palette/motion. |
| `FoodImage` with a flame fallback | The site looks intentional with or without generated photography — art is an enhancement, never a load-bearing dependency. |
| Stable heat keys, Champs display names | The internal keys (`none|mild|hot|blaze|reaper`) stay fixed so cart line IDs and admin seed data keep working; only the display names/colors are Champs-specific. |
| Composite cart `lineId` | `itemId#heat#options` — identical configs merge; re-heating a line merges into an existing match instead of duplicating. |
| 30-day admin seed window | Period-over-period analytics need two complete windows, or deltas mislead. |

## The connected seam

`CartContext` writes orders to `localStorage`; `AdminDataContext` reads them
back and folds them into the seeded order history on load. Catering requests
submitted on the storefront surface as admin Events the same way. The demo
behaves like one system because the storage layer *is* shared.

## Asset pipeline

Food photography is reused from the shared Sweet Dreams hot-chicken library
(generated in a dark brand style, compressed to ~900px JPEGs so the image-heavy
Menu page stays fast on GitHub Pages' CDN). The logo is a pure CSS/SVG
flame-badge lockup so it stays crisp at any size and the client's exact logo
art can be dropped in later.
