# Suitsupply.com Behavior Bible

## Header Scroll Behavior
- **Trigger:** Scroll down past ~10px
- **State A (visible):** transform: translateY(0), backgroundColor: rgba(0,0,0,0) [transparent on hero], rgba(255,255,255,1) [on white sections]
- **State B (hidden):** transform: translateY(-100%), applied via class `Header_header__hidden__RzGsL`
- **Transition:** transform 0.3s cubic-bezier(0.49,0.03,0.13,0.99)
- **Implementation:** JS scroll listener adds/removes hidden class

## Hero Banner
- **Interaction model:** Static — no click or scroll-driven behavior
- **Image:** Full-viewport-width, 730px height, object-cover
- **Label:** "New Arrivals" absolutely positioned bottom-left, padding 32px
- **Category nav:** Below image, horizontal scrollable on mobile, wraps on desktop

## Image Carousel Sections
- **Interaction model:** Static — no carousel/slider behavior visible at desktop
- **Layout:** flex-row, images fill container side by side
- **Label:** Absolutely positioned bottom-left corner, padding 32px, white text

## Storyboard Section
- **Interaction model:** Hover on each link
- **Hover state:** Link text gets underline decoration
- **Transition:** No explicit transition (instant)

## Footer
- **Interaction model:** Hover states on links only
- **Hover:** Underline on text links

## Responsive Breakpoints
- Desktop: 1440px - 2-column image carousels, full hero
- Tablet: 768px - single column fallback
- Mobile: 390px - horizontal scroll on category nav
