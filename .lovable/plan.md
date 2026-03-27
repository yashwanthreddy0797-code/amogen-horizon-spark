

## Plan: Add Equipment Images to API Manufacturing Card

### What We're Building
Convert the first sticky card ("API Manufacturing") from its current text-bullet + side-image layout to a two-column grid of equipment items with icons — matching the Analytical Capabilities card layout.

### Equipment Items (from the screenshot reference)
The card will show the manufacturing equipment as labeled icon cards in a two-column grid:

1. **Flask Culture** — lab flask/shaker image
2. **Wave Bioreactor (20L)** — wave bioreactor image
3. **Seed Bioreactor (40–50L)** — small bioreactor image
4. **Seed Bioreactor (200L)** — medium bioreactor image
5. **Production Bioreactor (1000L)** — large production bioreactor image
6. **Continuous Centrifuge** — centrifuge image
7. **Downstream Purification** — chromatography/purification image
8. **Preparative Chromatography** — chromatography column image
9. **Bulk Lyophilisation** — lyophiliser image

### Technical Steps

1. **Generate 9 equipment images** using the AI image generation API — clean, minimal line-art style icons on transparent/white backgrounds (matching the analytical instrument style already used).

2. **Save images** to `src/assets/` (e.g., `flask-culture.png`, `wave-bioreactor.png`, `seed-bioreactor.png`, `seed-bioreactor-200l.png`, `production-bioreactor.png`, `centrifuge.png`, `downstream-purification.png`, `prep-chromatography.png`, `bulk-lyophilisation.png`).

3. **Update `src/components/ResearchHighlight.tsx`**:
   - Add imports for the 9 new equipment images.
   - Change the first card's data structure: add an `instruments` array (same format as the Analytical card) and clear `details` to `[]`.
   - The existing rendering logic already handles the `instruments` property with the two-column grid layout — no template changes needed.

### Files Modified
- `src/components/ResearchHighlight.tsx` — add imports + convert card data
- `src/assets/` — 9 new equipment image files

