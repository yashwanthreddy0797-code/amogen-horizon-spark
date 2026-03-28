

## Sticky Card Heading → Eyebrow Transition Effect

### What it does
As you scroll and a card gets overlapped by the next sticky card, the card's **heading** (e.g. "Manufacturing Capacity") smoothly animates upward into the **eyebrow/tag position** (where "API MANUFACTURING" sits). When scrolling back up, the heading returns to its original position. This creates a polished, editorial feel.

### How it works technically

**Scroll tracking**: Each card wrapper gets a `useScroll` hook from framer-motion that tracks how far through its scroll range the user is. The scroll progress (0→1) drives the heading animation.

**Animation mechanics**:
- Progress 0–0.5: Heading stays in its normal position, full size
- Progress 0.5–1.0: Heading translates upward ~60px into the eyebrow row, scales down to eyebrow size (~11px), and the original eyebrow text fades out
- On scroll-up, everything reverses automatically (framer-motion's `useTransform` is bidirectional)

**Last card exception**: The third/last card has no card stacking over it, so its heading stays static.

### File to modify
- `src/components/ResearchHighlight.tsx` — single file change

### Implementation details

1. **Extract each card into a sub-component** (`StickyCard`) that accepts the card data, index, and whether it's the last card
2. Inside `StickyCard`, create a `ref` for the outer wrapper and use `useScroll({ target: ref, offset: ["start start", "end start"] })` to get `scrollYProgress`
3. Use `useTransform` to derive:
   - `headingY`: translates from 0 → -60px (heading moves up into eyebrow row)
   - `headingScale`: scales from 1 → 0.45 (heading shrinks to eyebrow size)
   - `headingOpacity`: stays 1 throughout
   - `eyebrowOpacity`: fades from 1 → 0 (original eyebrow disappears as heading takes its place)
4. Wrap the heading `<h3>` in a `<motion.h3>` with `style={{ y: headingY, scale: headingScale, transformOrigin: "left top" }}`
5. Wrap the eyebrow `<span>` in a `<motion.span>` with `style={{ opacity: eyebrowOpacity }}`
6. Skip the animation for the last card (index === cards.length - 1)

### What stays the same
- All layouts, colours, content, card structure, instruments grid, and other styling remain untouched
- Only the heading and eyebrow elements get motion wrappers for the scroll-driven transition

