
Fix `src/components/ResearchHighlight.tsx` by restoring the original sticky-stack geometry first, then extending the working heading-to-eyebrow transition to card 3.

What is broken now
- The current wrapper uses `height: isLast ? "auto" : "120vh"` with no negative overlap between card sections.
- Because of that, the cards sit as normal large blocks with gaps, instead of behaving like sequential sticky segments.
- The sticky shell also uses one fixed `top: 72px` for every card, so card 2 and card 3 never lock higher while leaving the previous card’s eyebrow visible.
- The first two heading transitions mostly work, but the third card’s motion is tied to the same broken wrapper geometry.

What to change
1. Restore the previous sticky stacking structure
- Keep one tall scroll section per card.
- Use the working overlap pattern from the advisor:
  - wrapper height around `120vh`
  - last wrapper taller, around `160vh`
  - negative `marginTop` for cards after the first so each next card rises over the previous one
- This removes the large dead space and brings back the “lock one by one” behavior.

2. Reintroduce stepped sticky offsets
- Set sticky top per card instead of one flat value:
  - card 1 locks first
  - card 2 locks lower by one header band
  - card 3 locks lower by another header band
- Use the card header height as the step so the previous card’s eyebrow remains visible above the next card.

3. Keep the 3-layer card structure clean
- Wrapper: controls scroll height and overlap only
- Sticky shell: controls `position: sticky`, `top`, `z-index`, `overflow: visible`
- Card surface: controls rounded clipping and contains the header animation + grid
- Do not let animation layout rules affect the sticky container.

4. Preserve the working transition for cards 1 and 2
- Keep the shared animated header stage already used for the first two cards.
- Slightly adjust header inset so the animated heading sits less close to the border.

5. Apply the same transition to card 3
- Remove the current “last card is static” behavior.
- Use the same `useScroll`-driven heading-to-eyebrow animation for the third card, but map it to the corrected wrapper geometry so it triggers at the right moment.

6. Expected end result
- Card 1 pins first.
- Card 2 rises and locks on top of card 1, leaving card 1’s eyebrow visible.
- Card 3 rises and locks on top of card 2, leaving card 2’s eyebrow visible.
- As each card gets covered, its heading transitions into the eyebrow slot; on scroll up, the motion reverses cleanly.

Implementation shape
```text
cards container
  card section (relative, tall height, negative overlap except first)
    sticky shell (sticky, top = 72 + index * headerHeight, z-index desc)
      card surface (rounded, overflow hidden)
        animated header stage
        instruments grid
```

Files to update
- `src/components/ResearchHighlight.tsx`

Technical notes
- Replace `isLast ? "auto"` with a real tall final wrapper.
- Add back negative overlap between wrappers using `CARD_HEIGHT - HEADER_STAGE_HEIGHT` or equivalent tuned value.
- Use descending `z-index` so earlier cards stay above until the next card reaches its sticky slot.
- Animate all three cards from the same shared header coordinate system after the stack is fixed.
