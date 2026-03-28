

## Fix: Sticky Card Heading → Eyebrow Transition

### Problem
The current `useScroll` offset `["start start", "end start"]` doesn't work with sticky-positioned elements because the card's position stays pinned, so `scrollYProgress` never reaches the 0.5–1.0 range needed to trigger the animation.

### Solution
Change the scroll offset to `["start 70%", "end 35%"]` which tracks the card's scroll container (the wrapper div with explicit height) rather than its visual position. This means:
- As the user scrolls past each card's scroll range, progress goes 0→1
- At progress 0.45–0.8, the heading moves up and shrinks into the eyebrow position
- The eyebrow text fades out simultaneously
- Scrolling back up reverses everything

### Changes in `src/components/ResearchHighlight.tsx`

**1. Update `useScroll` offset** (line 114-117):
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start 70%", "end 35%"],
});
```

**2. Update transform ranges** (lines 120-122):
```tsx
const headingY = useTransform(scrollYProgress, [0.45, 0.8], [0, -56]);
const headingScale = useTransform(scrollYProgress, [0.45, 0.8], [1, 0.34]);
const eyebrowOpacity = useTransform(scrollYProgress, [0.45, 0.65], [1, 0]);
```

These tighter ranges and the corrected offset ensure the animation triggers precisely when the next card overlaps the current one, and reverses cleanly on scroll-up.

### What stays the same
- All card content, layout, colours, images, instruments grid
- Only the scroll tracking parameters change

