

## Mobile Responsiveness Fix Plan

### Problem
On mobile screens (~375–402px), content appears cut to approximately half the screen width. Several components use fixed pixel widths, inflexible grid columns, and non-responsive flex layouts.

### Diagnosis Summary

**`index.html`** — viewport meta tag already exists. No change needed.

**Key offending components:**

1. **`PipelinePreview.tsx`** — The biggest offender. Uses a side-by-side flex layout (`flex: "0 0 32%"` + `flex: 1`) with a fixed grid inside (`gridTemplateColumns: "180px 1fr 140px"`) that overflows on mobile. The entire section has `minHeight: "100vh"` and no responsive stacking.

2. **`PatientDriven.tsx`** — Three cards in a horizontal flex row with `height: 520` fixed. No mobile stacking — cards get squeezed to ~130px each.

3. **`ResearchHighlight.tsx`** — Instrument grid uses `grid-cols-2` with no `grid-cols-1` mobile fallback. Sticky card heights are fixed at 500px. A `w-[500px]` decorative div exists.

4. **`ManufacturingGlance.tsx`** — Uses `width: "calc(100% - 32px)"` and `margin: "0 16px"` inline styles. The content is right-aligned with `marginLeft: "auto"` and fixed `paddingLeft: "48px"`.

5. **`NewsPreview.tsx`** — Pagination row uses flex without wrapping. Progress bar has `w-48` fixed width.

6. **`ProductsBanner.tsx`** — Uses `clipPath` which clips text on mobile.

### Changes (by file)

#### 1. `src/components/PipelinePreview.tsx`
- Convert the two-column flex layout to stack vertically on mobile: left text panel full-width on small screens, table below
- Replace fixed `gridTemplateColumns: "180px 1fr 140px"` with responsive values — on mobile, stack or use a simplified layout
- Add `overflow-x: auto` to the table wrapper for safety
- Reduce padding on mobile

#### 2. `src/components/PatientDriven.tsx`
- Convert the flex row to `flex-col` on mobile (`className="flex flex-col md:flex-row"`)
- Replace fixed `height: 520` with responsive: each card gets a fixed mobile height (~280px), full height on desktop
- Add gap between cards on mobile

#### 3. `src/components/ResearchHighlight.tsx`
- Change instrument grid from `grid-cols-2` to `grid-cols-1 sm:grid-cols-2`
- Remove fixed `w-[500px]` on decorative element or make it responsive
- Reduce sticky card height on mobile
- Ensure `px-8 md:px-12` patterns are maintained

#### 4. `src/components/ManufacturingGlance.tsx`
- Make the section width `w-full` with responsive margins (`mx-4 md:mx-4`)
- Reduce left padding on mobile
- Ensure the right-aligned content panel doesn't overflow

#### 5. `src/components/NewsPreview.tsx`
- Add `flex-wrap` to the pagination row
- Make progress bar width responsive (`w-32 sm:w-48`)

#### 6. `src/components/ProductsBanner.tsx`
- On mobile, remove `clipPath` and show content full-width
- Already has decent mobile handling but the `pr-16 md:pr-24` creates excess right padding on mobile

#### 7. `src/components/AboutHero.tsx`
- Already uses responsive grid (`grid-cols-1 md:grid-cols-[2fr_1fr]`). Minor fix: ensure `overflow-hidden` stays only on image cards (already correct).

### Files to modify
- `src/components/PipelinePreview.tsx`
- `src/components/PatientDriven.tsx`
- `src/components/ResearchHighlight.tsx`
- `src/components/ManufacturingGlance.tsx`
- `src/components/NewsPreview.tsx`
- `src/components/ProductsBanner.tsx`

### What will NOT change
- Fonts, colours, content, component structure, desktop layout appearance

