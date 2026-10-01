# Mobile Products Carousel

## Goal
Keep the existing multi-column product grid on larger screens while presenting products as a swipeable, two-card-per-slide carousel on phones.

## Implementation
- Group the seven products into mobile slides containing two product cards each; the final slide will contain the remaining product.
- Add touch-friendly horizontal swiping with smooth scroll snapping on small screens.
- Add synchronized navigation dots below the carousel so the active slide and total slide count are clear; dots will also be clickable.
- Keep the current product grid unchanged from the small breakpoint upward.
- Preserve each product card’s existing styling, copy, and image behavior, including independent auto-playing color sliders for Nitrile Gloves and Disposable Hair Nets.
- Use compact mobile card spacing and type sizing so two full product cards remain readable without horizontal clipping.

## Validation
- Verify swipe and navigation-dot behavior at a phone viewport.
- Confirm the image sliders continue cycling within the mobile product carousel.
- Confirm the desktop layout remains a multi-column grid and the page has no visual or runtime errors.
