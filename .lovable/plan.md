

## Scroll-Animated "Living Label" Headings for All Three Capability Cards

### What Changes

All three sticky cards (Manufacturing Capacity, R&D Capabilities, Analytical Capabilities) get a scroll-driven heading animation. Each card's heading starts at full h2 size and smoothly shrinks into a small uppercase eyebrow label as the user scrolls through the card. The existing static eyebrow labels ("API MANUFACTURING", "RESEARCH & DEVELOPMENT", "ANALYTICAL") are removed — the animated heading replaces them.

### Behavior

1. **Card enters view**: Heading displays at full size (~44px, weight 400, dark #0B1E33, normal letter-spacing)
2. **User scrolls through card**: Heading smoothly transitions — font shrinks, letter-spacing widens, transforms to uppercase appearance
3. **Fully transformed** (~50% scroll): Small eyebrow (11px), weight 500, letter-spacing 0.25em, uppercase — stays in the 48px header strip area
4. **Scroll back up**: Reverses smoothly to full size
5. **Text stays the same**: "Manufacturing Capacity" → "MANUFACTURING CAPACITY", etc. (just style change + uppercase)
6. **Card content does not move** — only the heading animates

### Technical Approach

**File: `src/components/ResearchHighlight.tsx`**

1. **Add Framer Motion imports**: `useScroll`, `useTransform`, `motion` from `framer-motion`

2. **Extract each card into a sub-component** (`AnimatedCard`) that:
   - Takes a `ref` on its wrapper div
   - Uses `useScroll({ target: ref, offset: ["start end", "start start"] })` to track how far the card has scrolled into the viewport
   - Uses `useTransform` to interpolate scroll progress (0→0.5) into:
     - `fontSize`: 44px → 11px
     - `letterSpacing`: 0.02em → 0.25em
     - `fontWeight`: 400 → 500 (discrete)
     - `textTransform`: applied via CSS uppercase at all times (the visual difference is only size/spacing)

3. **Remove the static header strip** with `{card.tag}` for all cards (lines 200-215). Replace it with the animated heading that lives inside a 48px-tall sticky container at the top of the card.

4. **Remove the separate `<h3>` heading** from both the instruments branch (line 225-236) and the standard branch (lines 267-276), since the animated header strip now serves as the heading.

5. **Animated heading structure**: A `motion.h3` inside the header strip area, styled with interpolated motion values. The text content is always `card.title` — `textTransform: "uppercase"` applied throughout so the capitalization is consistent.

6. **Layout adjustment**: The card body content shifts up slightly since the heading is now in the header strip rather than the body area. Padding adjustments to compensate.

