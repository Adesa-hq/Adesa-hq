# Homepage hero carousel handover

Implemented locally only. No deployment performed.

## Team navigation

- Desktop and mobile navigation now begin Home → Team → About. Team is a native button, not a fragment link, so clicking it on the homepage leaves the pathname, query and hash untouched.
- From other pages, Team navigates to `/` with automatic top-scrolling disabled, waits for the homepage team heading if markup is still streaming, and then scrolls to that heading without adding a URL hash.
- The mobile menu closes before the header offset is measured. The destination leaves 24px beneath the sticky header and receives programmatic focus via `tabIndex=-1`. Reduced motion uses instant scrolling.
- Pending timers/DOM observers are cleaned up on cancellation, route changes and unmount. Normal navigation cancels a pending Team request.
- Actual Header logic passed deterministic checks for nav order, URL/history-free same-page scrolling, mobile drawer timing, cross-page navigation/streaming, reduced motion and cancellation. Targeted lint and the production Webpack build passed (build-only Resend placeholder); browser visual checks remain unavailable here.

## Latest Media image and secretary title

- Joyce Osemudiamen is Group Secretary and remains last in the team sequence.
- The Media hero uses the supplied WhatsApp Image 2026-11-11 at 10.22.13.jpeg. The source is unchanged, with responsive WebP variants under the unique media-event-41eb19f100 filename. Earlier inDrive/Leadway references below describe superseded backgrounds.

## MD portrait and subsidiary positioning update

- The MD now uses the latest supplied `WhatsApp Image 2026-11-11 at 10.21.39 (1).jpeg`, preserved unchanged as `public/assets/team/oluwafemi-adeleye-c26b3948d3.jpg`, replacing the earlier `md.jpg` selection. Its portrait framing matches the existing team card. The filename includes a content hash so browsers and the Next.js image optimizer request this latest image rather than reusing an earlier cached portrait. The previous low-resolution PNG remains as an unused source asset.
- ADESA Energy is described as a CNG energy company advancing wider adoption of gas as a form of energy for mobility. Shared company data, hero copy, services, operating profile and SEO sector references have been updated; renewable power/solar/grid positioning has been removed.
- ADESA Solutions is described as an engineering company serving construction, electrical and mechanical industries. Shared company data, hero headline/copy, services, operating profile and SEO sector references have been updated; the former business-systems and architectural-only positioning is superseded.
- Existing links, logos, team order, card sizing and sequential reveals are retained.

## Latest Media photograph and team title update

- Media now uses the supplied inDrive photograph, with its original JPG retained unchanged and responsive WebP variants generated at 960px/1080px. The portrait photograph occupies the right side on desktop with a soft gradient, and fills the slide on mobile. Existing Media copy, official logo, destination and carousel interactions are retained.
- Joyce Osemudiamen is now Group Secretary and appears last. Current team sequence: Oluwafemi Adeleye, Blessing Gbadeyan, Osasenaga Aigiomwan, Anthonia Dike, Mercy Agbo, Christian Samuel, Joyce Osemudiamen. The centered second row is Finance, IT, then Group Secretary; reveals follow that reading order.
- Historical Leadway/concept provenance below refers to the previous background; the active Media slide uses the newly supplied photo.

## Meet The Team

- New `components/sections/team-section.jsx` and `team-section.module.css`, mounted on the homepage after Operating Companies and before the LinkedIn subscription section.
- Exact heading: “Meet The Team”. Portrait/name/role order: Oluwafemi Adeleye — Group Managing Director; Blessing Gbadeyan — Group Chief Operating Officer; Osasenaga Aigiomwan — Group Human Resources Manager; Anthonia Dike — Group Brand Manager; Mercy Agbo — Group Financial Officer; Christian Samuel — Group IT Support Executive / Software Engineer; Joyce Osemudiamen — Group Secretary. Each title appears beneath its name. Role spelling/capitalization has been normalized.
- Source portraits were copied unchanged to `public/assets/team/` with descriptive filenames; all seven match the supplied files byte-for-byte and decode successfully. Next Image provides responsive sizing and optimized delivery; crops use CSS without altering faces or source photographs.
- Layout: one column on mobile, two on tablet, four on desktop, with the remaining three cards centered beneath at the same size; the final tablet card is also centered. Reserved 4:5 portrait frames and caption areas keep the grid stable. Soft upward reveals and gold border emphasis hand off left to right after the prior 700ms entrance settles (860ms between starts).
- Each next card waits for its portrait to load; an active image is promoted from lazy to eager loading to avoid a fast-scroll deadlock behind an offscreen predecessor. Load/error listeners and timers are removed on exit/unmount.
- Replays follow the stats behavior: distinct full-section exit/re-entry, maximum five starts per visit, final readable content after the limit. Reduced motion shows all members immediately. No-JavaScript markup includes all names, titles and portraits.
- Deterministic tests of the actual component effect passed for strict sequence order, five-play limit, image readiness, exit/unmount cleanup and reduced motion. Render-tree checks verified the heading and all names/titles in order. Lint and the production Webpack build passed (with the command-scoped Resend placeholder). The original four-member production homepage HTML was verified in the requested order; the two subsequent additions retain the same data-driven sequence. Browser visual checks remain blocked by the environment.

## Stats replay and shared back-to-top control

- Stats now reset on distinct re-entry after the entire section has left the viewport, with at most five starts per page visit. Interrupted starts count toward the allowance. Once capped, final values remain visible and both intersection observers disconnect. Refreshing the page starts a new allowance.
- Leaving during a run cancels its frame/timer and restores readable final values; returning begins again in the original 4 → 1 → 100% → Long order, subject to the cap and reduced-motion preferences.
- Added `components/ui/back-to-top.jsx` and `back-to-top.module.css`, mounted once in `app/layout.js` for all pages. The control uses the uploaded `public/assets/ui/back-to-top.png` unchanged.
- The button becomes visible once the first `main section` scrolls past the sticky header. Scroll and resize measurements are coalesced into animation frames; a resize observer handles responsive hero/header height changes. Pages without a section use the first viewport as a fallback.
- The control is a native button using `window.scrollTo`, so it introduces no hash or history change. It restores keyboard focus to the header home link without triggering navigation. Reduced motion uses instant scrolling. Hidden controls are inert and excluded from assistive navigation; all listeners, observers and pending frames are cleaned up on route changes/unmount.
- Deterministic checks of the actual component effects passed for five-play replay limits, sixth-entry static values, partial-run cancellation, original count order, scroll visibility thresholds, resize behavior, URL-free scrolling, focus return, reduced motion and resource cleanup.

Validation: lint and the production Webpack build passed (using the command-scoped Resend placeholder). All nine public production HTML pages include exactly one native back-to-top button, with no href. The uploaded icon matches the source byte-for-byte. Browser visual checks remain blocked by the existing environment restriction.

## Sequential scope counters

- `components/sections/stats-section.jsx` starts a viewport-triggered sequence: 0→4 (1.2s), then 0→1 (650ms), then 1%→100% (1.8s), then “Long” (750ms). Each numeric card has a 280ms reveal lead-in and each handoff a 240ms breathing space.
- `components/sections/stats-section.module.css` adds a restrained upward entrance, warm active-value glow, a gold progress line and staggered letter arrivals for “Long”. Grid geometry and value heights stay reserved throughout.
- Items wait for viewport entry and their predecessors. Fast scrolling to a later item lets its earlier items finish in order, preventing a permanently hidden later item. Distinct section re-entry now replays the sequence up to the five-start limit described above.
- Screen readers receive the final values without rapid announcements. JavaScript-disabled and initially reduced-motion views retain the final static values. Changing to reduced motion midway immediately completes all counters.
- Animation frames, handoff timers, the observer and preference listener are cleaned up on unmount. Numeric updates touch only the active text node; they do not rerender the whole section on every frame.
- A deterministic clock/observer harness ran the actual effect and passed checks for exact count order and endpoints, “Long” last, mobile/fast-scroll gating, cleanup, and reduced motion at load or mid-sequence. Browser visual verification remains blocked by the environment as previously documented.

## Map and Vision/Mission follow-up

- The footer satellite map now spans the entire footer content width below the contact row (250px tall on mobile, 320px on larger screens).
- Vision and Mission use two bottom-aligned cards. On tablet/desktop, Vision begins at 26rem tall and Mission at 20rem. Hovering Mission smoothly exchanges those heights; hovering Vision restores Vision as the taller card. Keyboard focus provides the same interaction. The shared row reserves 26rem throughout so surrounding content does not move.
- Height changes use a 750ms easing curve with subtle gold border/background feedback. Mobile cards retain natural heights and all copy remains visible. Reduced-motion preferences disable the transition.
- Updated files: `components/layout/footer.jsx`, `components/sections/vision-mission-section.jsx`, and new `components/sections/vision-mission.module.css`.

Validation for this follow-up: lint, CSS parsing and whitespace checks passed. The production Webpack build passed, including TypeScript and all 17 static pages, using the same command-scoped Resend placeholder described below. Browser interaction checks remain unavailable due to the environment restriction.

## Latest layout revision

- HQ slide now uses the website's dark `adesa-950` background and light typography.
- White logo containers have been removed from the hero, navigation, footer and subsidiary cards. Original logo files remain unchanged; a CSS circular mask and screen blending remove Distribution's outer white field/black disk, while subtle outlines keep dark HQ/Solutions marks visible on the dark palette.
- Header uses `position: sticky` and includes Home in both desktop and mobile menus, with `aria-current` marking the current page. Hero top spacing now accounts for the header occupying document flow.
- Shared content width is capped at 82rem, with 1.25rem mobile gutters and 2rem tablet/desktop gutters.
- Footer location includes a lazy-loaded satellite-map iframe queried using the configured address, plus an external Google Maps link. It is address-based; the exact building pin and external map rendering have not been verified in a browser here.
- Autoplay now pauses when hovering the controls rather than the entire hero. It continues over the artwork. Keyboard focus, hidden tabs, explicit pause and reduced-motion preferences still suspend rotation. Explicit Start also clears the existing focus/hover pause.
- Added `tests/e2e/layout-updates.spec.js` for dark logo surfaces, Home, sticky navigation and footer map parameters; expanded autoplay coverage in `hero-carousel.spec.js`.

Current validation: project dependencies are now installed (`npm ls --depth=0` finds the declared packages), and `npm run lint` passes. Chrome startup remains blocked by the execution environment (`sandbox_host_linux.cc`, `shutdown: Operation not permitted`), so browser-based tests cannot run here. Production build validation: the Webpack build compiled successfully and passed TypeScript, then failed while collecting `/api/contact` because its existing module-level Resend constructor requires `RESEND_CONTACT_API_KEY`. No contact-route business logic was changed. The retry passed with `RESEND_CONTACT_API_KEY=re_local_build_placeholder npx --no-install next build --webpack`: compilation, TypeScript, page-data collection and all 17 static pages completed successfully. The placeholder was scoped to that command; no environment file or API integration was changed, and email delivery was not tested. The default Turbopack build did not finish in this environment and was interrupted before the Webpack validation.


## Files

- `components/sections/hero-section.jsx`: five-slide client carousel, exact requested copy, CTA links, masked HQ logo assembly, accessible controls, swipe and keyboard navigation, cleaned-up timers and listeners.
- `components/sections/hero-carousel.module.css`: responsive layouts, dark HQ slide, dark photographic subsidiary slides, 900ms crossfades, text entrance, Ken Burns movement and logo animation. All slides occupy one shared grid cell to reserve the tallest layout and prevent slide-driven layout shifts.
- `config/brand.js`: official subsidiary logo paths; Existing company descriptions and destinations elsewhere are retained.
- `config/site.jsx`, `components/ui/logo.jsx`, `components/brand/brand-loader.jsx`: official HQ logo references. The small emblem is a lossless crop of the supplied original without lettering.
- `components/sections/subsidiaries-section.jsx`, `components/sections/subsidiaries/editorial-sections.jsx`: transparent treatments for the official logos in existing cards, with existing layouts preserved.
- `playwright.config.js`: replaces a hardcoded Windows Chrome path with the optional `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` environment variable. Otherwise uses Playwright's installed browser.
- `tests/e2e/hero-carousel.spec.js`: navigation, destinations, image loading, CTA horizontal bounds, autoplay, hover, explicit pause, visibility, reduced motion and touch gestures at the five existing viewports.
- `tests/e2e/responsive.spec.js`: updates assertions referring to the removed hero artwork and old CTA; inner-page background assertions remain intact.
- `public/assets/adesa/`: official logos, optimized backgrounds and supplied animation reference videos.

## Asset provenance and processing

The supplied ZIP's README identifies its five slide images as storyboard mockups with baked-in text and buttons, and explicitly identifies its Leadway scene as AI-generated. The user subsequently instructed that these images be used and improved.

The four subsidiary scenes were edited with the imagegen skill to remove overlaid logos, headings, paragraphs, decorative rules, buttons and borders; reconstruct the scene underneath; and improve resolution. The resulting backgrounds have no carousel UI baked into them. They remain edited concept imagery, not evidence of actual ADESA projects, a real Leadway activation, or an actual ADESA warehouse. No official logo was regenerated or recolored. All logos were copied unchanged from the ZIP; the HQ emblem is an additional lossless crop for small shared navigation contexts.

The original supplied ZIP remains intact in the project root. Existing unused legacy assets have not been deleted. The selected edited backgrounds are saved in the project as 960px and 1672px optimized WebP variants, selected using responsive picture sources. Each large background is about 100–200KB. Original official logo PNGs remain under `logos/`.

| Slide | Background | Official logo |
| --- | --- | --- |
| HQ | Dark navy CSS studio background, soft logo shadow; deliberately no storyboard image | `logos/adesa_hq.png` |
| Media | carousel/media-event-41eb19f100-{960,1080}.webp, optimized from the latest supplied event photograph; original retained as carousel/media-event-41eb19f100-original.jpeg | `logos/adesa_media.png` |
| Energy | `carousel/adesa_energy-{960,1672}.webp`, edited from `03_adesa_energy.png`, CNG canopy, pump and transport van | `logos/adesa_energy.png` |
| Solutions | `carousel/adesa_solutions-{960,1672}.webp`, edited from `04_adesa_solutions.png`, architectural building | `logos/adesa_solutions.png` |
| Distribution | `carousel/adesa_distribution-{960,1672}.webp`, edited from `05_adesa_distribution.png`, warehouse and forklift | `logos/adesa_distribution.png` |

Paths in this table are relative to `public/assets/adesa/`. `animations/reference-final.mp4` and `animations/reference-preview.mp4` were copied from the supplied local Downloads references. They are not loaded by the carousel. Sampled final-reference video frames were reviewed; its old copy and overlaid storyboard text are superseded by the user's exact copy and real HTML requirements.

## CTA destinations

| Slide | Destination | Basis |
| --- | --- | --- |
| HQ | `/structure` | Existing group structure route |
| Media | `https://adesamedia.com/` | User-specified URL |
| Energy | `https://adesaenergy.com/` | User-specified URL |
| Solutions | `https://www.instagram.com/adesasolution?igsh=YTU2ZnFhYTNvZTll&utm_source=qr` | Existing `ADESA_SOLUTIONS.href` / navigation |
| Distribution | `https://www.instagram.com/adesadistribution?igsh=MTM0c3BvajlxaW80bg%3D%3D&utm_source=qr` | Existing `ADESA_DISTRIBUTION.href` / navigation |

No standalone Solutions or Distribution website is configured in this repository. Existing official social destinations are used, pending any replacement URLs supplied by the owner. No guessed domain is introduced. External CTAs open a new tab with `noopener noreferrer`.

## Motion and interaction

- Autoplay: 6.8 seconds; crossfade: 900ms.
- HQ assembly masks the supplied full-resolution PNG into seven original-pixel layers: navy roof, gold roof, cyan bar, cyan square, orange square, navy square, lettering. Stagger: 380ms; entrance: 1.1 seconds with natural easing, perspective and a soft shadow. The completed, unmasked official asset fades over the layers after 3.5 seconds, ensuring an exact final mark. Each HQ activation restarts the assembly; unrelated state updates do not.
- Text enters with opacity and an 18px upward movement. Backgrounds gently zoom by 4.5% per slide.
- Five direct navigation indicators, previous/next arrows, visible pause/start control, arrow-key navigation and horizontal touch gestures. Vertical touch scrolling is preserved.
- Autoplay pauses on control hover, keyboard focus within the carousel, explicit pause and hidden tabs. Timers restart with a full dwell when resumed.
- Reduced motion disables autoplay, zoom, logo assembly and transitions. Navigation remains usable.
- Inactive slides use `aria-hidden` and `inert` to remove hidden links from keyboard and screen-reader navigation. Manual/paused changes are announced; automatic changes are quiet.
- The existing navigation keeps its dark, nearly opaque shell, retaining contrast on dark and photographic slides.

## Validation

The dependency-installation failures below describe the original implementation session. Dependencies have since been installed and the latest lint run passes. See the latest revision above for current browser restrictions.

Passed:

- JSX parser checks for changed UI components using the available local SWC parser.
- CSS parser check for the carousel module using the available local PostCSS parser.
- `node --check` for both changed test files and Playwright configuration.
- `git diff --check`.
- Visual inspection of the official logo assets and all four edited backgrounds; no mockup UI remains in those backgrounds.

Blocked in this environment:

- `npm ci`: npm registry resolution fails with `ENOTFOUND`; offline installation fails with `ENOTCACHED` because the exact locked dependency versions are not all cached.
- `npm run build`: `next: not found` after incomplete dependency installation.
- `npm run lint`: `eslint: not found`.
- `npm run test:e2e -- --project=mobile-390`: `playwright: not found`.
- Direct Chrome visual testing also failed at browser startup: `setsockopt: Operation not permitted` followed by a crash. Consequently actual browser responsiveness, runtime accessibility and timed interaction tests are not claimed as passed.

These full checks must be rerun in a local environment with registry access and browser support before deployment.

## Local preview and complete validation

From the workspace root:

```bash
cd Adesa-hq
npm ci
npm run dev
```

Open `http://localhost:3000`. Check all five slides at desktop, tablet and mobile widths, including swipe, keyboard controls, hover/focus pause and reduced motion.

For production-build validation, stop the development server, then:

```bash
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

On Linux with Chrome already installed, browser installation can be skipped by using:

```bash
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/google-chrome npm run test:e2e
```

The existing Playwright configuration starts the production server automatically. Ensure another development server is not occupying port 3000 when validating the production build. Do not deploy until explicitly authorized.
