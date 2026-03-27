

## Plan: Update R&D Highlights Stats to Amogen Data

### What Changes

**Single file edit: `src/components/products/ProductsRDHighlights.tsx`**

1. **Replace the `stats` array** (lines 8-17) with Amogen-specific data:
   - "BIOSIMILAR PROGRAMS" / "10+" / "Active GLP-1, insulin and immunology biosimilar programs"
   - `{ type: "color", bg: "#0B736D" }` (replacing facility image)
   - "PATIENT POPULATION" / "570M+" / "Global diabetes patients across target markets"
   - `{ type: "color", bg: "#0B736D" }` (replacing patient image)
   - "FERMENTATION CAPACITY" / "980 Kg" / "Annual GLP-1 class API production capacity"
   - "PRODUCTION FERMENTERS" / "5 × 15KL" / "Plus 2 × 1KL seed fermenters — Plant 1, Hyderabad"
   - "PARTNERSHIP MARKETS" / "8+" / "Target geographies including India, GCC, ASEAN, EU and North America"
   - "PIPELINE MARKET SIZE" / "$80B+" / "Cumulative addressable market across all 7 programs"

2. **Update the image card rendering** (lines 71-81): Change the `type === "image"` branch to render a solid `#0B736D` div instead of an `<img>` tag, keeping the same card size/position.

3. **Remove unused image imports** (lines 5-6): Remove `facilityImg` and `patientImg` imports.

### Files Modified
- `src/components/products/ProductsRDHighlights.tsx`

