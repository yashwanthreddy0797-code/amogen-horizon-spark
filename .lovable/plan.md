
Fix this in two phases, with the sticky stack restored first before touching the animation again.

What is actually blocking it
- The sticky card stack is currently being mixed with the animated header layer inside each sticky item.
- In `src/components/ResearchHighlight.tsx`, the heading/eyebrow overlay is absolutely positioned above the card (`absolute ... z-30 h-28`) while the sticky wrapper itself also has custom overflow/z-index handling.
- That changed the original stacking behavior: instead of later cards sliding behind the active card, the cards are now visually competing at the same layer, which is why the stack feels broken in your screenshots.
- The transition is now “working”, but it is being positioned in a way that interferes with the sticky illusion.

Plan

1. Restore the sticky stack structure first
- Refactor the cards into a clean 3-layer structure:
  - stack wrapper
  - sticky card shell
  - clipped card inner
- Keep `position: sticky` only on the outer shell.
- Keep `overflow: visible` on the sticky shell.
- Move `overflow: hidden` only to the inner rounded card surface.
- Remove any animation/layout behavior from the sticky container itself.
- Reintroduce proper overlap spacing between cards so the next cards move behind the current one again.

2. Normalize z-index and overlap rules
- Give the first card the highest stack order, then descend for later cards.
- Add controlled negative vertical overlap/margin between cards so the stack reads like it did before.
- Make sure no transformed ancestor or misplaced overlay is breaking the sticky containing block.

3. Rebuild the animated header in a non-blocking layer
- After the sticky stack is fixed, place the eyebrow + heading animation inside a dedicated header stage that belongs to the card content, not the sticky shell logic.
- Keep this stage visually above the card surface but still within the card’s own coordinate system.
- This preserves the sticky behavior while letting the heading animate cleanly into the eyebrow slot.

4. Tune the first card transition precisely
- Use the first card as the reference pass.
- Align the heading’s final animated position exactly to the current eyebrow baseline.
- Adjust the start/end offsets so the transition completes before the next card visually takes over.
- Remove the “too close to border” feel by adding a slightly safer left/top inset for the animated stage.

5. Apply the same transition system to cards 2 and 3
- Once card 1 behaves correctly, reuse the same motion mapping for the other cards.
- Keep the last card’s static behavior if needed, or match the same pattern only where it makes visual sense.

6. Verify the final behavior
- Scroll down: heading should move into the eyebrow slot while the next card goes behind the current one.
- Scroll up: heading should return to its original title position and the stack should still feel layered and premium.
- Confirm there is no clipping, no header drift, and no broken overlap between cards.

File to update
- `src/components/ResearchHighlight.tsx`

Implementation approach
- Replace the current single mixed structure with something conceptually like:

```text
research-stack
  research-stack__card   (sticky, overflow visible, z-index only)
    research-stack__cardInner   (rounded surface, overflow hidden)
      animated header stage
      card body grid
```

Technical notes
- Keep sticky logic isolated from motion styling.
- Avoid putting transform-like layout effects on the sticky ancestor.
- Keep the animated title/eyebrow inside the card’s content layer, not as a floating layer that disrupts stacking.
- Use the advisor guidance directly here: clean sticky container first, clipped inner surface second, then animation on top.

Expected result
- The sticky stacking behavior will work again exactly like before, with following cards passing behind the active card.
- The heading-to-eyebrow transition will then sit correctly inside each card without breaking the stack.
- The heading/eyebrow alignment will look cleaner and no longer hug the border awkwardly.
