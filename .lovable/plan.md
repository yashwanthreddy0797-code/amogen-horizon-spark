
Goal: restore the original stepped sticky-stack behavior so card 1 stays pinned while card 3 approaches, card 2 locks on top of card 1, and card 3 then locks on top of card 2. Keep the current heading-to-eyebrow animation, only extending it cleanly to card 3 after the stack geometry is corrected.

What is actually blocking it now
- In `src/components/ResearchHighlight.tsx`, each card is only sticky inside its own wrapper.
- The current wrapper math uses `STACK_OVERLAP = "-72vh"` plus `LAST_SECTION_HEIGHT = "160vh"`, which is too imprecise for this layout.
- Because the wrappers end too early relative to the stepped sticky tops (`72`, `128`, `184`), card 1 is released when card 3 is trying to lock, so it slides upward instead of remaining pinned.
- The overlap is also based on viewport height instead of the real card/header geometry, which is why the stacking feels inconsistent.

Plan to fix it
1. Restore the stack using card-geometry-based overlap
- Replace the viewport-based overlap with overlap derived from the real card height:
  - `CARD_HEIGHT - HEADER_BAND`
- This makes each next wrapper start exactly where the previous card should still remain visible by its eyebrow/header strip.

2. Keep the stepped sticky lock points
- Preserve the per-card sticky top logic:
  - card 1 at `72px`
  - card 2 at `72 + HEADER_BAND`
  - card 3 at `72 + HEADER_BAND * 2`
- This is the correct behavior for showing the previous card’s eyebrow while the next card locks above it.

3. Extend the live sticky range so earlier cards do not release too soon
- Keep normal wrappers for cards 1 and 2, but make the final wrapper much taller than now so the full three-card sequence has enough scroll runway.
- Use the advisor pattern directly:
  - base wrapper height around `120vh`
  - last wrapper gets a large extra height, not just `160vh`
- This ensures card 3 can fully lock and animate before the section ends.

4. Keep sticky and clipping responsibilities separated
- Wrapper: only height, overlap, and stacking context
- Sticky shell: only `position: sticky`, `top`, `z-index`, `overflow: visible`
- Card surface: only rounded clipping and visual surface
- This avoids sticky being broken by clipping/layout side effects.

5. Preserve the current header transition and apply it to card 3
- Keep the shared animated header stage already working for cards 1 and 2.
- Once the wrapper geometry is corrected, use the same transition for card 3 as well.
- Do not redesign the animation; only let it run inside the corrected stack.

Exact implementation shape
```text
cards container
  card wrapper
    height: 120vh (cards 1-2)
    height: 260vh-ish for last card
    margin-top: -(CARD_HEIGHT - HEADER_BAND) px for cards after the first
    z-index: index + 1

    sticky shell
      top: STICKY_TOP + index * HEADER_BAND
      overflow: visible
      z-index: index + 1

      card surface
        overflow: hidden
        rounded corners
        animated header stage
        instruments grid
```

Files to update
- `src/components/ResearchHighlight.tsx`

Expected result
- Card 1 stays pinned while card 2 and then card 3 approach.
- Card 2 locks above card 1 with card 1’s eyebrow still visible.
- Card 3 locks above card 2 with card 2’s eyebrow still visible.
- Card 1 no longer moves up prematurely when card 3 enters.
- The third card gets the same heading-to-eyebrow transition as the first two, without changing the overall visual design.
