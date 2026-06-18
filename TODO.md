# TODO

## Open

1. [X] Add homepage content according to illustration /home/yair/hovav-portal/illustration.jpg
2. [X] make headers smaller to allow more content
3. [ ] make sure to enable description paragraph for each page - header
4. [ ] Make footer editable via Sanity
5. [ ] Add Sanity section config — per-section: title, description, headerImage, backgroundColor, order, isVisible
6. [ ] Implement 3 card styles selectable per section in Sanity:
   - **Article** — image + text paragraph
   - **Link card** — horizontal thumbnail, title, description, external link
   - **Video card** — embedded video (YouTube/uploaded) + optional text
7. [ ] Add video support to behind-the-scenes (מאחורי הקלעים) cards
8. [ ] Auto-generate nav from visible Sanity sections
9. [ ] Card styles need unified data model — how to handle fields that only apply to some styles (e.g. `link` for link cards, `videoUrl` for video cards)?

## 
## Senity

1. [ ] apply changed to senity project accordingly
2. [ ] with senity, allow deactivating pages.
3. [ ] page id is unique number maybe? and coralates with senity ref table so that page names/Enteries can be Edited.

## Decide

1. [X] Should Sanity allow creating entirely new section types, or only configure existing ones?
2. [ ] concider allowing new pages of predefined types...

## Mockup

1. [X] the text scale of the preview cars is not readable
2. [X] make hero section same as what we did in the real app
3. [X] style whiteboard to look like a whiteboard
4. [X] creat css for white board to meake text in handwriting font apeear as if being writen and disapear as if being erased

## Done

- [x] Match hero sections to homepage layout
- [x] Nav bar and scroll behavior (smooth scroll, hash anchors)
- [x] Each section min viewport height
- [x] Sticky nav — hides on scroll down, reappears on scroll up
- [x] Scroll-snap to sections
- [x] Nav hide/show on mobile with tap to reveal
- [x] Hamburger menu collapses after selection
- [x] Snap offset with hidden nav (non-issue — sticky reserves space)
