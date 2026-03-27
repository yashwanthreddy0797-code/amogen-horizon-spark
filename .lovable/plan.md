
## Simplify Scrolled Pill Navigation: Remove Dropdowns

### What Changes
Keep the static (non-scrolled) navbar exactly as-is with all mega menu dropdowns. Only modify the **scrolled pill state** so that when hovering the left pill and the expanded bar appears, the nav items are **simple direct links** with no dropdown sub-menus.

### Technical Details

**File: `src/components/Navbar.tsx`**

1. **Remove mega menu from scrolled expanded bar (line 683):** Delete the `renderMegaMenu()` call inside the scrolled expanded `motion.div`, so no dropdown appears when hovering nav items in scrolled state.

2. **Convert scrolled nav item buttons to direct links (lines 603-631):** Replace `<button>` elements with `<a>` tags that navigate directly to each page:
   - About -> `/about`
   - Products -> `/` (or `#products`)
   - CDMO -> `/cdmo`
   - Science -> `/science`
   - News -> `/news`
   
   Remove `onMouseEnter` handler that triggers `setActiveMenu` and the `onClick` toggle logic. Each item simply navigates on click.

3. **No changes to the static (non-scrolled) navbar** -- the full mega menu dropdown behavior on hover remains intact.

4. **No changes to `renderMegaMenu()` or `renderScrolledMenuPanel()` functions** -- they stay available for the static nav.
