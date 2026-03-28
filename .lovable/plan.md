
Goal: fix the sticky stack first, while preserving the heading-to-eyebrow transition that is already working for the first two cards.

What is actually blocking the sticky behavior now
- In `src/components/ResearchHighlight.tsx`, each card wrapper is only as tall as the card itself, with negative margins used to fake overlap.
- Because there is no dedicated tall scroll spacer per card, the sticky items do not get enough scroll distance to create the real “next card goes behind current card” behavior.
- The current `top: 72 + index * CARD_HEADER_HEIGHT` plus the compressed wrapper layout makes the cards appear as normal stacked blocks instead of one overlapping sticky sequence.
- The heading transition is mostly fine for cards 1 and 2, so the main blocker is now structural, not animation-related.

Implementation plan
1. Rebuild the stack using tall wrapper sections
- Replace the current `marginTop/paddingBottom` stack setup with one wrapper per card that has real scroll height.
- Use the advisor pattern: each wrapper becomes a `relative` section with large height (`~120vh`, last card taller).
- Keep overlap by applying negative top spacing between wrappers, not by collapsing the card itself.

2. Keep sticky logic isolated
- Move `position: sticky` to a dedicated sticky shell only.
- Keep `overflow: visible` on that sticky shell.
- Use a stable sticky top value so all cards pin consistently and later cards can slide behind the active one.
- Keep z-index descending from first to last card.

3. Keep clipping only on the card surface
- Move `overflow: hidden` only to the rounded inner card surface.
- Keep the animated header stage inside that inner card surface, not on the outer sticky wrapper.
- This preserves the first-two-card heading transition while stopping it from interfering with sticky containment.

4. Restore the visual “pass behind” effect
- Ensure the outer stack container does not clip.
- Reintroduce controlled overlap between card wrappers so card 2 and card 3 travel behind card 1 as you scroll.
- Remove any remaining layout tricks that flatten the cards into one normal column.

5. Preserve and lightly tune the current header animation
- Keep the working heading-to-eyebrow motion for cards 1 and 2.
- After the stack is fixed, slightly adjust the header inset so the animated title sits farther from the border.
- Leave card 3 static unless the same motion also looks clean there.

Files to update
- `src/components/ResearchHighlight.tsx`

Technical shape to implement
```text
stack container
  card wrapper (relative, tall height, negative overlap between wrappers)
    sticky shell (sticky, overflow visible, z-index only)
      card inner (rounded, overflow hidden)
        animated header stage
        instruments grid
```

Expected result
- The three cards will behave like a true sticky stack again.
- Card 2 and card 3 will scroll behind the active card instead of sitting as flat sections underneath.
- The first two heading-to-eyebrow transitions will remain intact, with cleaner spacing from the card border.
