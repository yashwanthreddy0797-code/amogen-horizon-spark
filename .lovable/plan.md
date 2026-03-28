
Fix the transition by moving the first card’s eyebrow and heading into one shared animated header stage instead of animating the heading inside the body only.

What’s wrong now
- The eyebrow (`API MANUFACTURING`) sits in the fixed header strip.
- The heading (`Manufacturing Capacity`) sits below in a separate body block.
- Because they are in different layout areas, the heading can only shrink and move upward visually; it never actually lands in and replaces the eyebrow slot.

What I will change
1. Rebuild the first card header/body handoff in `src/components/ResearchHighlight.tsx`
   - Create a shared “header stage” area for the first card only.
   - Layer the eyebrow and heading absolutely in that same coordinate space.
   - Keep the eyebrow at the true eyebrow coordinates.
   - Place the heading at its normal title coordinates inside the same stage.

2. Drive a true slot-to-slot transition
   - Use the existing `useScroll` progress for the first card.
   - Animate the heading from its title position to the exact eyebrow position.
   - Fade the original eyebrow out while the heading arrives there.
   - Reverse the same motion on scroll-up.

3. Match the heading to the eyebrow destination properly
   - Tune the final `y` offset and `scale` so the transformed heading sits exactly where `API MANUFACTURING` was.
   - Set `transformOrigin: "top left"` so the shrink feels anchored and precise.
   - Keep spacing/layout stable by reserving fixed stage height.

4. Limit this pass to the first card
   - Apply the corrected shared-stage transition only to card 1 first, exactly as requested.
   - Leave cards 2 and 3 unchanged for now until the first one feels perfect.

Implementation shape
- Replace the current split setup:
  - header strip renders eyebrow
  - body renders animated heading
- With:
  - header strip/body-top area renders one relative container
  - eyebrow and heading are both absolutely positioned inside it
  - motion values animate heading into eyebrow coordinates

Technical details
- File: `src/components/ResearchHighlight.tsx`
- Main adjustment:
  - first card gets a `relative h-[~90px]` header stage
  - eyebrow: `absolute left-0 top-0`
  - heading: `absolute left-0 top-[~28px]`
- Motion logic:
  - `titleProgress = useTransform(scrollYProgress, [0.45, 0.8], [0, 1])`
  - `titleY` moves heading into eyebrow row
  - `titleScale` shrinks heading to eyebrow-sized visual weight
  - `eyebrowOpacity` fades default eyebrow out as heading replaces it

What will stay unchanged
- Card content
- Colors
- Card sizes and sticky stacking layout
- Other sections/components

Expected result
- On scroll down, `Manufacturing Capacity` will visibly move into and sit in the exact `API MANUFACTURING` eyebrow position.
- At the same time, `API MANUFACTURING` fades away.
- On scroll up, the heading returns to its original title position and the default eyebrow reappears.
