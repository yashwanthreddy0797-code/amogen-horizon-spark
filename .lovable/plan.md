

## Plan: Add Equipment Images to R&D Capabilities Card

### What We're Building
Convert the second sticky card ("R&D Capabilities") from its current text-bullet + side-image layout to the same two-column instrument grid used by the API Manufacturing and Analytical Capabilities cards.

### Items (8 total)
1. Sequence & Construct Engineering
2. Multi-Host Expression Platforms
3. Strain / Clone Development
4. Cell Banking & Stability Systems
5. Media & Seed Train Optimization
6. Scalable Fermentation Development
7. Soluble + Inclusion Body Recovery
8. Integrated Purification Platform

### Technical Steps

1. **Generate 8 images** via AI image generation — clean, professional icons on white/transparent backgrounds matching the style of the other two cards' instrument images.

2. **Save to `src/assets/`** (e.g., `sequence-engineering.png`, `multi-host-expression.png`, `strain-clone-dev.png`, `cell-banking.png`, `media-seed-train.png`, `scalable-fermentation.png`, `inclusion-body-recovery.png`, `integrated-purification.png`).

3. **Update `src/components/ResearchHighlight.tsx`**:
   - Add 8 new image imports.
   - Change the second card's data: add an `instruments` array with the 8 items and clear `details` to `[]`.
   - The existing rendering logic already handles the `instruments` branch with the two-column centered grid — no template changes needed.

### Files Modified
- `src/components/ResearchHighlight.tsx` — add imports + convert card data
- `src/assets/` — 8 new image files

