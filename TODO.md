# TODO

## Liat

1. [X] Rich text (Portable Text) for all content fields
2. [X] News articles: preview card with excerpt, click opens full article page
3. [X] News/articles: multiple images and video uploads, author required
4. [X] Video upload support in Sanity (file upload, not just URL)
5. [X] Homepage image carousel with caption below each image
6. [ ] "מה דעתכם?" poll widget — yes/no question from Sanity, percentages after vote, cookie prevents re-voting
7. [X] Author name under title on all articles/pages
8. [X] News preview: 1 image + 2 lines text + "להמשך קריאה..."
9. [X] Remove plain text fields from Sanity schemas — keep only rich text (Portable Text)
10. [X] Recipes/recommendations as full pages with preview cards — generic `/item/[slug]` route
    - ~~Add `slug` field to recipe schema~~ done
    - [ ] Add `dietaryType` dropdown: חלבי / בשרי / פרווה
    - [ ] Add `allergens` multi-select tags: גלוטן, אגוזים, ביצים, סויה, etc.
    - [ ] Dietary/allergy badges on preview card and full recipe page

## Decide

1. [X] Should Sanity allow creating entirely new section types, or only configure existing ones?
2. [ ] Consider allowing new pages of predefined types
3. [ ] We need to generate slugs automatically. The field should be view only?
4. [ ] Re-order the way content is being inserted — can I edit it myself?

## Done

- [x] Match hero sections to homepage layout
- [x] Nav bar and scroll behavior (smooth scroll, hash anchors)
- [x] Each section min viewport height
- [x] Sticky nav with 50% opacity while scrolling
- [x] Scroll-snap to sections
- [x] Hamburger menu collapses after selection
- [x] Data-driven sections from Sanity config with fallback defaults
- [x] Unified SectionItem model + ArticleCard / LinkCard / VideoCard
- [x] Auto-generated nav from section configs
- [x] Footer driven by Sanity config with fallback
- [x] Preview cards driven by siteSettings with fallback
- [x] Sanity studio deployed
- [x] Rich text (Portable Text) on all content schemas
- [x] Multiple images + video file upload on news and behind-the-scenes
- [x] Author name under title in all card components
- [x] News preview with line-clamp-2 + להמשך קריאה
- [x] Homepage carousel from Sanity siteSettings
- [x] Whiteboard messages editable from Sanity
- [x] Generic /item/[slug] route for all content types (replaces /article/ and /recipe/)
- [x] Recommendation schema: slug + bodyRich fields
- [x] Playful game cards with pastel colors, hover effects, responsive grid
- [x] Article-compact card style (credit-card proportions) for recipes
- [x] Image lightbox: click to fullscreen on mobile, large view on desktop
- [x] Homepage layout: hero → whiteboard+carousel side by side → news → categories
- [x] Dynamic /section/[slug] pages driven by Sanity sectionConfig
